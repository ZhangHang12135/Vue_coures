
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
  // es8 我记得好像是es7出的async,管它呢
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
