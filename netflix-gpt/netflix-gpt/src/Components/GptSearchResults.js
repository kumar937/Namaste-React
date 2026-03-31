import React from 'react'
import useAIMovieSuggestionsHook from '../CustomHooks/useAIMovieSuggestionsHook'
import { useSelector,useDispatch } from 'react-redux'
import { setGptSearchResults } from '../utils/GptSearchSlice';
import MovieList from './MovieList';
const GptSearchResults = () => {
    
    const gptResults = useSelector((state) => state.gptSearch.GptSearchResults);
    console.log("gpt results",gptResults);
  return (
    <div className='bg-black opacity-80 px-6 py-6 w-1/2 my-4 rounded-lg mt-16 text-white'>
{        gptResults.movies.length > 0 ?
             gptResults.names.map((name,index)=>(<MovieList key={index} title={name} movies={gptResults.movies[index].results}/>))
        :
             <h2 className='text-white text-2xl mb-4'>No results found for the search query. Please try again with a different query.</h2>
}
    </div>
  )
}

export default GptSearchResults