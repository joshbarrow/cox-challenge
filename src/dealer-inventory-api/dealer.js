import axios from 'axios'

export default class DealerApi {
  static async show(datasetId, dealerId) {
    const response = await axios.get(`http://api.coxauto-interview.com/api/${datasetId}/dealers/${dealerId}`)
    return response.data
  }
}
