import Geodata from '../src/Geodata';
import mockFetch from './__fixtures__/mock';

test('should output right', async () => {
  const geoData = new Geodata(mockFetch);
  const parsedGeoData = await geoData.getGeoDataByIp('134.234.3.2');
  expect(parsedGeoData.city).toBe('Moscow');
  expect(parsedGeoData.country).toBe('Russia');
  expect(parsedGeoData.region).toBe('MOW');
});
