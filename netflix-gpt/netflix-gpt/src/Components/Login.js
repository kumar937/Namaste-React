import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [isSignUpForm,setSignUpForm] = useState(false);
    const toggleSignUpForm =()=>{
        setSignUpForm(!isSignUpForm);
    }
  return (
    <div>
        <Header/>
        <div
  className="absolute inset-0 bg-cover bg-center bg-no-repeat 
             bg-[linear-gradient(to_top,rgba(0.5,0.5,0.5,1),rgba(0.5,0.5,0.5,0.5),transparent),url('https://assets.nflxext.com/ffe/siteui/vlv3/8cc08720-ac1c-4364-bcbd-9495bf0308cd/web/IN-en-20260323-TRIFECTA-perspective_0b8c8e4e-71ee-48bd-8e16-da74f083a838_large.jpg')]">
</div>
        
            <form className='w-3/12 absolute  p-12 bg-black my-36 mx-auto left-0 right-0 rounded-lg opacity-80 text-white '>
            <span className='text-2xl font-bold'>{isSignUpForm ? 'SignUp' : 'SignIn'}</span>
                {isSignUpForm && <input
                className='py-1 px-2 my-2 w-full rounded-lg bg-gray-700'
                type='text'
                placeholder='Enter your Full Name'
                />}
                <input
                className='py-1 px-2 my-2 w-full rounded-lg bg-gray-700'
                type='text'
                placeholder='Enter your Email'
                />
                <br/>
                <input
                className='py-1 px-2 my-2 w-full rounded-lg  bg-gray-700'
                type="password"
                placeholder='Enter your Password'
                />
                <button className='bg-red-600 rounded-md px-2 py-1 w-full my-3'>{isSignUpForm ? 'SignUp' : 'SignIn'}</button>

                <span className='cursor-pointer py-1 px-2 my-10 mx-0 w-full text-xs'onClick={toggleSignUpForm}>{isSignUpForm ? 'New user ? SignUp now': 'Already a registered user ?  SignIn' }</span>

            </form>
        
    </div>
  )
}

export default Login