import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainConterner from './MainCointener'


const Browse = () => {

  useNowPlayingMovies()

  return (
    <div className='flex w-full'>
      <Header />
      <MainConterner/>
      
        
        
      </div>
   
  )
}

export default Browse