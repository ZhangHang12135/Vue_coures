<template>
  <Table :columns="insideColuments" :data="value"></Table>
</template>
<script>
import clonedeep from 'clonedeep'
export default {
  name: 'EditTable',
  data() {
    return {
      insideColuments: [],
      edittingId: '',
      editingContent: ''
    }
  },
  props: {
    columns: {
      type: Array,
      default: () => []
    },
    value: {
      type: Array,
      default: () => []
    }
  },
  watch: {
    // 监听表头的变化
    columns () {
      this.handleColumns()
    }
  },
  methods: {
    handleClick ({row, index, column}) {
      // console.log(row)
      if (this.edittingId === `${column.key}_${index}`){
        let tableData = clonedeep(this.value)
        tableData[index][column.key] = this.editingContent || tableData[index][column.key]
        this.$emit('input', tableData)
        this.$emit('on-edit', { row, index, column, newValue: this.editingContent})
        this.edittingId = ''
        this.editingContent =''
      } else {
        this.edittingId = `${column.key}_${index}`
      }
    },
    handleInput (newValue){
      this.editingContent = newValue
    },
    handleColumns () {
// 将传过来的数据进行一个映射处理
    const insideColuments = this.columns.map(item => {
      if (!item.render && item.editable) {
        item.render = (h, { row, index, column }) => {
          // console.log(row[column.key])
          const isEditing = this.edittingId === `${column.key}_${index}`
          return (
            <div>
              {isEditing
                ? <i-input value={row[column.key]} style="width: 50px;" on-input={this.handleInput}></i-input>
                : <span>{ row[column.key] }</span>
              }
              <i-button on-click={ this.handleClick.bind(this, { row, index, column }) }>{isEditing ? '保存' : '编辑'}</i-button>
            </div>
          )
        }
        return item
      }else return item
    })
    this.insideColuments = insideColuments
    }
  },
  mounted () {
    this.handleColumns()
  }
}
</script>
