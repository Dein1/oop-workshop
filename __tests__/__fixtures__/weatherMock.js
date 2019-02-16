export default class WeatherMock {
  getByCity = async () => ({
    city: 'Berlin', temperature: 9.5, description: 'Clear Sky',
  })
}
