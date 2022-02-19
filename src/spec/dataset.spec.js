import DatasetApi from "../dealer-vehicle-api/dataset";

describe("DatasetApi", () => {
  describe(".getId", () => {
    it("returns a dataset id (a string with eleven characters)", async () => {
      const datasetId = await DatasetApi.getId();
      expect(typeof datasetId).toBe("string");
      expect(datasetId.length).toBe(11);
    });
  });
});
