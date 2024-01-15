import { useEffect } from 'react'
import {API_OPTION} from '../utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import { addTopRatingMovies} from "../utils/moviesSlice"


const useTopRatingMoviesP=()=>{
    const dispatch=useDispatch();

    const TopRatingMovies=useSelector(store=>store.movies.TopRatingMovies)

    const getTopRatingMovies=async()=>{
      const data=await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTION)
      const json=await data.json();
   
      dispatch(addTopRatingMovies(json.results))
    };
  
    useEffect(()=>{
      !TopRatingMovies &&
      getTopRatingMovies();
  
    },[])
}

export default useTopRatingMoviesP;