import axios from "axios";

export default class DatasetApi {
  static async getId() {
    const response = await axios.get(
      "http://api.coxauto-interview.com/api/datasetId"
    );
    return response.data.datasetId
  }
}