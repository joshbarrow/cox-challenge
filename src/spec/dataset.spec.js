import DatasetApi from "../dealer-vehicle-api/dataset";

describe("DatasetApi", () => {
  describe(".getId", () => {
    it("returns a dataset id (a string with eleven characters)", async () => {
      const datasetId = await DatasetApi.getId();
      expect(typeof datasetId).toBe("string");
      expect(datasetId.length).toBe(11);
    });
  });

  describe(".inventory", () => {
    it("returns the inventory of a particualr dataset", async () => {
      const datasetId = await DatasetApi.getId();
      const result = await DatasetApi.inventory(datasetId);
      expect(result.dealers.constructor).toBe(Array);
      expect(result.dealers.length).toBe(3);
      result.dealers.forEach((dealer) => {
        expect(typeof dealer.dealerId).toBe("number");
        expect(typeof dealer.name).toBe("string");
        expect(dealer.vehicles.length).toBe(3);
        dealer.vehicles.forEach((vehicle) => {
          expect(typeof vehicle.make).toBe("string");
          expect(typeof vehicle.model).toBe("string");
          expect(typeof vehicle.year).toBe("number");
        });
      });
    });
  });

  describe(".validateInventory", () => {
    it("returns successful response", async () => {
      const datasetId = await DatasetApi.getId();
      const inventory = await DatasetApi.inventory(datasetId);
      const response = await DatasetApi.validateInventory(datasetId, inventory);
      expect(response.success).toBe(true);
    });
  });
});
