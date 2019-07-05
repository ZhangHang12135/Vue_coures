<template>
  <div class="split-pane-wrapper" ref="outer">
    <div class="pane pane-left" :style="{ width: leftOffsetPercent, paddingRight: `${ this.triggerWidth / 2}px` }"><slot name="left"></slot></div>
    <div class="pane pane-trigger-con" @mousedown="handleMouesdown" :style="{ left: triggerLeft, width: `${triggerWidth}px`}"></div>
    <div class="pane pane-right" :style="{ left: leftOffsetPercent, paddingLeft: `${ this.triggerWidth / 2}px`}"><slot name="right"></slot></div>
  </div>
</template>
<script>
export default {
  name: 'SplitPane',
  props: {
    value: {
      type: Number,
      default: 0.5
    },
    triggerWidth: {
      type: Number,
      default: 8
    },
    min: {
      type: Number,
      default: 0.1
    },
    max: {
      type: Number,
      default: 0.9
    }
  },
  data() {
    return {
      // leftOffset: 0.2,
      canMove: false,
      initOffset: 0
    }
  },
  computed: {
    leftOffsetPercent () {
      return `${ this.value * 100}%`
    },
    triggerLeft () {
      return `calc(${this.value * 100}% - ${this.triggerWidth / 2}px)`
    }
  },
  methods: {
    handleChange () {
      this.value += 0.1
    },
    handleMouesdown (event) {
      document.addEventListener('mousemove', this.handleMouesmove)
      document.addEventListener('mouseup', this.handleMouseup)
      this.initOffset = event.pageX - event.srcElement.getBoundingClientRect().left
      this.canMove = true
    },
    handleMouesmove (event) {
      if(!this.canMove) return
      const outerRect = this.$refs.outer.getBoundingClientRect()
      let offset = (event.pageX - this.initOffset + this.triggerWidth / 2 - outerRect.left) / outerRect.width
      offset = offset < this.min ? this.min : offset
      offset = offset > this.max ? this.max : offset
      // this.$emit("input", offset)
      this.$emit("update:value",offset)
    },
    handleMouseup () {
      this.canMove = false
    }
  },
}
</script>
<style lang="less">
.split-pane-wrapper{
  width: 100%;
  height: 100%;
  position: relative;
  .pane{
    position: absolute;
    top: 0;
    height: 100%;
    &-left{
      width: 30%;
      background: palegoldenrod;
    }
    &-right{
      right: 0;
      bottom: 0;
      left: 30%;
      background: palevioletred;
    }
    &-trigger-con{
      position: absolute;
      height: 100%;
      top:0;
      background: palegreen;
      z-index: 10;
      user-select: none;
      cursor: col-resize;
    }
  }
}
</style>

