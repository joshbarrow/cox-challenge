import axios from 'axios'
import DealerApi from './dealer'
import VehicleApi from './vehicle'

export default class DatasetApi {
  static async getId() {
    const response = await axios.get('http://api.coxauto-interview.com/api/datasetId')
    return response.data.datasetId
  }

  static async inventory(datasetId) {
    const vehicleIds = await VehicleApi.index(datasetId)
    const dealerAndVehicleData = await this.#dealerInventory(datasetId, vehicleIds)

    return this.#normalizeDealerInventory(dealerAndVehicleData)
  }

  static async validateInventory(datasetId, inventory) {
    const response = await axios.post(`http://api.coxauto-interview.com/api/${datasetId}/answer`, inventory)
    return response.data
  }

  static async #dealerInventory(datasetId, vehicleIds) {
    const promises = []
    for (const vehicleId of vehicleIds) {
      promises.push(
        new Promise(async (accept) => {
          const vehicle = await VehicleApi.show(datasetId, vehicleId)
          const dealer = await DealerApi.show(datasetId, vehicle.dealerId)
          accept({
            vehicle,
            dealer,
          })
        })
      )
    }
    return await Promise.all(promises)
  }

  static async #normalizeDealerInventory(dealerAndVehicleData) {
    const dealers = {}
    dealerAndVehicleData.forEach(({ vehicle, dealer }) => {
      dealers[dealer.dealerId] ||= {
        ...dealer,
        vehicles: [],
      }
      dealers[dealer.dealerId].vehicles.push(vehicle)
    })

    return { dealers: Object.values(dealers) }
  }
}
