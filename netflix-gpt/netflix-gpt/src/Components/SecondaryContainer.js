import { usePopularMovies } from "../CustomHooks/usePopularMovies"
import { useTopRatedMovies } from "../CustomHooks/useTopRated";
import { useUpComingMovies } from "../CustomHooks/useUpComingMovies";
import MovieList from "./MovieList"
import { useSelector } from "react-redux"
const SecondaryContainer = () => {
    usePopularMovies();
    useTopRatedMovies();
    useUpComingMovies();
    const movieslist = [{name:'Now Playing', movies: useSelector((state) => state.movie.nowPlayingMovies)}]
    movieslist.push({name:'Popular', movies: useSelector((state) => state.movie.popularMovies)});
    movieslist.push({name:'Top Rated', movies: useSelector((state) => state.movie.topRatedMovies)});
    movieslist.push({name:'Up Coming', movies: useSelector((state) => state.movie.upComingMovies)});
    
  return (
    <div className="bg-black">
    <div className="-mt-64 relative z-30">
    {movieslist.map((movieCategory,index) => (<MovieList key={index} title={movieCategory.name} movies={movieCategory.movies}/>))}
    </div>
    </div>
  )
}

export default SecondaryContainer