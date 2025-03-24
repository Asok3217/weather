import React from "react";
import Image from "next/image";

interface ForecastDay {
  date: string;
  day: {
    maxtemp_c: number;
    mintemp_c: number;
    condition: {
      text: string;
      icon: string;
    };
  };
}

interface WeatherData {
  forecast: {
    forecastday: ForecastDay[];
  };
}

const WeekForecast = ({ data }: { data: WeatherData }) => {
  return (
    <div className="flex flex-col gap-4 p-8 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 transition-colors duration-300">7-Day Forecast</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
        {data.forecast.forecastday.map((day) => (
          <div
            key={day.date}
            className="flex flex-col items-center p-4 rounded-lg bg-white/30 dark:bg-gray-700/30 backdrop-blur-sm border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:bg-white/40 dark:hover:bg-gray-700/40 hover:shadow-lg"
          >
            <p className="text-gray-700 dark:text-gray-300 transition-colors duration-300 font-medium">
              {new Date(day.date).toLocaleDateString("en-US", { weekday: "short" })}
            </p>
            <div className="bg-white/30 dark:bg-gray-700/30 p-2 rounded-full my-2">
              <Image
                src={`https://cdn.weatherapi.com/weather/64x64/day/${day.day.condition.icon.slice(-7)}`}
                alt={day.day.condition.text}
                width={64}
                height={64}
                className="transition-transform duration-300 hover:scale-110"
              />
            </div>
            <p className="text-xl font-bold text-gray-900 dark:text-gray-100 transition-colors duration-300">
              {day.day.maxtemp_c}°C
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300 transition-colors duration-300 text-center">
              {day.day.condition.text}
            </p>
            <div className="flex items-center gap-2 mt-2 text-sm">
              <span className="text-blue-600 dark:text-blue-400">
                {day.day.maxtemp_c}°
              </span>
              <span className="text-gray-500 dark:text-gray-400">/</span>
              <span className="text-gray-600 dark:text-gray-500">
                {day.day.mintemp_c}°
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeekForecast;