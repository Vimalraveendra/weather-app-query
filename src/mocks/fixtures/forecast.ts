

export const mockForecastData = {
  list: [
    {
      dt: 1625241600,
      main: {
        temp: 15,
        feels_like: 14,
        temp_min: 13,
        temp_max: 17,
        pressure: 1012,
        humidity: 80,
        sea_level: 1012, 
        grnd_level: 1009,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      wind: {
        speed: 4.1,
        deg: 80,
        gust: 7.2,
      },
      dt_txt: "2021-07-02 12:00:00",
    },
  ],
  name: "London",
  country: "GB",
  sunrise: 1625223600,
  sunset: 1625281200,
};