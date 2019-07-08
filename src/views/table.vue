<template>
  <div>
    <!-- <edit-table :columns="columns" v-model="tableData" @on-edit="handleEdit"></edit-table> -->
    <edit-table-mul :columns="columns" v-model="tableData"></edit-table-mul>
  </div>
</template>
<script>
import { getTableData } from '@/api/data'
import EditTableMul from '_c/edit-table-mul'
export default {
  components: {
    EditTableMul
  },
  data() {
    return {
      tableData: [],
      columns: [
        { key: 'name', title: '姓名' },
        { key: 'age', title: '年龄', editable: true },
        { key: 'email', title: '邮箱', editable: true}
      ]
    }
  },
  methods: {
    handleEdit ({row, index, column, newValue}) {
      console.log( index, column, newValue)
    }
  },
  mounted () {
    getTableData().then(res => {
      this.tableData = res
      // console.log(res)
    })
  }
}
</script>
