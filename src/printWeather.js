import Weather from './Weather';
import MetaWeather from './services/Metaweather';
import Weatherbit from './services/Weatherbit';

const servicesMap = {
  MetaWeather,
  Weatherbit,
};

const defaultService = MetaWeather;

export default async (serviceName, city) => {
  const service = servicesMap[serviceName] || defaultService;
  const weather = new Weather(service);
  const weatherForCity = await weather.getWeatherByCity(city);
  return weatherForCity;
};
