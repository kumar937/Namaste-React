import { bgUrl } from "../utils/constants"
import { searchLabel } from "../utils/constants";
import { searchInputPlaceholder } from "../utils/constants";
import {use, useRef} from 'react';
import { getMovieRecommendations } from "../openAI";
import { useDispatch,useSelector } from "react-redux";
import { setGptSearchResults } from "../utils/GptSearchSlice";
import GptSearchResults from "./GptSearchResults";
import { getMovieDetailsUrl } from "../utils/constants";
import { ApiOptions} from "../utils/constants"
import { useState } from "react";
import Spinner from "./Spinner";

const GptSearch = () => {
  const [showSearchResults, setShowSearchResults] = useState(null);
    const searchInputRef = useRef();
    const dispatch = useDispatch();
    const language = useSelector((state) => state.appConfig.language);
const getMoviedetails = async (title) => {
                const result = await fetch(getMovieDetailsUrl+title,ApiOptions);
                const promise =await result.json();
                return promise;
              }
    const fetchData = async (moviesTitles)=>{
            if(!moviesTitles || moviesTitles.length === 0) return [];
             const result = moviesTitles.map((tiltle)=>(getMoviedetails(tiltle)));
             const moviedetailsList = await Promise.all(result);
             return moviedetailsList
            }
  const search = async () => {
    setShowSearchResults('N');
    //call open ai with serach string and get list of movie names
     const suggestions = await getMovieRecommendations(searchInputRef.current.value);
     const moviesTitleList = suggestions.split(',');
     const movies = await fetchData(moviesTitleList);
     dispatch(setGptSearchResults({names: moviesTitleList, movies: movies}));
     setShowSearchResults('Y');
  }
  
  return (
<div className="relative">

  <img
    className="fixed inset-0 w-full h-full object-cover -z-10"
    src={bgUrl}
    alt="bg-image"
  />

  <div className="flex flex-col items-center pt-40 min-h-screen">

    <div className='grid grid-cols-12 w-full md:w-1/2 bg-black/80 justify-center items-center h-20 px-6 gap-4 rounded-lg'>
      
      <input
        type='text'
        ref={searchInputRef}
        placeholder={searchInputPlaceholder[language]}
        className='col-span-9 bg-white text-black rounded-lg px-4 py-4'
      />

      <button
        className="col-span-3 px-2 py-3 md:h-3/4 bg-red-600 text-white rounded-md md:py-1 text-sm cursor-pointer"
        onClick={search}
      >
        {searchLabel[language]}
      </button>

    </div>

    <div className="w-full flex justify-center mt-10">
      {showSearchResults === 'Y' ? <GptSearchResults /> : showSearchResults === 'N' ? <Spinner className='bg-black opacity-80 px-6 py-6 w-1/2 my-4 rounded-lg mt-16 text-white' /> : null}
    </div>

  </div>

</div>
  )
}

export default GptSearch