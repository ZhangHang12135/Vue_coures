<template>
  <div class="floder-wrapper">
    <Tree :data="folderTree" :render="renderFunc"></Tree>
  </div>
</template>
<script>
import { getFolderList, getFileList } from '@/api/data'
import { async, Promise } from 'q';
import { putFileInFolder, transferFolderToTree } from '@/lib/until'
export default {
  data() {
    return {
      folderList: [],
      fileList: [],
      folderTree: [],
      renderFunc: (h, { root, node, data }) => {
        return (
          <div class="tree-item">
          { data.type === 'folder' ? <icon type="ios-folder" color="#2d8cf0" style="margin:0 5px"/> : '' }
          { data.title }
          </div>
        )
      }
    }
  },
  // 使用es8的这个语法糖，就跟同步一样的啦，
  // async mounted () {
  //   let a = await getFolderList()
  //   console.log(a)
  //   let b = await getFileList()
  //   console.log(b)
  //   console.log('异步测试')
  // }
  // 应该是这个样子的链式调用吧

  // 这个是笨办法。。哈哈哈
  // mounted () {
  //   getFolderList().then(res => {
  //     console.log(res)
  //     getFileList().then(res => {
  //       console.log(res)
  //     }).then(()=>{
  //       console.log("异步测试")
  //     })
  //   })
  // }

  // 视频中的
  mounted () {
    Promise.all([getFolderList(), getFileList()]).then(res => {
      this.folderTree = transferFolderToTree(putFileInFolder(res[0],res[1]))
    })
  }
}
</script>
<style lang="less">
.floder-wrapper{
  width: 300px;
  .tree-item{
    display: inline-block;
    width: ~"calc(100% - 50px)";
  }
}
</style>

