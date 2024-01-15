import React from 'react'
import { useSelector } from 'react-redux'
import MoviesList from './MoviesList'

const GptMoviesSuggestion = () => {

  const gpt =useSelector(store=>store.gpt)
  const { movieResult , movieName } =gpt;

  if(!movieName)
     return null;

  return (
    <div className='p-4 m-4 bg-black'>
      <div>
        {
          movieName.map((movienam , index)=>(
            <MoviesList 
               key={movienam}
               title={movienam}
               movies={movieResult[index]}
            />
          ))
        }
      </div>
        
    </div>
  )
}

export default GptMoviesSuggestion