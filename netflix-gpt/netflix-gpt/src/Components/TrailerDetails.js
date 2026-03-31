import React from 'react'
import { useSelector } from 'react-redux';
const TrailerDetails = ({ movie }) => {
  return (
    
    <div className='absolute pl-16 pt-[40%] md:pt-[30%] text-white bg-gradient-to-r from-black w-screen aspect-video'>
    <div className='mb-2 md:mb-4 text-s mt-[-10%] md:mt-0 md:text-xl font-thin md:font-bold -mx-12 md:mx-0 '>{movie?.title}</div>
    <div className='hidden  md:block w-1/4 text-xs'>{movie?.overview}</div>
    <button className='bg-white  rounded-md px-4 md:px-10 font-normal md:font-bold md:w-32 md:h-14 py-1  -mx-12 md:mx-1 mt-4 md:mt-12 md:mr-4  text-xl text-gray-900 cursor-pointer hover:bg-gray-400'> Play</button>
    <button className='hidden md:inline-block bg-gray-600  rounded-md w-32 h-14 px-6 py-4 mt-12 text-lg cursor-pointer hover:bg-gray-400'> More Info</button>
    </div>
  )
}

export default TrailerDetails