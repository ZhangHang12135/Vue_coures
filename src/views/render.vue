<template>
    <div>
      <list :list = "list" :render = "renderFun">
        <i slot-scope="count" >{{count.number}}</i>
      </list>
    </div>
</template>
<script>
import List from '_c/list'
import CountTo from '_c/count-to'
export default {
  data() {
    return {
      list: [
        {name: 'liston'},
        {name: 'liston2'},
        {name: 'zhanghnag'},
        {number: 100},
        {number: 100}
      ]
    }
  },
  components: {
    List
  },
  methods: {
    renderFun (h,name){
      // return h('i',{
      //   style: {
      //     color: 'pink'
      //   }
      // }, name)
      return (
        <i on-click={ this.handleClick } style={{ color: 'red' }}>{ name }<CountTo endVal={100}></CountTo></i>

      )
    },
    handleClick (event) {
      console.log(event)
    }
  }
}
</script>
