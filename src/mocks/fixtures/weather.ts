export const mockWeatherData = {
  coord: {
    lon: -0.1276,
    lat: 51.5072,
  },
  weather: [
    {
      id: 500,
      main: "Rain",
      description: "light rain",
      icon: "10d",
    },
  ],
  base: "stations",
  main: {
    temp: 15,
    feels_like: 14,
    temp_min: 13,
    temp_max: 17,
    pressure: 1012,
    humidity: 80,
    sea_level: 1012,
    grnd_level: 1009
  },
  visibility: 10000,
  wind: {
    speed: 4.1,
    deg: 80,
    gust: 7.2
  },
  clouds: {
    all: 75
  },
  dt: 1625247600,
  sys: {
    type: 1,
    id: 1414,
    country: "GB",
    sunrise: 1625223600,
    sunset: 1625281200
  },
  timezone: 3600,
  id: 2643743,
  name: "London",
  cod: 200  
};
