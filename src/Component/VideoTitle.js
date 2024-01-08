import React from 'react'

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=' w-screen aspect-video pt-[20%] px-36 absolute text-white bg-gradient-to-r from-black '>
      <h1 className='text-6xl font-bold'>{title}</h1>
      <p className='py-6 text-lg w-1/4'>{overview}</p>
      <div className='m-2'>
        <button className='bg-white mx-3 hover:bg-opacity-90 px-4 py-1 rounded-xl text-black'>▶ Play</button>
        <button className='bg-gray-700 mx-3 px-4 py-1 rounded text-white bg-opacity-70'>ℹ more info</button>
      </div>
    </div>

  )
}

export default VideoTitle      