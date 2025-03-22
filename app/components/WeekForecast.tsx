import React from 'react'

interface WeekForecastProps {
  data: any;
}

const WeekForecast: React.FC<WeekForecastProps> = ({ data }) => {
  return (
    <div className="p-4">
      <div className="flex items-center justify-start mt-6">
        <h1 className="text-2xl text-white">7-Day Forecast</h1>
      </div>
      <div className="flex gap-4 overflow-x-auto mt-4">
        {data.forecast?.forecastday.map((day: any, index: number) => (
          <div
            key={index}
            className="bg-white/40 p-4 min-w-[160px] rounded-lg flex flex-col items-center"
          >
            <p className="text-white">
              {new Date(day.date).toLocaleDateString('en-US', {
                weekday: 'short',
                month: 'short',
                day: 'numeric'
              })}
            </p>
            <img
              className="w-[50px] object-cover"
              src={day.day.condition.icon}
              alt={day.day.condition.text}
            />
            <div className="text-white text-center">
              <p className="text-xl font-bold">{day.day.maxtemp_f.toFixed()}°F</p>
              <p className="text-sm">High</p>
              <p className="text-xl font-bold mt-2">{day.day.mintemp_f.toFixed()}°F</p>
              <p className="text-sm">Low</p>
              <p className="text-sm mt-2">{day.day.condition.text}</p>
              <p className="text-sm">Rain: {day.day.daily_chance_of_rain}%</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WeekForecast