import Api from './api'

export default class VehicleApi extends Api {
  static async index(datasetId) {
    const response = await this.get(`${datasetId}/vehicles`)
    return response.vehicleIds
  }

  static async show(datasetId, vehicleId) {
    return await this.get(`${datasetId}/vehicles/${vehicleId}`)
  }
}
