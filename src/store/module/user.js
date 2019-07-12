import { login, authorization } from '@/api/user'
import { setToken } from '@/lib/until'
const state = {
  userName: 'Username',
  rules: {}
}
const mutations = {
  SET_USER_NAME (state, params) {
    state.userName = params
  },
  SET_RULES (state, rules) {
    state.rules = rules
  }
}
const actions = {
  login ({ commit }, { userName, password }) {
    return new Promise((resolve, reject) => {
      login({ userName, password }).then(res => {
        if (res.code === 200 && res.data.token) {
          setToken(res.data.token)
          resolve()
        } else {
          reject(new Error('错误--error'))
        }
      }).catch(error => {
        reject(error)
        // console.log(error)
      })
    })
  },
  authorization ({ commit }, token) {
    return new Promise((resolve, reject) => {
      authorization().then(res => {
        if (parseInt(res.code) === 401) {
          reject(new Error('token error'))
        } else {
          setToken(res.data.token)
          resolve(res.data.rules.page)
          commit('SET_RULES', res.data.rules.component)
        }
      }).catch(error => {
        reject(error)
      })
    })
  },
  logout () {
    setToken('')
  }
}
export default {
  namespaced: false,
  state,
  mutations,
  actions
}
