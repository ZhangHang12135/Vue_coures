/**
 * 持久化存储插件 ，因为store存在内存中的，有时候我们需要存在本地
 */
export default store => {
  console.log('store init -----')
  if (localStorage.state) store.replaceState(JSON.parse(localStorage.state))
  store.subscribe((mutations, state) => {
    localStorage.state = JSON.stringify(state)
    console.log('commit mutation')
  })
}
