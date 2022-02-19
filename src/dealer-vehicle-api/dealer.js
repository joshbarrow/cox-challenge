import axios from "axios";
import DatasetApi from "./dataset";

export default class DealerApi {
  static async getDealer(datasetId) {
    const response = await axios.get(
      `http://api.coxauto-interview.com/api/${datasetId}/vehicles`
    );
    return response.data.vehicleIds;
  }
}
