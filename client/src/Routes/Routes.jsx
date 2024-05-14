/* eslint-disable no-unused-vars */
import * as React from "react";
import Main from "../Layout/Main"
import Home from "../Pages/Home"
import {
    createBrowserRouter,
  
} from "react-router-dom";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children :[
            {
                index : true ,
                element : <Home></Home>
            } ,
            {
                path: "/login" ,
                element:<Login></Login>
            } ,
            {
                path:'/registration' ,
                element:<Register></Register>
            }
        ]
    },
]);

 export default router;