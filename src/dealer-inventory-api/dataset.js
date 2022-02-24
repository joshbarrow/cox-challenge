import DealerApi from './dealer'
import VehicleApi from './vehicle'
import Api from './api'

export default class DatasetApi extends Api {
  static async getId() {
    const response = await this.get('datasetId')
    return response.datasetId
  }

  static async inventory(datasetId) {
    const vehicleIds = await VehicleApi.index(datasetId)
    const dealerAndVehicleData = await this.#dealerInventory(datasetId, vehicleIds)

    return this.#normalizeDealerInventory(dealerAndVehicleData)
  }

  static async validateInventory(datasetId, inventory) {
    return await this.post(`${datasetId}/answer`, inventory)
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
console.log(promises)

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

