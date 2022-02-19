import VehicleApi from '../dealer-vehicle-api/vehicle'
import DatasetApi from '../dealer-vehicle-api/dataset'

describe('VehicleApi', () => {
  describe('.index', () => {
    it('returns an array of vehicle ids', async () => {
      const datasetId = await DatasetApi.getId()
      const vehicleIds = await VehicleApi.index(datasetId)
      expect(Array.isArray(vehicleIds)).toBe(true)
      expect(vehicleIds.length).toBe(9)
      expect(vehicleIds.find((id) => typeof id !== 'number')).toBeUndefined()
    })
  })

  describe('.show', () => {
    it('returns a vehicle object', async () => {
      const datasetId = await DatasetApi.getId()
      const vehicleIds = await VehicleApi.index(datasetId)
      const vehicleId = vehicleIds[0]
      const vehicle = await VehicleApi.show(datasetId, vehicleId)
      expect(typeof vehicle.dealerId).toBe('number')
      expect(typeof vehicle.model).toBe('string')
      expect(typeof vehicle.make).toBe('string')
      expect(typeof vehicle.year).toBe('number')
    })
  })
})
