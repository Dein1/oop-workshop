import axios from 'axios';

const host = 'http://ip-api.com/json/';

export const getIpInfo = async (ip) => {
  try {
    const response = await axios.get(`${host}${ip}`);
    return response.data;
  } catch (e) {
    return e;
  }
};


export class Geodata {
  constructor(data) {
    this.data = data;
  }

  parse() {
    const parsedData = this.data
      |> JSON.stringify
      |> JSON.parse;
    return parsedData;
  }

  format() {
    const {
      country,
      region,
      city,
      status,
    } = this.parse();
    if (status === 'success') {
      return `country: ${country} | region: ${region} | city: ${city}`;
    }
    return 'Invalid IP';
  }
}

export default async (ip) => {
  const ipInfo = await getIpInfo(ip);
  const geo = new Geodata(ipInfo);
  console.log(geo.format());
};
