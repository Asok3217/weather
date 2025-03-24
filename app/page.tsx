"use client";
import Input from "./components/Input";
import React, { useState } from "react";
import WeatherDetails from "./components/WeatherDetails";
import WeekForecast from "./components/WeekForecast";
import Current from "./components/Current";


export default function Home() {
  const [data, setData] = useState<any>({});
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");
  
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&q=${location}&days=7&aqi=yes&alerts=yes`;
  
  const handleSearch = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error();
        }
        const data = await response.json();
        setData(data);
        setLocation("");
        setError("");
      } catch {
        setError("City not found");
        setData({});
      }
    }
  };

  let content;
  if (Object.keys(data).length === 0 && error === "") {
    content = (
      <div className="flex items-center justify-center h-[calc(100vh-200px)]">
        <h2 className="text-4xl text-gray-800 dark:text-gray-200 font-bold text-center">
          Welcome to Weather App
          <p className="text-xl font-normal mt-2 text-gray-600 dark:text-gray-400">Enter a city name to get started</p>
        </h2>
      </div>
    );
  } else if (error !== "") {
    content = (
      <div className="flex items-center justify-center h-[calc(100vh-200px)]">
        <div className="text-center text-gray-800 dark:text-gray-200">
          <p className="text-3xl mb-4">City not Found</p>
          <p className="text-xl text-gray-600 dark:text-gray-400">Please enter a valid city name</p>
        </div>
      </div>
    );
  } else {
    content = (
      <div className="flex flex-col gap-4">
        <div className="flex flex-col md:flex-row gap-4 p-12">
          <Current data={data} />
          <WeatherDetails data={data} />
        </div>
        <WeekForecast data={data} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-blue-300 dark:from-gray-900 dark:to-gray-800 transition-all duration-300">
      <div className="bg-white/25 dark:bg-black/25 w-full flex flex-col h-full transition-all duration-300">
        {/* input and logo */}
        <div className="flex flex-col md:flex-row justify-between items-center p-12">
          <Input handleSearch={handleSearch} location={location} setLocation={setLocation} />
          <div className="flex items-center gap-4">
            
            <h1 className="mb-8 md:mb-0 text-gray-800 dark:text-gray-200 text-2xl py-2 px-4 rounded-xl italic font-bold">
              Weather App
            </h1>
          </div>
        </div>
        {content}
      </div>
    </div>
  );
}
