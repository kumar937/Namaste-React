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
    <div className='w-screen absolute px-8 py-2 bg-gradient-to-b from-black'>
        <img className= "w-44" src ={AppLogo}  alt="Logo alternative"/>
        
        </div>
  )
}

export default Header