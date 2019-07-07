import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Bus from './lib/bus'
import iview from 'iview'
import 'iview/dist/styles/iview.css'
// import CountTo from '_c/count-to'
// if (process.env.NODE_ENV !== 'production') require('./mock')
// if (process.env.NODE_ENV !== 'production') require('./mock')

Vue.config.productionTip = false
Vue.prototype.$bus = Bus
Vue.use(iview)
// const handleClick = event => {
//   console.log(event)
//   event.stopPropagation()
// }
// const list = [{ name: 'if I were' }, { name: 'you, I must' }, { name: 'love me' }]
// const getLiEleArr = h => {
//   return list.map((item, index) => h('li', {
//     on: {
//       'click': handleClick
//     },
//     key: `list_item_${index}`
//   }, item.name))
// }

new Vue({
  router,
  store,
  // render: h => {
  //   return h(CountTo, {
  //     'class': {
  //       'count-to': true
  //     },
  //     style: {
  //       color: 'pink'
  //     },
  //     attrs: {

  //     },
  //     props: {
  //       endVal: 100
  //     },
  //     // domProps: {
  //     //   innerHTML: '123'
  //     // },
  //     on: {
  //       'on-animation-end': (val) => {
  //         console.log('end---', val)
  //       }
  //     },
  //     nativeOn: {
  //       'click': () => {
  //         console.log('click')
  //       }
  //     },
  //     directives: [],
  //     scopedSlots: {},
  //     slot: '',
  //     key: '',
  //     ref: ''
  //   })
  // }
  // render: h => h('div', {}, [
  //   h('ul', {
  //     on: {
  //       'click': handleClick
  //     }
  //   }, getLiEleArr(h))
  // ])
  // render (h) {
  //   return h(App)
  // }
  render: h => h(App)
}).$mount('#app')
