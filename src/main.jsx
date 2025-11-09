import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './assets/component/Root/Root.jsx';
import Home from './assets/component/Home/Home.jsx';
import Login from './assets/component/Login/Login.jsx';
import AuthProvider from './assets/component/AuthProvider/AuthProvider.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    children:[
      {
        path:'/',
        Component:Home
      },
      {
        path:'/login',
        Component:Login
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
<AuthProvider>  <RouterProvider router={router} /></AuthProvider>
  </StrictMode>,
)
