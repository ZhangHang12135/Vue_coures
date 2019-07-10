<template>
  <div>
    <Upload ref="upload" :action="`${baseURL}/upload_file`" multiple
      :before-upload="beforeUpload"
      :on-success="handleSuccess"
      :show-upload-list="showUploadFile"
      >
      <Button icon="icon-cloud-upload-outline">Upload File</Button>
    </Upload>
    <Button @click="handleUpload">上传吧</Button>
    <Table :columns="columns" :data="fileList"></Table>
    <Modal v-model="showModal">
      <div style="height: 300px; overflow: auto">
        {{ content }}
      </div>
    </Modal>
  </div>
</template>
<script>
import { baseURL } from '@/config'
import { getFilesList, getFile, deleteFile } from '@/api/data'
import { downloadFile } from '@/lib/until'
export default {
  data() {
    return {
      baseURL,
      showModal: false,
      content: '',
      showUploadFile: true,
      file: {},
      columns: [
        { title: '文件key', key: 'key' },
        { title: '文件名', key: 'file_name' },
        { title: '文件类型', key: 'file_type' },
        { title: '文件大小', key: 'file_size' },
        { title: '上传时间', key: 'createdAt' },
        {
          title: '存储有效期',
          key: 'storage_time',
          render: (h, { row }) => {
            return (
              <span>{ row.storage_time ? row.storage_time : '永久'}</span>
            )
          }
        },
        {
          title: '操作',
          key: 'handle',
          render: (h,{ row }) => {
            return (
              <span>
                <i-button size="small" icon="md-arrow-down" on-click={()=>this.download(row.key)}></i-button>
                <i-button size="small" icon="md-book" disabled={!row.file_type.includes('text')} on-click={this.showFileContent.bind(this, row.key)}></i-button>
                <i-button size="small" icon="md-trash" on-click={() => {this.deleteFile(row.key)}}></i-button>
              </span>
            )
          }
        },
      ],
      fileList: []
    }
  },
  methods: {
    beforeUpload (file) {
      this.file = file
      return false
    },
    handleUpload () {
      this.$refs.upload.post(this.file)
    },
    handleSuccess () {
      this.$Message.success('文件上传成功')
      this.updateFileList()
      this.file = null
      this.showUploadFile = false
    },
    updateFileList () {
      getFilesList().then(res => {
        this.fileList = res
      })
    },
    deleteFile (key) {
      this.$Modal.confirm({
        title: '提示',
        content: `您确定要删除?`,
        onOk:() => {
          deleteFile(key).then(res => {
            this.updateFileList()
            this.$Message.success('删除成功')
          })
        }
      })
    },
    download (key) {
      downloadFile({
        url: `${baseURL}/get_file`,
        params: {
          key,
          type: 'download'
        }
      })
    },
    showFileContent (key) {
      getFile({
        key,
        type: 'text'
      }).then(res => {
        console.log(res)
        this.content = res
        this.showModal = true
      })
    }
  },
  mounted () {
    this.updateFileList()
  }
}
</script>

<style lang="less">

</style>

