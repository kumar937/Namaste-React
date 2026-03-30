import Header from './Header'
import { auth } from '../Firebase'
import { signOut } from "firebase/auth";
import {useNowPlayingMovies}  from '../CustomHooks/useNowplayingMovies';
import { useDispatch,useSelector } from 'react-redux';
import TrailerVideo from './TrailerVideo';
import TrailerDetails from './TrailerDetails';
import SecondaryContainer from './SecondaryContainer';
import { toggleGptSearch } from '../utils/GptSearchSlice';
import GptSearch from './GptSearch';
import { useState } from 'react';
import { setLanguageKey } from '../utils/appConfigSlice';
import { languages } from '../utils/constants';

const Browse = () => {
  const user = useSelector((state) => state.user);
  const movies = useSelector((state) => state.movie.nowPlayingMovies);
  const [isGptSearch, setIsGptSearch] = useState(false);
  const dispatch = useDispatch();
  const toggleGpt = () => {
    setIsGptSearch(!isGptSearch);
    dispatch(toggleGptSearch());
  }
  const signOUT = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
    });
  }
  const setLanguage = (e) => {
    dispatch(setLanguageKey(e.target.value));
  }
  useNowPlayingMovies();
  return (
    <div>
      <div className="absolute top-0 left-0 w-full z-10   md:flex md:justify-between">
  <div className="">
  <Header />
  </div>

  { <div className=" md:flex md:gap-4 z-20 md:px-8 md:pt-8">
          <button className='px-2 md:px-4 bg-purple-700  rounded-lg text-white text-lg py-1 md:py-2' onClick={toggleGpt}>{!isGptSearch ?'GPT Search':'Home Page'}</button>
          {/* <span className="text-green-500 italic">
            {"Hi, " + user?.displayName}
          </span> */}
          
          {isGptSearch && <span>
            <select onChange= {(e)=>setLanguage(e)} className="bg-gray-700 text-white rounded-md px-4 py-3.5 text-xl">
             {languages.map((lang)=>(<option key={lang.key} value={lang.key}>{lang.label}</option>))}
            </select>
          </span>}
            
          <button
            className="bg-red-600 text-white rounded-md  text-xl px-4  cursor-pointer"
            onClick={signOUT}
          >
            Sign Out
          </button>
          <img
            className="w-14 h-14 rounded-full"
            src={user?.photoURL}
            alt="Profile"
          />
        </div>}
      </div>
      {!isGptSearch && movies?.length > 0 ? <><div>
        <TrailerDetails movie={movies[15]} />
        <TrailerVideo movieId={movies[15].id} />
        <div />

      </div>
      <SecondaryContainer/>
      </> :
      <GptSearch/>
      }
    </div>
  )
}

export default Browse   