import axios from "axios";
import DatasetApi from './dataset'

export default class VehicleApi {
  static async getVehicleIds(datasetId) {
    const response = await axios.get(
      `http://api.coxauto-interview.com/api/${datasetId}/vehicles`
    );
    return response.data.vehicleIds;
  }
}
