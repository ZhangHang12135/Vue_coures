<template>
  <div class="split-pane-con">
    <split-pane :value.sync="offset">
      <div slot="left">Left</div>
      <div slot="right">right</div>
    </split-pane>
  </div>
</template>
<script>
import SplitPane from '_c/split-pane'
export default {
  name: 'split_pane',
  components: {
    SplitPane
  },
  data() {
    return {
      offset: 0.5
    }
  },
  methods: {
    // handleInput (value) {
    //   this.offset = value
    // }
  }
}
</script>
<style lang="less">
.split-pane-con {
  width: 400px;
  height: 200px;
  background: papayawhip
}
</style>

