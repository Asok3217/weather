import React from 'react'
import { getCurrentDate } from '../utlis/CurrentDate'

interface CurrentProps {
  data: any;
}

const Current: React.FC<CurrentProps> = ({data}) => {
    const currentDate = getCurrentDate();
    const weatherIcon = data.current ? data.current.condition.icon : null;
  return (
    <div className='flex flex-col mb-8 md:mb-0 items-start gap-2 w-1/2'>
      <div className='flex items-center'>
        <div>
          <h1 className='text-3xl text-white'>Today</h1>
          <p className='text-white'>{currentDate}</p>
        </div>
        {weatherIcon && (
          <div>
            <img className="w-[50px] object-cover" src={weatherIcon} alt={data.current.condition.text} />
          </div>
        )}
      </div>
      <div className="flex flex-col">
        <span className="text-5xl text-white">
          {data.current?.temp_f.toFixed()}°F
        </span>
        <span className="text-white text-base">
          {data.current?.condition.text}
        </span>
        <span className="text-white text-sm">
          {data.location?.name}, {data.location?.region}
        </span>
      </div>
    </div>
  )
}

export default Current