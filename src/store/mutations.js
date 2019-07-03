import vue from 'vue'
const mutations = {
  SET_APP_NAME (state, params) {
    state.appName = params
  },
  SET_APP_VERSION (state) {
    vue.set(state, 'appVersion', 'v3.0')
  },
  SET_STATE_VALUE (state, params) {
    state.stateValue = params
    // vue.set(state, 'stateValue',)
  }
}
export default mutations
