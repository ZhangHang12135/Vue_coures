<template>
  <div class="floder-wrapper">
    <folder-tree
      :folder-list.sync="folderList"
      :file-list.sync="fileList"
      :folder-drop="folderDrop"
      :file-drop="fileDrop"
      :beforeDelete="beforeDelete"></folder-tree>
  </div>
</template>
<script>
import { getFolderList, getFileList } from '@/api/data'
import { async, Promise, reject } from 'q';
import FolderTree from '_c/folder-tree'
import { setTimeout } from 'timers';
export default {
  components: {
    FolderTree
  },
  data() {
    return {
      folderList: [],
      fileList: [],
      folderTree: [],
      folderDrop: [
        {
          name: 'rename',
          title: '重命名'
        },
        {
          name: 'delete',
          title: '删除'
        }
      ],
      fileDrop: [
        {
          name: 'rename',
          title: '重命名'
        },
        {
          name: 'delete',
          title: '删除'
        }
      ]
    }
  },
  methods: {
    beforeDelete () {
      //实际调用接口
      return new Promise((resolve, reject) => {
        setTimeout(()=>{
          let error = null
          if (!error) {
            resolve()
          } else reject(error)
        }, 2000)

      })
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
      // this.folderTree = transferFolderToTree(putFileInFolder(res[0],res[1]))
      this.folderList = res[0]
      this.fileList = res[1]
    })
  }
}
</script>
<style lang="less">
.floder-wrapper{
  width: 300px;
}
</style>

