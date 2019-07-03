<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <button @click="handleClick('back')">返回上一页</button>
    <button @click="handleClick('push')">跳转parent</button>
    <button @click="handleClick('replace')">替换parent</button>
    <button @click="getInfo">点我请求数据</button>
    <h1>{{food}}</h1>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
// import axios from 'axios'
import { getUserInfo } from '@/api/user'
export default {
  name: 'home',
  components: {
    HelloWorld
  },
  props: {
    food: {
      type: String,
      default: 'NULL'
    }
  },
  //页面渲染之前，路由触发之后
    beforeRouteEnter (to, from, next) {
      next(vm => {
        // console.log(vm.name) // 可以这样来用this,vm就是当前组件实例，
      })
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
  },
  beforeRouteUpdate (to, from, next) {
    next()
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
  },
//   beforeRouteLeave (to, from , next) {
//   const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
//   if (answer) {
//     next()
//   } else {
//     next(false)
//   }
// },
  // beforeRouteLeave (to, from, next) {
  //   const leave = window.confirm('傻狗，你确定要离开吗？')
  //   if (leave) next()
  //   else next(false)
  //   // 导航离开该组件的对应路由时调用
  //   // 可以访问组件实例 `this`
  //   //ex: 页面编辑没有保存，可以提示是否真的跳转，应该相当于浏览器中的beforeunload页面卸载事件
  // },
  methods: {
    handleClick(type) {
      if (type === 'back') this.$router.back()
      else if (type === 'push') {
        let name = 'zhanghang'
        this.$router.push({
          // name: 'parent' // 这个就相当于点了a标签，会生成一条历史纪录
          // -----------
          // name: 'argu',
          // params: {
          //   name: 'zhanghang'
          // }
          // ---------
          path:  `/argu/${name}`
        })
      } else if (type === 'replace') {
        this.$router.replace({
          name: 'parent' //这个就是把当前的URL给替换掉，并不会产生新的记录
        })
      }
    },
    getInfo () {
      // axios.post('/getUserInfo',{ userId: 21 }).then(res => {
      //   console.log(res)
      // })
      getUserInfo({ userId: 21 }).then(res => {
        console.log('res: ', res)
      })
    }
  }
}
</script>
