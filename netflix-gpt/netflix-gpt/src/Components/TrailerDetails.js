import React from 'react'
import { useSelector } from 'react-redux';
const TrailerDetails = ({ movie }) => {
  return (
    
    <div className='absolute pl-16 pt-[30%] text-white bg-gradient-to-r from-black w-screen aspect-video'>
    <div className='mb-4 text-xl font-bold '>{movie?.title}</div>
    <div className='w-1/4 text-xs'>{movie?.overview}</div>
    <button className='bg-white  rounded-md px-10 font-bold w-32 h-14 py-4 mx-1 mt-12 mr-4  text-xl text-gray-900 cursor-pointer hover:bg-gray-400'> Play</button>
    <button className='bg-gray-600  rounded-md w-32 h-14 px-6 py-4 mt-12 text-lg cursor-pointer hover:bg-gray-400'> More Info</button>

    </div>
  )
}

export default TrailerDetails