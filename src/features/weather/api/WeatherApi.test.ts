import { mockForecastData } from "../../../mocks/fixtures/forecast"
import { mockWeatherData } from "../../../mocks/fixtures/weather"
import { forecastHandlers } from "../../../mocks/forecast.handlers"
import { server } from "../../../mocks/server"
import { weatherHandlers } from "../../../mocks/weather.handlers"
import { getCurrentWeather, getForecastWeather } from "./weatherApi"


  const mockCoordinates={
        lat: 51.1079,
       lon: 17.0385
    }

describe('getCurrentWeather', () => { 
    test('returns current weather data when the  request succeeds', async() => {
        server.use(weatherHandlers.success);
        const result = await getCurrentWeather(mockCoordinates);
        expect(result).toEqual(mockWeatherData)
     })

     test('throws an error when the server request fails', async() => { 
        server.use(weatherHandlers.failure);
        const result= getCurrentWeather(mockCoordinates);
        await expect(result).rejects.toThrow("Failed to fetch weather")
      })
 })

 describe('getForecastWeather', () => { 
    test('returns forecast weather data when the request succeeds', async() => {
        server.use(forecastHandlers.success);
        const result = await getForecastWeather(mockCoordinates);
        expect(result).toEqual(mockForecastData)
     })

     test('throws an error when the server request fails', async() => { 
        server.use(forecastHandlers.failure);
        const result= getForecastWeather(mockCoordinates);
        await expect(result).rejects.toThrow("Failed to fetch forecast")
      })
 })