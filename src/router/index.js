import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'
import store from '@/store'
import { setTitle, getToken, setToken } from '@/lib/until'
// 这里是创建路由实例的
Vue.use(Router)

const router = new Router({
  routes
})

// 实际工作中这里是接口判断
// const HAS_LOGINED = false

// 这里做一个登录跳转示例
// to 即将跳转的页面的路由对象
// from 离开的页面的路由对象

router.beforeEach((to, from, next) => {
  to.meta && setTitle(to.meta.title)
  // // if is not login page
  // if (to.name !== 'login') {
  //   if (HAS_LOGINED) next()
  //   else next({ name: 'login' })
  // } else {
  //   if (HAS_LOGINED) next({ name: 'home' })
  //   else next()
  // }
  const token = getToken()
  if (token) {
    store.dispatch('authorization', token).then(() => {
      if (to.name === 'login') next({ name: 'home' })
      else next()
    }).catch(() => {
      setToken('')
      next({ name: 'login' })
    })
  } else {
    if (to.name === 'login') next()
    else next({ name: 'login' })
  }
  // next()
}) // 注册全局前置守卫

// 导航确认之前(所有导航钩子被确认)，同时在所有组件内守卫和异步路由组件被解析之后
// router.beforeResolve((to, from, next) => {
//   //
//   next()
// })
// 后置守卫（阻止不了跳转，就叫后置钩子吧）
// router.afterEach((to, from) => {
//   // logining = false
// })
export default router // new Router({
// mode: 'hash', // 默认是hash模式，就是那个url带有#号的，实际页面并没有跳转，只是模拟刷新
// history 不带#号，所有后端匹配不到的路由全部匹配到 index.html,前端也匹配不到的路由就会报404
// 好像实际没有啊，
// 这里需要自己设置所有匹配不到的路由跳转到自定义404页面
//   routes: routes
// })

/**
 * 1. 导航被触发
 * 2. 在失活的组件（即将离开的页面组件）里调用离开守卫 beforeRouteLeave
 * 3. 调用全局的前置守卫 beforeEach
 * 4. 在重用的组件里调用 beforeRouteUpdate
 * 5. 调用路由独享的守卫 beforeEnter
 * 6. 解析异步路由组件
 * 7. 在被激活的组件（即将进入的页面组件），调用 beforeRouteEnter
 * 8. 调用全局解析守卫 beforeResolve
 * 9. 导航被确认
 * 10. 调用全局的后置守卫 afterEach
 * 11. 触发DOM更新
 * 12. 用创建好的实例调用 befroeRouteEnter守卫里传给next的回调
 */
