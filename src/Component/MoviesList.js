
// // import { useSelector } from 'react-redux'
// import MoviesCards from './MoviesCards'
// import { MdKeyboardArrowRight } from "react-icons/md";


// const MoviesList = ({title , movies}) => {

  
    

    


//   return (
//     <div className='flex w-screen bg-black'>
//       <div>
//         <h1 className='text-4xl font-bold py-5 mx-5 text-white'>{title}</h1>

//         <div className='flex gap-4'>

//           {movies?.map(movie=> <MoviesCards key={movie.id} posterPath={ movie.poster_path} />)}
      
//         </div>
//         {/* <div className='text-white absolute right-[2rem] h-[200px] transparent z-100 top-[5rem] w-[25px] flex items-center justify-center text-4xl'  >
//           <div className='bg-red-400 hover:bg-red-600 rounded-full cursor-pointer'>
//             <MdKeyboardArrowRight/>
//           </div>
//         </div> */}
//       </div>


      
//     </div>
//   )
// }

// export default MoviesList




import React from 'react';
import MoviesCards from './MoviesCards';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const MoviesList = ({ title, movies }) => {
  const responsive = {
    desktop: {
      
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  if (!movies) {
    // If movies is undefined, return a default or loading state
    return <div>Loading...</div>;
  }

  return (
    
    <div className=' bg-black'>
      <h1 className='text-4xl font-bold py-5 mx-5 text-white '>{title}</h1>
      <Carousel responsive={responsive} infinite={true}>
        {movies?.map((movie) => (
          <MoviesCards key={movie.id} posterPath={movie.poster_path} />
        ))}
      </Carousel>
    </div>
  );
};

export default MoviesList;
