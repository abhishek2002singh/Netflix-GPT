import {  useSelector } from 'react-redux'
import useMovieTrailer from '../hooks/useMovieTrailer';


const VideoBackground = ({moviesId}) => {

  //same work perform throw redux and useState
   //const [TrailerId , setTrailerId]=useState(null);

   //or

   const trailerVideos=useSelector(store=>store.movies?.trailerVideos);
   
   useMovieTrailer(moviesId);
  
  return (
    <div className='w-screen max-sm:w-screen'>
      <iframe className='w-screen aspect-video max-sm:h-screen max-sm:w-screen'  src={"https://www.youtube.com/embed/Cm3Z1jEjHHc?si="+trailerVideos?.key+ "?&autoplay=1&mute=1"} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
     
    </div>
  )
}

export default VideoBackground