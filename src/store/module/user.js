const state = {
  userName: 'Username'
}
const mutations = {
  SET_USER_NAME (state, params) {
    state.userName = params
  }
}
const actions = {
  //
}
export default {
  namespaced: false,
  state,
  mutations,
  actions
}
