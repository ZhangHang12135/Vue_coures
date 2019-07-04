<template>
  <div>
    <count-to ref="countTo" :end-val="endVal" :decimals="2" @on-animation-end="handleEnd" :className="test">
      <span slot="left">总金额</span>
      <span slot="right">$</span>
    </count-to>
    <button @click="getNumber">获取实例</button>
    <button @click="addVal"> 更新值</button>
  </div>
</template>

<script>
import CountTo from '_c/count-to'
export default {
  name: 'count_to',
  components: {
    CountTo
  },
  data() {
    return {
      endVal: 100,
      test: 'test'
    }
  },
  methods: {
    getNumber () {
      this.$refs.countTo.getCount()
    },
    addVal () {
      this.endVal += 100
    },
    handleEnd (endVal) {
      console.log('end ->',endVal)
    }
  }
}
</script>

