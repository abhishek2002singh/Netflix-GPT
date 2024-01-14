import React, { useEffect } from 'react'
import { CiSearch } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { signOut } from "firebase/auth";
import {auth}  from '../utils/firebase'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {  useDispatch } from 'react-redux'
import appStore from '../utils/appStore'
import { onAuthStateChanged } from "firebase/auth";

import { addUser, removeUser } from '../utils/userSlice'
import { toggleGptSearchView } from '../utils/gptSlice';


const Header = () => {

  const navigate=useNavigate()
  const dispatch=useDispatch()

  const user=useSelector(store=>store.user)

  const language=useSelector(store=>store.gpt.showGptSearch)

  const handleLogOut=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
   
    }).catch((error) => {
      // An error happened.
      
    });
  }

  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid,email , displayName ,photoURL} = user;
           dispatch(addUser({uid :uid , email:email , displayName:displayName , photoURL:photoURL}));
        // ...
       navigate('/browse')
      } else {
        // User is signed out
        dispatch(removeUser())
        // ...
      navigate('/')
      }
    });

    //unsubscribe when component is unmount
    return()=>unsubscribe()

    } , [])

    const handleSearchBar=()=>{
      dispatch(toggleGptSearchView())
    }

  return (
    <div className='flex justify-between w-full absolute px-8 py-2 bg-gradient-to-b from-black z-10'>
      <div className='flex '>
         <img className='w-30 h-24 '  src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="" />
     {user &&  <ul className='flex  cursor-pointer text-[12px] text-white'>
          <li className='m-4  '>Home</li>
          <li className='m-4  '>TV Shows</li>
          <li className='m-4  '>Movies</li>
          <li className='m-4 '>News & Popular</li>
          <li className='m-4 '>My List</li>
          <li className='m-4 '>Browse by Languages</li>
         </ul>}
      </div>

    {user&& <div className='flex pr-10 m-4 cursor-pointer  text-white '>
        <ul className='flex '>
        {language &&
          <li className='text-black'>
             <select>
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
             </select>
          </li>
         }
          <ul className='flex'>
            <div onClick={handleSearchBar} className='flex'>
              <li className='pr-4'><CiSearch /></li>
              <li className='pr-4'>Search</li>
            </div>
            
          </ul>

       

          <li className='pr-4'><IoMdNotificationsOutline /> </li>
          <li className='pr-4'>
            <img className='h-11 w-11' src={user?.photoURL} alt="" />
          </li>

          <li onClick={()=> handleLogOut()}>Log out</li>
        </ul>
      </div>}
      </div>
    
    
  )
}

export default Header