export default class Weather {
  constructor(WeatherService) {
    this.weatherService = new WeatherService();
  }

  getWeatherByCity = async (city) => {
    const weather = await this.weatherService.getByCity(city);
    return weather;
  }
}
