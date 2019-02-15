import { Geodata, getIpInfo } from '../src/Geodata';
import fixture from './fixtures.json';

test('should print proper geodata', () => {
  const geoData = new Geodata(fixture);
  const formattedGeoData = geoData.format();
  expect(formattedGeoData).toBe('country: Russia | region: MOW | city: Moscow');
});

test('should parse right - 134.234.3.2', async () => {
  const ipInfo = await getIpInfo('134.234.3.2');
  const geoData = new Geodata(ipInfo);
  const parsedGeoData = geoData.parse();
  expect(parsedGeoData.country).toBe('United States');
  expect(parsedGeoData.region).toBe('AZ');
  expect(parsedGeoData.city).toBe('Sierra Vista');
});
