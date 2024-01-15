import React from 'react'
import Header from './Header'
import Footer from './Footer'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainConterner from './MainCointener'

import SecondryContainer from './SecondryContainer'
import useNowPopularMovies from '../hooks/useNowPopularMovies'
import useNowTreandingMovies from '../hooks/useNowTreandingMovies'
import useTopRatingMoviesP from '../hooks/useTopRatingMoviesP'
import GptSearch from './GptSearch'
import { useSelector } from 'react-redux'


const Browse = () => {

  useNowPlayingMovies()
  
  useNowPopularMovies()
     useNowTreandingMovies()
     useTopRatingMoviesP()


     const toggle= useSelector(store=>store.gpt.showGptSearch)
  

  return (
    <div className='flex w-full bg-cover '>
      <Header />
      <div className='w-screen '>
        {
          toggle ? <GptSearch />:<>
          <MainConterner/>
        
          <SecondryContainer />
          </>
        }
        
        
        
      <Footer />
        
      </div>
       
       
      </div>
   
  )
}

export default Browse