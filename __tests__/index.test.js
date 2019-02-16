import Geodata from '../src/Geodata';
import mockFetch from './__fixtures__/mock';

test('should parse right - 134.234.3.2', async () => {
  const geoData = new Geodata(mockFetch);
  const formattedGeoData = await geoData.getGeoDataByIp('134.234.3.2');
  expect(formattedGeoData).toBe('country: Russia | region: MOW | city: Moscow');
});
