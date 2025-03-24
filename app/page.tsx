"use client";
import { useState } from 'react';
import Input from './components/Input';
import Current from './components/Current';
import WeatherDetails from './components/WeatherDetails';
import WeekForecast from './components/WeekForecast';

interface WeatherData {
  current: {
    temp_c: number;
    condition: {
      text: string;
      icon: string;
    };
    humidity: number;
    wind_kph: number;
    feelslike_c: number;
    uv: number;
  };
  location: {
    name: string;
    country: string;
    localtime: string;
  };
  forecast: {
    forecastday: Array<{
      date: string;
      day: {
        maxtemp_c: number;
        mintemp_c: number;
        condition: {
          text: string;
          icon: string;
        };
      };
    }>;
  };
}

export default function Home() {
  const [data, setData] = useState<WeatherData | null>(null);
  const [location, setLocation] = useState('');
  const [error, setError] = useState('');

  const handleSearch = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      setError('');
      
      if (!location.trim()) {
        setError('Please enter a location');
        return;
      }

      try {
        const response = await fetch(
          `http://api.weatherapi.com/v1/forecast.json?key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&q=${location}&days=7&aqi=no`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch weather data');
        }

        const weatherData = await response.json();
        setData(weatherData);
      } catch {
        setError('Failed to fetch weather data. Please try again.');
      }
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-400 to-blue-600 dark:from-gray-900 dark:to-gray-800 transition-all duration-300">
      <div className="container mx-auto px-4 py-8">
        <Input location={location} setLocation={setLocation} handleSearch={handleSearch} />
        
        {error && (
          <div className="text-red-500 text-center mt-4">
            {error}
          </div>
        )}

        {data && (
          <div className="space-y-8">
            <Current data={data} />
            <WeatherDetails data={data} />
            <WeekForecast data={data} />
          </div>
        )}
      </div>
    </main>
  );
}
