import DealerApi from '../dealer-vehicle-api/dealer'
import DatasetApi from '../dealer-vehicle-api/dataset'
import VehicleApi from '../dealer-vehicle-api/vehicle'

describe('DealerApi', () => {
  describe('.show', () => {
    it('returns a dealer object', async () => {
      const datasetId = await DatasetApi.getId()
      const vehicleIds = await VehicleApi.index(datasetId)
      const vehicleId = vehicleIds[0]
      const vehicle = await VehicleApi.show(datasetId, vehicleId)
      const dealer = await DealerApi.show(datasetId, vehicle.dealerId)
      expect(typeof dealer.dealerId).toBe('number')
      expect(typeof dealer.name).toBe('string')
    })
  })
})
