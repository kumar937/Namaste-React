import Header from './Header'
import { auth } from '../Firebase'
import { useSelector } from 'react-redux';
import { signOut } from "firebase/auth";
import {useNowPlayingMovies}  from '../CustomHooks/useNowplayingMovies';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import TrailerVideo from './TrailerVideo';
import TrailerDetails from './TrailerDetails';
import SecondaryContainer from './SecondaryContainer';
const Browse = () => {
  const user = useSelector((state) => state.user);
  const movies = useSelector((state) => state.movie.nowPlayingMovies);
  const dispatch = useDispatch();
  const signOUT = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
    });
  }
  useNowPlayingMovies();
  return (
    <div>
      <div className="absolute top-0 left-0 w-full z-10 flex justify-between  ">
  <div>
  <Header />
  </div>

  <div className="flex gap-4 z-20 px-8 pt-8">
          
          <span className="text-green-500 mt-8 italic">
            {"Hi, " + user?.displayName}
          </span>
          <img
            className="w-16 h-16 rounded-full"
            src={user?.photoURL}
            alt="Profile"
          />
          <button
            className="bg-red-600 text-white h-12 w-20 rounded-md mt-3 py-1 text-sm cursor-pointer"
            onClick={signOUT}
          >
            Sign Out
          </button>
        </div>
      </div>
      {movies.length > 0 && <div>
        <TrailerDetails movie={movies[15]} />
        <TrailerVideo movieId={movies[15].id} />
        <div />

      </div>}
        
      <SecondaryContainer/>
    </div>
  )
}

export default Browse   