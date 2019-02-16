import Weather from './Weather';
import MetaWeather from './services/Metaweather';
import Weatherbit from './services/Weatherbit';

const servicesMap = {
  MetaWeather: () => new MetaWeather(),
  Weatherbit: () => new Weatherbit(),
};

export default async (serviceName, city) => {
  const service = servicesMap[serviceName]();
  const weather = new Weather(service);
  const weatherForCity = await weather.getWeatherByCity(city);
  return weatherForCity;
};
