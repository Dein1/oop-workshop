export default class Weather {
  constructor(weatherService) {
    this.weatherService = weatherService;
  }

  getWeatherByCity = async (city) => {
    if (this.weatherService === null) {
      return 'Invalid service';
    }
    const weather = await this.weatherService.getByCity(city);
    return weather;
  }
}
