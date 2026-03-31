import {useEffect}from 'react'
import { ApiOptions } from '../utils/constants';
import { useDispatch,useSelector } from 'react-redux';
import { addMovieTrailer } from '../utils/movieSlice';
const useMovieTrailerHook = (movieId) => {
    const dispatch = useDispatch();
    const movieTrailer = useSelector((state) => state.movie.movieTrailer);
    const getMovieTrailer = async (movieId) => {
        const response = await fetch('https://api.themoviedb.org/3/movie/' + movieId + '/videos', ApiOptions);
        const data = await response.json();
        const filteredData = data?.results?.filter((video) => video.type === 'Trailer' && video.site === 'YouTube');
        const trailer = filteredData?.length > 0 ? filteredData[0] : filteredData?.[1];
        dispatch(addMovieTrailer(trailer));
    }
    useEffect(() => {
        !movieTrailer?.key && getMovieTrailer(movieId);},[]);
}

export default useMovieTrailerHook