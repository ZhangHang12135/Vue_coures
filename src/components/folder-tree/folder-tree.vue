<template>
  <Tree :data="folderTree" :render="renderFunc"></Tree>
</template>
<script>
import { putFileInFolder, transferFolderToTree, expandSpecifiedFolder } from '@/lib/until'
import clonedeep from 'clonedeep'
export default {
  name: 'FolderTree',
  data() {
    return {
      folderTree: [],
      currentRenamingId: '',
      currentRenamingContent: '',
      renderFunc: (h, { root, node, data }) => {
        const dropList = data.type === 'folder' ? this.folderDrop : this.fileDrop
        const dropdownRender = dropList.map(item => {
          return (<dropdownItem name={item.name}>{ item.title }</dropdownItem>)
        })
        const isRenaming = this.currentRenamingId === `${data.type || 'file'}_${data.id}`
        return (
          <div class="tree-item">
          { data.type === 'folder' ? <icon type="ios-folder" color="#2d8cf0" style="margin:0 5px"/> : '' }
          {
            isRenaming
            ? <span>
              <i-input value={data.title} on-input={this.handleInput} class="tree-rename-input"></i-input>
              <i-button size="small" type="text" on-click={() => this.saveRename(data)}><icon type="md-checkmark" /></i-button>
              <i-button size="small" type="text"on-click={() => this.delete(data)}><icon type="md-close"/></i-button>
              </span>
            : <span>{ data.title }</span>
          }
          {
            dropList && !isRenaming ?
            <dropdown placement="right-start" on-on-click={ this.handleDropdownClick.bind(this, data) }>
            <i-button size="small" type="text" class="tree-item-button">
              <icon type="md-more"/>
            </i-button>
            <dropdownMenu slot="list">
              { dropdownRender }
            </dropdownMenu>
            </dropdown> : ''
          }
          </div>
        )
      }
    }
  },
  props:{
    folderList: {
      type: Array,
      default: () => []
    },
    fileList: {
      type: Array,
      default: () => []
    },
    folderDrop: Array,
    fileDrop: Array,
    beforeDelete: Function
  },
  watch: {
    folderList () {
      this.transData()
    },
    fileList () {
      this.transData()
    }
  },
  methods: {
    transData () {
      this.folderTree = transferFolderToTree(putFileInFolder(this.folderList, this.fileList))
    },
    isFolder (type) {
      return type === 'folder'
    },
    handleDelete (data) {
      const folderId = data.folder_id
      const isFolder = this.isFolder(data.type)
      let updateListName = isFolder ? 'folderList' : 'fileList'
      let list = isFolder ? clonedeep(this.folderList) : clonedeep(this.fileList)
      list = list.filter(item => item.id !== data.id)
      this.$emit(`update:${updateListName}`, list)
      // 视图更新完之后再展开
      this.$nextTick(() => {
        expandSpecifiedFolder(this, this.folderTree, folderId)
      })
    },
    handleDropdownClick (data,name) {
      if (name === 'rename') {
        this.currentRenamingId = `${data.type || 'file'}_${data.id}`
      } else if( name === 'delete') {
        this.$Modal.confirm({
          title: '提示',
          content: `您确定要删除${this.isFolder(data.type) ? '文件夹' : '文件'}---${data.title}`,
          onOk:() => {
            this.beforeDelete ? this.beforeDelete().then(() => {
              this.handleDelete(data)
            }).catch(() => {
              this.$Message.error("删除失败")
            }) : this.handleDelete(data)
          }
        })
      }
    },
    handleInput (value) {
      this.currentRenamingContent = value
    },
    updataList (list, id) {
      let i =- 1
      let len = list.length
      while (++i < len) {
        let Item = list[i]
        if (Item.id === id) {
          Item.name = this.currentRenamingContent
          list.splice(i, 1, Item)
          break
        }
      }
      return list
    },
    saveRename (data) {
      const id = data.id
      const type = data.type
      const folderId = data.folder_id
      let i = -1
      if (type === 'folder') {
        const list = this.updataList(clonedeep(this.folderList), id)
        this.$emit('update:folderList', list)
      } else {
        const list = this.updataList(clonedeep(this.fileList), id)
        this.$emit('update:fileList', list)
      }
      this.$nextTick(() => {
        expandSpecifiedFolder(this, this.folderTree, folderId)
      })
      this.currentRenamingId = ''
    }
  },
  mounted () {
    this.transData()
  }
}
</script>
<style lang="less">
.tree-item{
    display: inline-block;
    width: ~"calc(100% - 50px)";
    height: 30px;
    line-height: 30px;
    & > .ivu-dropdown{
      float: right;
    }
    ul.ivu-dropdown{
      padding-left: 0;
    }
    li.ivu-dropdown-item{
      margin: 0;
      padding: 7px 16px;
    }
    .tree-rename-input{
      width:~"calc(100% - 80px)"
    }
  }
</style>

