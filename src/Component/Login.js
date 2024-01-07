import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidationData } from '../utils/validation'
import {  createUserWithEmailAndPassword , signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';




const Login = () => {

  const [learmMore  , setlearnMore] =useState(true)
  const [conditionSignIn , setconditionSignIn] = useState(true)
  const [showMassege , setshowMassege] = useState(null)
  const navigate= useNavigate()

  const email=useRef(null);
  const password=useRef(null);

  const handleClickButton =()=>{
    //validate the form 
      //  console.log(email.current.value , password.current.value)
   const massege= checkValidationData(email.current.value ,password.current.value)
    // console.log(massege)
      setshowMassege(massege)

      if(massege)  return ;
      
      if(!conditionSignIn){

        //sign up logic

   createUserWithEmailAndPassword(auth, email.current.value ,password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user)
    navigate('/browse')
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    setshowMassege(errorCode + " - "+ errorMessage)
    
  });


      }

      else{

        //sign in logoc

        signInWithEmailAndPassword(auth, email.current.value ,password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    navigate('/browse')
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    setshowMassege(errorCode+"-"+errorMessage)

  });

      }

  }
 

  return (
    <div className='w-full bg-gradient-to-b from-black'>
        <Header />
        <div className='absolute'>
          <img className=' box-content w-screen z-10' src="https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="screen logo" />

        </div>
        <form
        
             onSubmit={(e)=>e.preventDefault()}

        className='absolute w-[447px] h-[630px]  bg-black mx-auto right-0 left-0 my-28'>
          <div className='w-[320px] mx-auto h-[550px] my-10'>
            <h1 className='mx-5 text-white font-bold text-3xl my-10'>{conditionSignIn ? "Sign In" : "Sign up"}</h1>
            {!conditionSignIn &&<input type="text " placeholder='Enter Name' className='mb-8 p-2 w-full bg-slate-700 rounded-sm ' />}
            <input ref={email} type="text " placeholder='EMAIL AND PHONE NUMBER' className='text-white mb-8 p-2 w-full bg-slate-700 rounded-sm' />

            <input ref={password} type="password " placeholder='Password' className='text-white p-2 w-full bg-slate-700 rounded-sm mb-10' />
            <p className='text-red-500 text-lg'>{showMassege}</p>
            <button className='p-2 w-full bg-red-600 rounded-sm text-white mb-3'
            
               onClick={handleClickButton}

            >{conditionSignIn ? "Sign In" : "Sign up"}</button>
            <ul className='flex justify-between mb-10'>
              <div className='flex '>
                   <li><input type="radio" checked /></li>
                  <li className='text-slate-500 '><h1>Remember me</h1></li>
              </div>
           
                  <li className='text-slate-500 '><h1>Need help</h1></li>
            </ul>
            <ul className='flex mb-5'>
                <li className='text-slate-500'><p>New to Netflix?</p></li>
                <li className='text-white cursor-pointer'><p
                
                onClick={()=>setconditionSignIn(!conditionSignIn)}

                >{conditionSignIn ? "Sign up now" : "Sign in now"}</p></li>
            </ul>
 
             <p className='text-slate-500 mb-5'>Sign in is protected by Google reCAPTCHA to ensure you’re not a bot
             {learmMore ?<span className='text-blue-500 cursor-pointer'
              
              onClick={()=>setlearnMore(!learmMore)
              
              }

              >Learn More</span>:<p className='text-slate-500 text-xs mt-5'>The information collected by Google reCAPTCHA is subject to the Google Privacy Policy and Terms of Service, and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalised advertising by Google).</p>}
             </p>

         
            
          </div>
          

               
          </form>
    </div>
  )
}

export default Login