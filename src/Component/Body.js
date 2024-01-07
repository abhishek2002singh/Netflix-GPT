import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { RouterProvider, createBrowserRouter} from 'react-router-dom'
import { Provider, useDispatch } from 'react-redux'
import appStore from '../utils/appStore'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase'
import { addUser, removeUser } from '../utils/userSlice'



const Body = () => {
  const dispatch=useDispatch()
 

useEffect(()=>{
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const {uid,email , displayName} = user;
       dispatch(addUser({uid :uid , email:email , displayName:displayName}));
    // ...
   
  } else {
    // User is signed out
    dispatch(removeUser())
    // ...
  
  }
});
} , [])

const AppLayOut=createBrowserRouter([
    {
        path: '/',
        element : <Login />,
    },
 
       
            {
                path : "/browse",
                element : <Browse/>
            },
        

    
])

return (
  <div>
      <RouterProvider router={AppLayOut} />
  </div>
)
}

export default Body



