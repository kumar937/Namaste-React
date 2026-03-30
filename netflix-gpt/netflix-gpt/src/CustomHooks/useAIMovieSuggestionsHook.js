import { useState, useEffect } from "react";
import { getMovieDetailsUrl } from "../utils/constants";
import { ApiOptions} from "../utils/constants"
  const getMoviedetails = async (title) => {
    const result = await fetch(getMovieDetailsUrl+title,ApiOptions);
    const promise =await result.json();
    return promise;
  }

const useAIMovieSuggestionsHook = (moviesTitleList) => {
    const [movies,setMovies] = useState([]);
        useEffect(()=>{
            async function fetchData(){
            if(!moviesTitleList || moviesTitleList.length === 0) return [];
             const result = moviesTitleList.map((tiltle)=>(getMoviedetails(tiltle)));
             const moviedetailsList = await Promise.all(result);
             setMovies(moviedetailsList);
            }
            fetchData();
            },[])
        
      
      //as we have an array of promises we need to wait for all of them to resolve
      //currently map will call get moviedetails() without waiting but it is asynchronus function which will take time to get results and it will return the pr
      //we will get movies [Promise, Promise, Promise, Promise, Promise]
  return movies;
}

export default useAIMovieSuggestionsHook