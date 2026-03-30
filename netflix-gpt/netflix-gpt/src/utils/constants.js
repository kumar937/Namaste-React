import React from "react";

export const AppLogo = "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-03-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const PhotoURL = "https://media.licdn.com/dms/image/v2/D5603AQGr8cwZMdfIMg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1731931811121?e=1776297600&v=beta&t=IA2d8SuaC4uSyJ3SMsuf9dWvNGYAu0_hU0xEEyiXLhM";
export const ApiOptions = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.REACT_APP_TMDB_API_KEY}`
  }
};
export const baseImageUrl = "https://image.tmdb.org/t/p/w500/";
export const bgUrl = "https://assets.nflxext.com/ffe/siteui/vlv3/8cc08720-ac1c-4364-bcbd-9495bf0308cd/web/IN-en-20260323-TRIFECTA-perspective_0b8c8e4e-71ee-48bd-8e16-da74f083a838_large.jpg";

export const languages = [
  {key: 'English', label: 'English'},
  {key: 'Hindi', label: 'Hindi'},
  {key: 'Spanish', label: 'Spanish'}
]

export const searchLabel = {
  English: 'Search',
  Hindi: 'खोज',
  Spanish: 'Buscar'
}
export const searchInputPlaceholder = {
  English: 'Search for movies, TV shows, and more',
  Hindi: 'फिल्में, टीवी शो और अधिक के लिए खोजें',
  Spanish: 'Busca películas, programas de televisión y más'
}
export const googleApiKey = process.env.REACT_APP_GEMINI_API_KEY;
export const getMovieDetailsUrl = "https://api.themoviedb.org/3/search/movie?query="