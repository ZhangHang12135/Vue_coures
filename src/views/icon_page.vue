<template>
  <div>
    <Icon type="md-menu" :size="50" color="pink"/>
    <i class="iconfont smail">&#xe68b;</i>
    <i class="iconfont">&#xe68a;</i>
    <i class="iconfont">&#xe688;</i>
    <hr>
    <svg class="icon" aria-hidden="true">
    <use xlink:href="#icon-caihong"></use>
    </svg>
    <hr>
    <i class="iconfont icon-caihong"></i>
    <icon-font icon="jinhangzhong" color="blue" :size="50"></icon-font>
    <icon-svg icon="gongshui" :size="30"></icon-svg>
  </div>
</template>

<script>
import IconFont from '_c/icon-font'
import IconSvg from '_c/icon-svg'
export default {
  components: {
    IconFont,
    IconSvg
  }
}
</script>
<style lang="less">
.smail{
  color: pink
}
</style>

