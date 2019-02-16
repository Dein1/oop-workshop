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
    const parsedData = await this.parse(data);
    return parsedData;
  }

  format = (geoData) => {
    if (geoData.status === 'success') {
      return `country: ${geoData.country} | region: ${geoData.region} | city: ${geoData.city}`;
    }
    return 'Invalid IP';
  }
}
