import React from 'react'
import {IMG_CDN_URL} from "../utils/constant"


const MoviesCards = ({posterPath}) => {

    
  return (
    <div className='w-48'>

      <img className='w-full h-[200px] object-cover mx-4  rounded-lg' src={IMG_CDN_URL+posterPath} alt="Movies-card" />
      
    </div>
  )
}

export default MoviesCards