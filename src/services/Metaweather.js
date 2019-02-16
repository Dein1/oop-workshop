import axios from 'axios';

export default class MetaWeather {
  constructor(fetchModule = axios) {
    this.fetchModule = fetchModule;
  }

  getCityId = async (city) => {
    const response = await this.fetchModule.get(`http://metaweather.com/api/location/search/?query=${city}`);
    return response.data[0].woeid;
  }

  getWeather = async (city) => {
    const cityId = await this.getCityId(city);
    const response = await this.fetchModule.get(`http://metaweather.com/api/location/${cityId}`);
    const allWeathers = response.data.consolidated_weather;
    const weather = allWeathers[Math.floor(Math.random() * allWeathers.length)];
    return weather;
  }

  getByCity = async (city) => {
    const weather = await this.getWeather(city);
    return {
      city: `${city[0].toUpperCase()}${city.slice(1)}`,
      temperature: Number(weather.the_temp.toFixed(1)),
      description: weather.weather_state_name,
    };
  }
}
