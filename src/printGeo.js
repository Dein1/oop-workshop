import Geodata from './Geodata';

export default async (ip) => {
  const geo = new Geodata();
  const geoData = await geo.getGeoDataByIp(ip);
  return geo.format(geoData);
};
