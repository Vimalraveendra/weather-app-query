import { renderHook } from "@testing-library/react";
import { useGeoLocation } from "../../../hooks/useGeoLocation";
import type { Coordinates } from "../../../types/global.types";
import { useReverseGeocodeQuery } from "../../location/queries/useReverseGeocode";
import { useCurrentWeatherQuery } from "../queries/useCurrentWeather";
import { useForecastWeatherQuery } from "../queries/useForecastWeather";
import { useWeather } from "./useWeather";



vi.mock("../../../hooks/useGeoLocation",()=>({
    useGeoLocation:vi.fn()
}))

vi.mock("../../location/queries/useReverseGeocode",()=>({
    useReverseGeocodeQuery:vi.fn()
}))

vi.mock("../queries/useCurrentWeather",()=>({
   useCurrentWeatherQuery:vi.fn()
}))

vi.mock("../queries/useForecastWeather",()=>({
    useForecastWeatherQuery:vi.fn()
}))

type SetupMocksOptions = {
  coordinates?: Coordinates | null;
  geoLoading?:boolean;
  geoError?:string|null;
  currentLoading?:boolean;
  currentData?: {temperature:number};
  currentError?:Error|null;
  forecastLoading?:boolean;
  forecastData?:{temperature:number}[];
  forecastError?:Error|null;
};

const mockGeoLocation= vi.fn()
const setupDefaultMocks = ({
  coordinates = null,
  geoLoading = false,
  geoError = null,
  currentLoading = false,
  currentData=undefined,
  currentError = null,
  forecastLoading = false,
  forecastData=undefined,
  forecastError = null,
}:SetupMocksOptions = {})=>{
    vi.mocked(useGeoLocation).mockReturnValue({
     coordinates,
    isLoading: geoLoading,
    error: geoError,
    getGeoLocation: mockGeoLocation,
  } as never);

  vi.mocked(useCurrentWeatherQuery).mockReturnValue({
    isLoading: currentLoading,
    data:currentData,
    error: currentError,
  } as never);

  vi.mocked(useForecastWeatherQuery).mockReturnValue({
    isLoading: forecastLoading,
    data:forecastData,
    error: forecastError,
  } as never);

  vi.mocked(useReverseGeocodeQuery).mockReturnValue({} as never);
}

 const coordinates = {
            lat: 51.1079,
            lon: 17.0385,
    };

describe("isLoading", () => { 
   test("returns false when no requests are loading", () => { 
     setupDefaultMocks();
     const {result} =renderHook(()=>useWeather());
     expect(result.current.isLoading).toBe(false);
   })
 })

 describe('geolocation', () => { 
    test("returns loading  state when geolocation is loading", () => { 
        setupDefaultMocks({geoLoading:true})
        const { result } = renderHook(() => useWeather());
       expect(result.current.isLoading).toBe(true);
  })
  test("returns getGeoLocation function", () => {
  setupDefaultMocks();
  const { result } = renderHook(() => useWeather());
  expect(result.current.getGeoLocation).toBe(mockGeoLocation);
});

test("returns coordinates when geolocation succeeds",()=>{
  setupDefaultMocks({coordinates})
  const { result } = renderHook(() => useWeather());
  expect(result.current.coordinates).toEqual(coordinates);
   expect(useReverseGeocodeQuery).toHaveBeenCalledWith(coordinates);
})

  test('returns an error when geolocation request fails', () => { 
      setupDefaultMocks({geoError:"Failed to get GeoLocation",})
        const { result } = renderHook(() => useWeather());
       expect(result.current.error).toBe("Failed to get GeoLocation"    );
   })

   test("prioritizes geolocation error over weather errors", () => { 
      setupDefaultMocks({
        geoError: "Failed to get GeoLocation",
        currentError: new Error("Failed to fetch current weather data"),
        forecastError: new Error("Failed to fetch forecast data"),
      })
      const{result}= renderHook(()=>useWeather());
      expect(result.current.error).toBe("Failed to get GeoLocation")
   })

})

describe('current weather', () => { 
    test("returns loading state when current weather is loading", () => { 
        setupDefaultMocks({currentLoading:true})
        const { result } = renderHook(() => useWeather());
       expect(result.current.isLoading).toBe(true);
  })
      test("returns current weather data when request succeeds",()=>{
       const mockData ={ temperature: 20 }
       setupDefaultMocks({coordinates,currentData:mockData})
       const { result } = renderHook(() => useWeather());
       expect(result.current.currentWeather.data).toEqual(mockData);
        expect(useCurrentWeatherQuery).toHaveBeenCalledWith(coordinates);
    })  

    test('returns an error when current weather request fails', () => { 
        setupDefaultMocks({currentError:new Error("Failed to fetch current weather data")})
        const { result } = renderHook(() => useWeather());
       expect(result.current.error).toBe("Failed to fetch current weather data");
   })
    
 })