import axios from 'axios'

export default class Api {
  static async get(path) {
    const response = await axios.get(this.url(path))
    return response.data
  }

  static async post(path, data) {
    const response = await axios.post(this.url(path), data)
    return response.data
  }

  static url(path) {
    return `http://api.coxauto-interview.com/api/${path}`
  }
}
