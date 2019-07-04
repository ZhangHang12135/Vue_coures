import axios from 'axios'
import { baseURL } from '@/config'

class HTTPRequest {
  constructor (baseUrl = baseURL) {
    this.baseUrl = baseUrl
    this.queue = {} // 请求队列 request queue
  }
  getInsideConfig () {
    const config = {
      baseUrl: this.baseUrl,
      headers: {
        //
      }
    }
    // console.log('config:---', config)
    return config
  }
  interceptors (instance, url) {
    // 请求拦截器 request interceptor
    instance.interceptors.request.use(config => {
      // 添加全局的load... add global loading...
      // Spin.show()
      if (!Object.keys(this.queue).length) {}/* Spin.show() */
      this.queue[url] = true
      // console.log('实际拦截到的请求--', config)
      return config
    }, error => {
      return Promise.reject(error)
    })
    // 响应拦截器 response interceptor
    instance.interceptors.response.use(res => {
      delete this.queue[url]
      const { data, status } = res
      // console.log(res)
      return { data, status }
    }, error => {
      return Promise.reject(error)
    })
  }
  request (options) {
    const instance = axios.create() // axios的实例
    // console.log('自定义的---', options)
    options = Object.assign(this.getInsideConfig(), options) // 合并对象，后面覆盖前面
    // console.log('合并之后---', options)
    this.interceptors(instance, options.url) // 添加拦截器
    return instance(options)
  }
}
export default HTTPRequest
