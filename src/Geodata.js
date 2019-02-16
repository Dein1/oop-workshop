import axios from 'axios';

const host = 'http://ip-api.com/json/';

export default class Geodata {
  constructor(fetchModule = axios) {
    this.fetchModule = fetchModule;
  }

  parse = async (data) => {
    const parsedData = data
      |> JSON.stringify
      |> JSON.parse;
    return parsedData;
  }

  fetchIpInfo = async (ip) => {
    const response = await this.fetchModule.get(`${host}${ip}`);
    return response.data;
  }

  getGeoDataByIp = async (ip) => {
    const data = await this.fetchIpInfo(ip);
    const {
      country,
      region,
      city,
      status,
    } = await this.parse(data);
    if (status === 'success') {
      return `country: ${country} | region: ${region} | city: ${city}`;
    }
    return 'Invalid IP';
  }
}
