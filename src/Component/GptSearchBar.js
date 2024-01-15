import React, { useRef } from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import lang from '../utils/languageConstant'
import openai from '../utils/openai'
import { API_OPTION } from '../utils/constant';
import { addGptMoviesResult } from '../utils/gptSlice';
// import { backOff } from 'exponential-backoff';

const GptSearchBar = () => {

  const langKey=useSelector((store)=>store.config.lang)

  const searchtext=useRef(null);

  const dispatch=useDispatch();

  //Movies search in tmdb
  const searchMoviesTMDB=async(movie)=>{
    const data=await fetch("https://api.themoviedb.org/3/search/movie?query="
    +movie+
    "&include_adult=false&language=en-US&page=1",
     API_OPTION);

     const json=await data.json();
     return json.results;
  }

  const handleGptSearchClick =async()=>{
        console.log(searchtext.current.value)

        // make an API CALL TO gPT apI AND GOT SOME RESULT

        const gptQuery = "Act as a movies recommendation system and suggest or some movies for query"+ searchtext.current.value+ ". only give me 5 movies , common seperated ike the example results give ahead . example result : Gadder , sholay , Don , Golmaal , Koi Mil Gaya"

        const gptResults= await  openai.chat.completions.create({
          messages: [{ role: 'user', content: gptQuery}],
          model: 'gpt-3.5-turbo',
        });

        if(!gptResults.choices){
          // todo : write error handling
        }

        console.log(gptResults.choices?.[0]?.message?.content)

        const gptMovies=gptResults.choices?.[0]?.message?.content.split(",")

        // for each movies i will search tmdb api

        const promiseArray= gptMovies.map(movie=>searchMoviesTMDB(movie))

        const tmdbResults= await Promise.all(promiseArray)

        console.log(tmdbResults);

        dispatch(addGptMoviesResult({movieName :gptMovies , movieResult :tmdbResults}))


        
  }
  
  
  

  return (
    <div className='pt-[15%] bg-teal-400 '>
        <div className="  px-4 md:px-12 py-3 text-white max-w-4xl text-center m-auto mt-12  ">
        <h1 className="text-3xl md:text-5xl mb-3 text-white font-bold">{lang[langKey]?.title}</h1>
        <p className="text-gray-400 text-sm md:text-lg">{lang[langKey].subTitle}</p>
      </div>
      
        <form className='w-11/12 mx-auto' onClick={(e)=>e.preventDefault()} >
          <div className="flex gap-1">
            <div className="text-white relative w-full flex ">
              <span className='icon-fill text-[22px] md:mt-0 md:text-[36px] absolute left-4 top-3 md:top-5 hidden md:block'>
                <IoSearchOutline style={{ fontSize: '32px' }} />
              </span>
              <input
               ref={searchtext}
                type="text"
                placeholder={lang[langKey]?.placeHolder}
                className="py-4 md:py-6 pl-4 pr-12 md:px-14 w-full bg-gray-600 bg-opacity-70 rounded focus:bg-opacity-100 focus-visible:outline-none text-lg"
                
              />
            </div>
            <button
              className="py-4 md:py-6 w-24 px-2 md:px-5 flex items-center justify-center bg-red-500 rounded text-white"
            
              onClick={handleGptSearchClick}
              
            >
            
                {lang[langKey]?.search}
              
            </button>
          </div>
          <p className='text-xs mt-1'>
            {lang[langKey]?.note}
            <a href="https://www.linkedin.com/in/okneerajsingh/" target="_blank" rel="noreferrer" className='ml-2 text-sm text-gray-400 hover:text-gray-200'>Request now</a>
          </p>
        </form>
     
    </div>
  )
}

export default GptSearchBar



