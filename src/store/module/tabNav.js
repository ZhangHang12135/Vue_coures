import { routeHasExist } from '@/lib/until'
const state = {
  tabList: []
}
const mutations = {
  UPDATE_ROUTER (state, route) {
    if (!routeHasExist(state.tabList, route)) state.tabList.push(route)
  }
}
const actions = {

}
export default {
  state,
  mutations,
  actions
}
