import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Header from './Header'
import {formValidator} from '../utils/FormValidator'
import {auth} from '../Firebase'
import { addUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";

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
    const navigate = useNavigate();
    
    const Submit =()=>{
       const error = formValidator(email.current.value, password.current.value, name.current.value, isSignUpForm);
       setError(error);
       if(error) return;
      if (isSignUpForm) {
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            // Update the display name
            updateProfile(auth.currentUser, {
              displayName: name.current.value, photoURL: "https://media.licdn.com/dms/image/v2/D5603AQGr8cwZMdfIMg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1731931811121?e=1776297600&v=beta&t=IA2d8SuaC4uSyJ3SMsuf9dWvNGYAu0_hU0xEEyiXLhM"
            }).then(() => {
              console.log("Display name updated successfully!");
            }).catch((error) => {
              console.error("Error updating display name: ", error);
            });
            dispatch(addUser({ uid: user.uid, email: user.email, displayName: name.current.value,photoURL:"https://media.licdn.com/dms/image/v2/D5603AQGr8cwZMdfIMg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1731931811121?e=1776297600&v=beta&t=IA2d8SuaC4uSyJ3SMsuf9dWvNGYAu0_hU0xEEyiXLhM" }));
            navigate('/browse');
            // ...
            console.log(user);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorCode + ": " + errorMessage);
            // ..
          });
      }
      else {
        // SignIn logic here
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            dispatch(addUser({ uid: user.uid, email: user.email, displayName: user.displayName,photoURL:user.photoURL }));

            navigate('/browse');
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode + ": " + errorMessage);
          });
      }
    };
  return (
    <div>
        <div className='relative z-10'>
  <Header/>
</div>
        <div  className="absolute inset-0 bg-cover bg-center bg-no-repeat 
             bg-[linear-gradient(to_top,rgba(0.5,0.5,0.5,1),rgba(0.5,0.5,0.5,0.5),transparent),url('https://assets.nflxext.com/ffe/siteui/vlv3/8cc08720-ac1c-4364-bcbd-9495bf0308cd/web/IN-en-20260323-TRIFECTA-perspective_0b8c8e4e-71ee-48bd-8e16-da74f083a838_large.jpg')]">
</div>
        
            <form onSubmit={(e) => { e.preventDefault(); }} className='w-3/12 absolute  p-12 bg-black my-36 mx-auto left-0 right-0 rounded-lg opacity-80 text-white '>
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
                <br/>
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

                <span className='cursor-pointer py-1 px-2 my-10 mx-0 w-full text-xs'onClick={toggleSignUpForm}>{!isSignUpForm ? 'New user ? SignUp now': 'Already a registered user ?  SignIn' }</span>

            </form>
        
    </div>
  )
}

export default Login