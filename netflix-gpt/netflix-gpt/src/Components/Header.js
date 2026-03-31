import { signOut,onAuthStateChanged} from 'firebase/auth'
import { auth } from '../Firebase'
import { useDispatch } from 'react-redux'
import {  removeUser } from '../utils/userSlice'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../utils/userSlice';
import { AppLogo } from '../utils/constants';
const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      // Ensure we have the latest user data
      if (user) {
        await user.reload(); 
        dispatch(addUser({ uid: user.uid, email: user.email, displayName: user.displayName,photoURL:user.photoURL }));
        navigate('/browse');
      } else {
        navigate('/');
        dispatch(removeUser());
      }
    });

    return () => {
      unsubscribe();
    };//this will be called when the component unmounts, ensuring we clean up the listener to prevent memory leaks and unintended behavior.

  }, []);
  return (
    <div className='md: w-screen absolute md:px-8 md:py-2 md:bg-gradient-to-b from-black bg-black '>
        <img className= "w-24 md:w-44" src ={AppLogo}  alt="Logo alternative"/>
        
        </div>
  )
}

export default Header