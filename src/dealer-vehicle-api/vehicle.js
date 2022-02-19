import axios from "axios";
import DatasetApi from "./dataset";

export default class VehicleApi {
  static async index(datasetId) {
    const response = await axios.get(
      `http://api.coxauto-interview.com/api/${datasetId}/vehicles`
    );
    return response.data.vehicleIds;
  }

  static async show(datasetId, vehicleId) {
    const response = await axios.get(
      `http://api.coxauto-interview.com/api/${datasetId}/vehicles/${vehicleId}`
    );
    return response.data;
  }
}
