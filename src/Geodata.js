export default class Geodata {
  constructor(data) {
    this.data = data;
  }

  parse() {
    const parsedData = this.data
      |> JSON.stringify
      |> JSON.parse;
    return parsedData;
  }

  format() {
    const {
      country,
      region,
      city,
      status,
    } = this.parse();
    if (status === 'success') {
      return `country: ${country} | region: ${region} | city: ${city}`;
    }
    return 'Invalid IP';
  }
}
