import React from "react";
import Image from "next/image";

interface CurrentProps {
  data: any;
}

const Current = ({ data }: CurrentProps) => {
  return (
    <div className="flex flex-col gap-4 w-full md:w-1/2">
      <div className="flex flex-col gap-4 p-8 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 transition-colors duration-300">
              {data.location?.name}
            </h1>
            <h2 className="text-xl text-gray-700 dark:text-gray-300 transition-colors duration-300">
              {data.location?.country}
            </h2>
          </div>
          <div className="text-right">
            <h3 className="text-4xl font-bold text-gray-900 dark:text-gray-100 transition-colors duration-300">
              {data.current?.temp_c}°C
            </h3>
            <h4 className="text-lg text-gray-700 dark:text-gray-300 transition-colors duration-300">
              {data.current?.condition?.text}
            </h4>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-white/30 dark:bg-gray-700/30 p-2 rounded-full">
              <Image
                src={`https:${data.current?.condition?.icon}`}
                alt={data.current?.condition?.text}
                width={64}
                height={64}
                className="transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100 transition-colors duration-300">
                {data.current?.feelslike_c}°C
              </p>
              <p className="text-gray-700 dark:text-gray-300 transition-colors duration-300">Feels like</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-gray-900 dark:text-gray-100 transition-colors duration-300">
              {data.current?.humidity}%
            </p>
            <p className="text-gray-700 dark:text-gray-300 transition-colors duration-300">Humidity</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Current;