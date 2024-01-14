import React from 'react'
import MoviesList from './MoviesList'

import 'react-multi-carousel/lib/styles.css';
import { useSelector} from 'react-redux'
import 'react-multi-carousel/lib/styles.css';



const SecondryContainer = () => {



  

  const movies=useSelector((store)=>store.movies)

  return movies.nowPlayingMovies && (
    <div className='-mt-24 relative '>

     

         <MoviesList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      
     


      <MoviesList title={"TopRated Movies"} movies={movies.TopRatingMovies} />

    
     
      <MoviesList title={"Popular Movies"} movies={movies.PopularMovies} />

     

      <MoviesList title={"Up Coming Movies"} movies={movies.TreandingMovies} />



      <MoviesList title={"Horror Movies"} movies={movies.nowPlayingMovies} />

      
    </div>
  )
}

export default SecondryContainer