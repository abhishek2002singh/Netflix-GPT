import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { RouterProvider, createBrowserRouter} from 'react-router-dom'
import {  useDispatch } from 'react-redux'




const Body = () => {
  
 



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




