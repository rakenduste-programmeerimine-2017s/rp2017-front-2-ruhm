import axios from 'axios'
import NProgress from 'nprogress'
import '../../node_modules/nprogress/nprogress.css'

const BASE_URL = '/api'

export default (method, url, query) => {
  NProgress.start()

  const token = localStorage.jwt

  return axios
    .request({
      method: method,
      baseURL: BASE_URL, // NB `baseURL` will be prepended to `url` unless `url` is absolute.
      url: url,
      data: query.data || {}, // PUT, POST, PATCH body
      params: query.params || {}, // url params
      headers: token 
        ? { Authorization: `Bearer ${token}` }
        : {}

    })
    .then(response => {
      NProgress.done()
      return Promise.resolve(response.data)
    })
    .catch(err => {
      NProgress.done()
      console.error(err)
      return Promise.reject(err.response)
    })
}
