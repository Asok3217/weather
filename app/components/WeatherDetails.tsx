import React from 'react'

interface WeatherData {
  current: {
    humidity: number;
    wind_kph: number;
    feelslike_c: number;
    uv: number;
  };
}

const WeatherDetails = ({ data }: { data: WeatherData }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
      <div className="bg-white/30 dark:bg-gray-700/30 p-4 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Humidity</h3>
        <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{data.current.humidity}%</p>
      </div>
      <div className="bg-white/30 dark:bg-gray-700/30 p-4 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Wind Speed</h3>
        <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{data.current.wind_kph} km/h</p>
      </div>
      <div className="bg-white/30 dark:bg-gray-700/30 p-4 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Feels Like</h3>
        <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{data.current.feelslike_c}°C</p>
      </div>
      <div className="bg-white/30 dark:bg-gray-700/30 p-4 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">UV Index</h3>
        <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{data.current.uv}</p>
      </div>
    </div>
  )
}

export default WeatherDetails