import VehicleApi from "../dealer-vehicle-api/vehicle";
import DatasetApi from "../dealer-vehicle-api/dataset";

describe("VehicleApi", () => {
  describe(".getVehicleIds", () => {
    it("returns an array of vehicle ids", async () => {
      const datasetId = await DatasetApi.getId()
      const vehicleIds = await VehicleApi.getVehicleIds(datasetId);
      expect(Array.isArray(vehicleIds)).toBe(true)
      expect(vehicleIds.length).toBe(9)
      expect(vehicleIds.find((id) => typeof id !== "number" )).toBeUndefined()
    });
  });
});
