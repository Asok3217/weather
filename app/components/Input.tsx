"use client";
import React from 'react'

import { FaSearch } from "react-icons/fa";

interface InputProps {
  handleSearch: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  location: string;
  setLocation: (location: string) => void;
}

const Input: React.FC<InputProps> = ({ handleSearch, location, setLocation }) => {
  return (
    <form className="flex items-center md:w-2/4">
      <input
        type="text"
        className="w-full bg-transparent border-b-2 placeholder-white outline-none text-white"
        placeholder="Search city..."
        onKeyDown={handleSearch}
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
    </form>
  )
}

export default Input