import { bgUrl } from "../utils/constants"
import { useSelector } from "react-redux";
import { useNowPlayingMovies } from "../CustomHooks/useNowplayingMovies";
import { searchLabel } from "../utils/constants";
import { searchInputPlaceholder } from "../utils/constants";
const GptSearch = () => {
    const language = useSelector((state) => state.appConfig.language);
  return (
<div>
    <img className="relative w-screen h-screen -z-10" src={bgUrl} alt='bg-image'/>
    <div className = 'grid grid-cols-12 -mt-[40%] w-1/2 mx-auto bg-black  justify-center items-center h-20 px-6 gap-4'>
        <input
        type='text'
        placeholder={searchInputPlaceholder[language]}
        className='col-span-9 bg-white text-black rounded-lg px-4 py-4'
        />
        <button className="col-span-3 h-3/4  bg-red-600 text-white  rounded-md  py-1 text-sm cursor-pointer">{searchLabel[language]}</button>
    </div>
    </div>
  )
}

export default GptSearch