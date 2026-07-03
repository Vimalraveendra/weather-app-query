import { useGeoLocation } from "../../../hooks/useGeoLocation";
import { useReverseGeocodeQuery } from "../../location/queries/useReverseGeocode";
import { useCurrentWeatherQuery } from "../queries/useCurrentWeather";
import { useForecastWeatherQuery } from "../queries/useForecastWeather";

export const useWeather = () => {
  const {
    isLoading: geoLoading,
    coordinates,
    error: geoError,
    getGeoLocation,
  } = useGeoLocation();

  const currentWeather = useCurrentWeatherQuery(coordinates);
  const forecastWeather = useForecastWeatherQuery(coordinates);
  const geocodeLocation = useReverseGeocodeQuery(coordinates);

  const isLoading =
    geoLoading ||
    currentWeather.isLoading ||
    forecastWeather.isLoading;

  const error =
    geoError ||
    currentWeather.error?.message ||
    forecastWeather.error?.message;

  return {
    coordinates,
    getGeoLocation,

    currentWeather: currentWeather,
    forecastWeather: forecastWeather,
    geocodeLocation: geocodeLocation,
    isLoading,
    error,
  };
};