import axios from 'axios';

export default class Weatherbit {
  constructor(fetchModule = axios) {
    this.fetchModule = fetchModule;
  }

  getWeather = async (city) => {
    const response = await this.fetchModule.get(`http://api.weatherbit.io/v2.0/current?key=681c3dc155854a529d8079bdcf310bd0&city=${city}`);
    const weather = response.data.data[0];
    return weather;
  }

  getByCity = async (city) => {
    const weather = await this.getWeather(city);
    return {
      city: weather.city_name,
      temperature: weather.temp,
      description: weather.weather.description,
    };
  }
}
