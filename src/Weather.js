export default class Weather {
  constructor(WeatherService) {
    this.weatherService = new WeatherService();
  }

  getWeatherByCity = async (city) => {
    if (this.weatherService === null) {
      return 'Invalid service';
    }
    const weather = await this.weatherService.getByCity(city);
    return weather;
  }
}
