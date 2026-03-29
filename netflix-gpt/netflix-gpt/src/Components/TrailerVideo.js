import { use } from "react";
import useMovieTrailerHook from "../CustomHooks/useMovieTrailerHook"
import { useSelector } from "react-redux";
const TrailerVideo = ({ movieId }) => {
  useMovieTrailerHook(movieId);
    const movieTrailer = useSelector((state)=>(state.movie.movieTrailer))
  return (
    <div className="w-full h-full">
  <iframe
    className="w-screen aspect-video pointer-events-none"
    src={`https://www.youtube.com/embed/${movieTrailer?.key}?autoplay=1&mute=1&loop=1&playlist=${movieTrailer?.key}`}
  />
</div>
  )
}

export default TrailerVideo