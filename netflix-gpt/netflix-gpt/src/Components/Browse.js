import Header from './Header'
import { auth } from '../Firebase'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { signOut } from "firebase/auth";
const Browse = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const signOUT = () => {
    console.log("Signing out...");      
    // User is signed out
        signOut(auth).then(() => {
          navigate('/');
          console.log("User signed out successfully!");
        }).catch((error) => {
          console.log("Error signing out: ", error);
        });
        
  }
  return (
    <div className='flex justify-between'>
      <div>
        <Header/>
      </div>
         <div className='flex my-8 mx-2 items-center'>
        <img className='w-10 rounded-full' src={user.photoURL} alt="Profile"/>
        <span className='text-green-500 mx-4'>{"Hi, "+user.displayName}</span>
        <button className='bg-red-600 text-white rounded-md px-2 py-1 text-sm cursor-pointer z-10' onClick={signOUT}>Sign Out</button>
    </div> 
    </div>
  )
}

export default Browse   