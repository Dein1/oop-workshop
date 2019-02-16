import axios from 'axios';
import Geodata from './Geodata';

const host = 'http://ip-api.com/json/';

export const getIpInfo = async (ip) => {
  try {
    const response = await axios.get(`${host}${ip}`);
    return response.data;
  } catch (e) {
    return e;
  }
};

export default async (ip) => {
  const ipInfo = await getIpInfo(ip);
  const geo = new Geodata(ipInfo);
  console.log(geo.format());
};
