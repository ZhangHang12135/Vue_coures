
/**
 * 异步操作处理，ex: 向服务端请求接口
 */
import { getAppName } from '@/api/app'

const actions = {
  // updateAppName ({ commit }) {
  //   getAppName().then(res => {
  //     const { info: { appName } } = res
  //     commit('SET_APP_NAME', appName)
  //     console.log(res)
  //   }).catch(err => {
  //     console.log(err)
  //   })
  // }
  // es8
  async updateAppName ({ commit }) {
    try {
      const { info: { appName } } = await getAppName()
      commit('SET_APP_NAME', appName)
    } catch (error) {
      console.log(error)
    }
  }
}
export default actions
