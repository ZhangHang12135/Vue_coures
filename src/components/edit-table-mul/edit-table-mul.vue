<template>
  <Table :columns="insideColumns" :data="value"></Table>
</template>
<script>
import clonedeep from 'clonedeep'
export default {
  name: 'EditTableMul',
  data() {
    return {
      insideData: [],
      insideColumns: [],
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
    },
    value () {
      this.handleColumns()
    }
  },
  methods: {
    handleClick ({row, index, column}) {
      let keyIndex = this.insideData[index].edittingKeyArr
      ? this.insideData[index].edittingKeyArr.indexOf(column.key)
      : -1
      let rowObj = this.insideData[index]
      if (keyIndex > -1){
        rowObj.edittingKeyArr.splice(keyIndex, 1)
        this.insideData.splice(index, 1, rowObj)
        this.$emit('input', this.insideData)
        this.$emit('on-edit', { row, index, column, newValue: this.insideData[index][column.key]})
      } else {
        rowObj.edittingKeyArr = ( rowObj.edittingKeyArr)
        ? [...rowObj.edittingKeyArr, column.key]
        : [column.key]
        this.insideData.splice(index, 1, rowObj)
      }
    },
    handleInput ({row, index, column},newValue){
      this.insideData[index][column.key] = newValue
    },
    handleColumns () {
      this.insideData = clonedeep(this.value)
    // 将传过来的数据进行一个映射处理
      const insideColumns = this.columns.map(item => {
      if (!item.render && item.editable) {
        item.render = (h, { row, index, column }) => {
          // console.log(row[column.key])
          const keyArr = this.insideData[index] ? this.insideData[index].edittingKeyArr : []
          return (
            <div>
              {keyArr && keyArr.indexOf(column.key) > -1
                ? <i-input value={row[column.key]} style="width: 50px;" on-input={this.handleInput.bind(this, {row, index, column})}></i-input>
                : <span>{ row[column.key] }</span>
              }
              <i-button on-click={ this.handleClick.bind(this, { row, index, column }) }>{keyArr && keyArr.indexOf(column.key) > -1 ? '保存' : '编辑'}</i-button>
            </div>
          )
        }
        return item
      }else return item
    })
    this.insideColumns = insideColumns
    }
  },
  mounted () {
    this.handleColumns()
  }
}
</script>
