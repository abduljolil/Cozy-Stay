import {
    createBrowserRouter,
 
  } from "react-router-dom";
import Main from "../Mainlayout/Main";
import Home from "../Pages/Home/Home";
import Login from "../authtication/Login";
import SignUp from "../authtication/SingUp";
 
 
 export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
         
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'signup',
          element: <SignUp></SignUp>

        },
     
      ]
    },
  
  ]);