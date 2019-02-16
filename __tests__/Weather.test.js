import Weather from '../src/Weather';
import WeatherMock from './__fixtures__/weatherMock';

test('should parse right', async () => {
  const service = new WeatherMock();
  const weather = new Weather(service);
  const weatherByCity = await weather.getWeatherByCity('Berlin');
  expect(weatherByCity.city).toBe('Berlin');
  expect(weatherByCity.description).toBe('Clear Sky');
  expect(weatherByCity.temperature).toBe(9.5);
});
