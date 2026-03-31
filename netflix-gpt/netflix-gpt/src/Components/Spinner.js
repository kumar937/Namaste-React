import React from 'react'

const Spinner = () => {
  return (
    <div className='bg-black opacity-80 px-6 py-6 w-1/2 h-1/2 my-4 rounded-lg mt-16 flex justify-center'>
    <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
   </div>
   )
}

export default  Spinner