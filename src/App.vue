<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link :to="{name: 'home'}">Home</router-link> |
      <router-link to="/about">About</router-link>
      <router-link :to = "{ name: 'parent'}">test</router-link>
    </div> -->
    <!-- <transition-group :name="routerTransition"> -->
      <router-view key="default"/>
      <router-view key="email" name="email"/>
      <router-view key="tel" name="tel" />
    <!-- </transition-group> -->

  </div>
</template>
<script>
export default {
  data() {
    return {
      routerTransition: ''
    }
  },
  watch: {
    '$route' (to) {
      to.query && to.query.transitionName && (this.routerTransition = to.query.transitionName)
    }
  },
}
</script>

<style lang="less">
html,body{
  height: 100%;
}
body{
  margin: 0;
}
.router-enter {
  // 没显示的状态 相当于css的动画开始状态
  opacity: 0;
}
.router-enter-active {
  //从无到有的动态效果
  transition: opacity 1s ease;
}
.router-enter-to {
  //完全显示的状态
  opacity: 1;
}
.router-leave {
  // 没显示的状态 相当于css的动画开始状态
  opacity: 1;
}
.router-leave-active {
  //从无到有的动态效果
  transition: opacity 1s ease;
}
.router-leave-to {
  //完全显示的状态
  opacity: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  height: 100%;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
