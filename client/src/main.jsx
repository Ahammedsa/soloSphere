import React from 'react'
import ReactDOM from 'react-dom/client'
import {

  RouterProvider,
} from "react-router-dom";
import './index.css'
import AuthProvider from "./Provider/AuthProvider"
import router from './Routes/Routes';
import {Toaster} from "react-hot-toast"


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <AuthProvider>
          <RouterProvider router={router} />
          <Toaster></Toaster>
      </AuthProvider>
  </React.StrictMode>
);