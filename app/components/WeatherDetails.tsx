import React from 'react'

interface WeatherDetailsProps {
  data: any;
}

const WeatherDetails: React.FC<WeatherDetailsProps> = ({ data }) => {
  return (
    <div className="p-12">
      <h1 className="mb-4 text-2xl text-white">Weather Details</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl">
          <div className="text-2xl">
            <h3>Wind Speed</h3>
            <h3>{data.current?.wind_mph} mph</h3>
          </div>
        </div>

        <div className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl">
          <div className="text-2xl">
            <h3>Humidity</h3>
            <h3>{data.current?.humidity}%</h3>
          </div>
        </div>

        <div className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl">
          <div className="text-2xl">
            <h3>Real Feel</h3>
            <h3>{data.current?.feelslike_f}°F</h3>
          </div>
        </div>

        <div className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl">
          <div className="text-2xl">
            <h3>UV Index</h3>
            <h3>{data.current?.uv}</h3>
          </div>
        </div>

        <div className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl">
          <div className="text-2xl">
            <h3>Visibility</h3>
            <h3>{data.current?.vis_miles} miles</h3>
          </div>
        </div>

        <div className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl">
          <div className="text-2xl">
            <h3>Air Pressure</h3>
            <h3>{data.current?.pressure_mb} mb</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherDetails