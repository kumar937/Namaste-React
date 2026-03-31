import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Header from './Header'
import {formValidator} from '../utils/FormValidator'
import {auth} from '../Firebase'
import { addUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { PhotoURL,bgUrl } from '../utils/constants';
const Login = () => {
    const dispatch = useDispatch();
    const [isSignUpForm,setSignUpForm] = useState(false);
    const toggleSignUpForm =()=>{
        setSignUpForm(!isSignUpForm);
    }
    const email = useRef('');
    const password = useRef('');
    const name = useRef('');
    const [error,setError] = useState(null); 
    
    const Submit =()=>{
       const error = formValidator(email.current.value, password.current.value, name.current.value, isSignUpForm);
       setError(error);
       if(error) return;
      if (isSignUpForm) {
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then( (userCredential) => {
            const user = userCredential.user;
            updateProfile(user, {
              displayName: name.current.value,
              photoURL: PhotoURL
            });
            dispatch(addUser({ uid: user.uid, email: user.email, displayName: user.displayName,photoURL:user.photoURL }));
          })
          .catch((error) => {
            setError(error.code + ": " + error.message);
          });
      }
      else {
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorCode + ": " + errorMessage);
          });
      }
    };
  return (
    <div>
      <div className='relative z-10'>
        <Header />
      </div>
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat h-screen object-cover"
        style={{
          backgroundImage: `
      linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0.6), transparent),
      url(${bgUrl})
    `
        }}
      >
      </div>

      <form onSubmit={(e) => { e.preventDefault(); }} className='w-full md:w-3/12 absolute  p-12 bg-black my-36 mx-auto left-0 right-0 rounded-lg opacity-80 text-white '>
        <span className='text-2xl font-bold'>{isSignUpForm ? 'SignUp' : 'SignIn'}</span>
        {isSignUpForm && <input
          ref={name}
          className='py-1 px-2 my-2 w-full rounded-lg bg-gray-700'
          type='text'
          placeholder='Enter your Full Name'
        />}
        <input
          ref={email}
          className='py-1 px-2 my-2 w-full rounded-lg bg-gray-700'
          type='text'
          placeholder='Enter your Email'
        />
        <br />
        <input
          ref={password}
          className='py-1 px-2 my-2 w-full rounded-lg  bg-gray-700'
          type="password"
          placeholder='Enter your Password'
        />
        <span className='text-red-500 text-xs'>
          {error}
        </span>

        <button className='bg-red-600 rounded-md px-2 py-1 w-full my-3' type="button" onClick={Submit}>{isSignUpForm ? 'SignUp' : 'SignIn'}</button>

        <span className='cursor-pointer py-1 px-2 my-10 mx-0 w-full text-xs' onClick={toggleSignUpForm}>{!isSignUpForm ? 'New user ? SignUp now' : 'Already a registered user ?  SignIn'}</span>

      </form>

    </div>
  )
}

export default Login