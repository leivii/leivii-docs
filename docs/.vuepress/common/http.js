import axios from 'axios'
import { Message } from 'element-ui'
import { transMsg } from 'leivii'
import { debounce } from 'throttle-debounce'
import './mock.js'

const goLogin = debounce(200, error => {
  // if (location.hash.startsWith('#/login')) return
  // window.location.href = window.location.href.split('#')[0] + '#/login?f=' + location.hash.substr(1)
  Message({
    message: transMsg(error.message),
    type: 'error',
    duration: 2 * 1000,
    showClose: true,
  })
})

axios.defaults.timeout = 360000
// axios.defaults.baseURL = 'http://rap2api.taobao.org/app/mock/272877/leto-wes'
axios.defaults.withCredentials = true


axios.interceptors.request.use(
  (config) => {
    if (config.dataType === 'FormData') {
      let formdata = new FormData
      if (config.data) {
        for (let p in config.data) {
          formdata.append(p, config.data[p])
        }
      }
      config.data = formdata
    }
    return config
  }
)

// http response 拦截器
axios.interceptors.response.use(
  (response) => {
    // console.table([{ URL: response.config.url, METHOD: response.config.method, RESPONSE: response.data }])
    console.group('Mock', response.config.url)
    console.log('%cRequest URL:', 'font-weight: bold', response.config.url)
    console.log('%cRequest Method:', 'font-weight: bold', response.config.method.toUpperCase())
    response.config.params && Object.keys(response.config.params).length && console.log('%cQuery Parameters:', 'font-weight: bold', response.config.params)
    response.config.data && console.log('%cRequest Payload:', 'font-weight: bold', JSON.parse(response.config.data))
    console.log('%cResponse:', 'font-weight: bold', response.data)
    console.groupEnd()

    if ([2, 3].includes(response.data.code)) {
      const params = location.hash
      // eslint-disable-next-line
      if (window.location.hostname === "localhost") {
        window.location.href = 'http://localhost:8080/#/login?f=' + params
        return false
      }
      window.top.location.href = `${window.location.pathname}#/login?f=${params}`
      // window.top.location.href = (Config.loginUrl) ? Config.loginUrl + params : `${window.location.pathname}#/login${params}`
    }
    if (response.data.code == 106) {
      setTimeout(() => {
        window.open('', '_self').close()
      }, 1000)
    }
    if (response.data.code && ![0, 2].includes(response.data.code)) {
      let message = transMsg(response.data.msg)
      message && Message({
        message,
        type: 'error',
        duration: 2 * 1000,
        showClose: true,
      })
    } 
    const res = response
    if (typeof res.data !== 'string') {
      // 统一处理页码返回0的问题
      if (res.data.data && res.data.data.currentPage === 0) {
        res.data.data.currentPage = 1
      }
      res.data.config = response.config
    }
    return res.data
  },
  (error) => {
    if (error.message === 'Network Error') {
      // window.location.href = 'http://localhost:8080/#/wes/login'
      goLogin(error)
    }
    Promise.reject(error)
  },
)


export default axios

export const GET = (url, params, options = {}) => axios({ url, method: 'GET', params, ...options })
export const POST = (url, data, options = {}) => axios({ url, method: 'POST', data, ...options })
export const DELETE = (url, data, options = {}) => axios({ url, method: 'DELETE', data, ...options })
export const PUT = (url, data, options = {}) => axios({ url, method: 'PUT', data, ...options })
