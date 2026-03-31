import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ApiOptions } from "../utils/constants";
import { useState,useEffect } from "react";

const PlaySelectedMovie = () => {
  const movie = useSelector((state) => state.movie.selectedMovie);
  const navigate = useNavigate();
  const backtoBrowse = () => {
    navigate('/browse');
  };
  const [movieTrailer, setMovieTrailer] = useState(null);
   const getMovieTrailer = async (movieId) => {
          const response = await fetch('https://api.themoviedb.org/3/movie/' + movieId + '/videos', ApiOptions);
          const data = await response.json();
          const filteredData = data?.results?.filter((video) => video.type === 'Trailer' && video.site === 'YouTube');
          const trailer = filteredData?.length > 0 ? filteredData[0] : filteredData?.[1];
          setMovieTrailer(trailer);
      }
      
useEffect(() => {
        if(movie?.id){
          getMovieTrailer(movie.id);
        }},[])
        console.log(movieTrailer);
  if (!movie) {
    if(!movieTrailer) {return <div className="text-white">Movie Not Available</div>;}
    return <div className="text-white">No movie selected</div>;
  }

  return (
    <div className="bg-black w-screen h-screen">
      <div className="flex justify-between">
        <span className="text-xl text-white font-bold mx-4 my-4">
          <h1>{movie.title}</h1>
        </span>

        <button
          className="bg-red-700 rounded-lg mx-4 mr-12 my-4 px-3 py-1 text-white"
          onClick={backtoBrowse}
        >
          Close
        </button>
      </div>

      <div>
        <iframe
    className="w-screen aspect-video pointer-events-none"
    src={`https://www.youtube.com/embed/${movieTrailer?.key}?autoplay=1&mute=1&loop=1&playlist=${movieTrailer?.key}`}
  />
      </div>
    </div>
  );
};

export default PlaySelectedMovie;