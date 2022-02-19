import Api from './api'

export default class DealerApi extends Api {
  static async show(datasetId, dealerId) {
    return await this.get(`${datasetId}/dealers/${dealerId}`)
  }
}
