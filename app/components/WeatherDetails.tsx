import React from 'react'

interface WeatherDetailsProps {
  data: any;
}

const WeatherDetails = ({ data }: WeatherDetailsProps) => {
  return (
    <div className="flex flex-col gap-4 w-full md:w-1/2">
      <div className="flex flex-col gap-4 p-8 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 transition-colors duration-300">Weather Details</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col p-4 rounded-lg bg-white/30 dark:bg-gray-700/30 backdrop-blur-sm border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:bg-white/40 dark:hover:bg-gray-700/40">
            <span className="text-gray-700 dark:text-gray-300 transition-colors duration-300">Wind Speed</span>
            <span className="text-2xl font-bold text-gray-900 dark:text-gray-100 transition-colors duration-300">
              {data.current?.wind_kph} km/h
            </span>
          </div>
          <div className="flex flex-col p-4 rounded-lg bg-white/30 dark:bg-gray-700/30 backdrop-blur-sm border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:bg-white/40 dark:hover:bg-gray-700/40">
            <span className="text-gray-700 dark:text-gray-300 transition-colors duration-300">Wind Direction</span>
            <span className="text-2xl font-bold text-gray-900 dark:text-gray-100 transition-colors duration-300">
              {data.current?.wind_dir}
            </span>
          </div>
          <div className="flex flex-col p-4 rounded-lg bg-white/30 dark:bg-gray-700/30 backdrop-blur-sm border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:bg-white/40 dark:hover:bg-gray-700/40">
            <span className="text-gray-700 dark:text-gray-300 transition-colors duration-300">Pressure</span>
            <span className="text-2xl font-bold text-gray-900 dark:text-gray-100 transition-colors duration-300">
              {data.current?.pressure_mb} mb
            </span>
          </div>
          <div className="flex flex-col p-4 rounded-lg bg-white/30 dark:bg-gray-700/30 backdrop-blur-sm border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:bg-white/40 dark:hover:bg-gray-700/40">
            <span className="text-gray-700 dark:text-gray-300 transition-colors duration-300">UV Index</span>
            <span className="text-2xl font-bold text-gray-900 dark:text-gray-100 transition-colors duration-300">
              {data.current?.uv}
            </span>
          </div>
          <div className="flex flex-col p-4 rounded-lg bg-white/30 dark:bg-gray-700/30 backdrop-blur-sm border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:bg-white/40 dark:hover:bg-gray-700/40">
            <span className="text-gray-700 dark:text-gray-300 transition-colors duration-300">Cloud Cover</span>
            <span className="text-2xl font-bold text-gray-900 dark:text-gray-100 transition-colors duration-300">
              {data.current?.cloud}%
            </span>
          </div>
          <div className="flex flex-col p-4 rounded-lg bg-white/30 dark:bg-gray-700/30 backdrop-blur-sm border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:bg-white/40 dark:hover:bg-gray-700/40">
            <span className="text-gray-700 dark:text-gray-300 transition-colors duration-300">Precipitation</span>
            <span className="text-2xl font-bold text-gray-900 dark:text-gray-100 transition-colors duration-300">
              {data.current?.precip_mm} mm
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherDetails