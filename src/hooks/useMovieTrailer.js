import React from 'react'
import  { useEffect } from 'react'
import { API_OPTION} from '../utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import {addTrailerVideos} from '../utils/moviesSlice'

const useMovieTrailer = (moviesId) => {

    const dispatch=useDispatch();

    const trailerVideos=useSelector(store=>store.movies.trailerVideos)

    const getMoviesVideos=async()=>{
        const data=await fetch("https://api.themoviedb.org/3/movie/"+moviesId+"/videos?language=en-US", API_OPTION);
        const json= await data.json();
       
        const filterData=json.results.filter(video=>video.type==="Trailer")
        const trailer= filterData.length ?filterData[0] : json.results[0];
       
        //setTrailerId(trailer.key)
        dispatch(addTrailerVideos(trailer))
      }
    
      useEffect(()=>{
        !trailerVideos &&
          getMoviesVideos();
      },[])

  return (
    <div>
        


    </div>
  )
}

export default useMovieTrailer