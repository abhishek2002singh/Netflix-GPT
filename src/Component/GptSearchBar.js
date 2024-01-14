import React from 'react'
import { IoSearchOutline } from "react-icons/io5";

const GptSearchBar = () => {
  return (
    <div className='pt-[15%] bg-teal-400 '>
        <div className="  px-4 md:px-12 py-3 text-white max-w-4xl text-center m-auto mt-12  ">
        <h1 className="text-3xl md:text-5xl mb-3 text-white font-bold">Search Special movies for you!</h1>
        <p className="text-gray-400 text-sm md:text-lg">Perfect movies Your Family and friend</p>
      </div>
      
        <form className='w-11/12 mx-14' >
          <div className="flex gap-1">
            <div className="text-white relative w-full flex ">
              <span className='icon-fill text-[22px] md:mt-0 md:text-[36px] absolute left-4 top-3 md:top-5 hidden md:block'>
                <IoSearchOutline style={{ fontSize: '32px' }} />
              </span>
              <input
                type="text"
                placeholder="Search Movies, Show and more"
                className="py-4 md:py-6 pl-4 pr-12 md:px-14 w-full bg-gray-600 bg-opacity-70 rounded focus:bg-opacity-100 focus-visible:outline-none text-lg"
                
              />
            </div>
            <button
              className="py-4 md:py-6 w-24 px-2 md:px-5 flex items-center justify-center bg-red-500 rounded text-white">
            
                 Search
              
            </button>
          </div>
          <p className='text-xs mt-1'>
            Note: Movie recommendations powered by GPT are available on request due to paid APIs.
            <a href="https://www.linkedin.com/in/okneerajsingh/" target="_blank" rel="noreferrer" className='ml-2 text-sm text-gray-400 hover:text-gray-200'>Request now</a>
          </p>
        </form>
     
    </div>
  )
}

export default GptSearchBar