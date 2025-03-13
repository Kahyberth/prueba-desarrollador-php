import { Injectable } from '@angular/core';
import { WeatherData } from '../models/weather.model';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  weatherData: WeatherData;

  constructor() {
    this.weatherData = {
      coord: { lon: 127.8014, lat: 26.3358 },
      weather: [
        {
          id: 300,
          main: 'Drizzle',
          description: 'light intensity drizzle',
          icon: '09d',
        },
        {
          id: 502,
          main: 'Rain',
          description: 'heavy intensity rain',
          icon: '10d',
        },
      ],
      base: 'stations',
      main: {
        temp: 74.25,
        feels_like: 75.33,
        temp_min: 72.21,
        temp_max: 74.79,
        pressure: 1015,
        humidity: 84,
        sea_level: 1015,
        grnd_level: 1013,
      },
      visibility: 10000,
      wind: { speed: 12.66, deg: 190, gust: 24.16 },
      rain: { '1h': 4.86 },
      clouds: { all: 75 },
      dt: 1741840478,
      sys: {
        type: 2,
        id: 147649,
        country: 'JP',
        sunrise: 1741815639,
        sunset: 1741858572,
      },
      timezone: 32400,
      id: 1894616,
      name: 'Okinawa',
      cod: 200,
    };
  }
}
