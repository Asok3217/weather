"use client";
import React from 'react'

import { FaSearch } from "react-icons/fa";

interface InputProps {
  handleSearch: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  location: string;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
}

const Input = ({ handleSearch, location, setLocation }: InputProps) => {
  return (
    <div className="relative">
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        onKeyDown={handleSearch}
        placeholder="Enter city name"
        className="w-full md:w-[350px] py-3 pl-12 pr-4 text-lg rounded-full shadow-lg focus:outline-none placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-gray-100 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-300"
      />
      <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400" />
    </div>
  );
};

export default Input