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
import BrowseAll from './assets/component/BrowseAll/BrowseAll.jsx';
import PrivateRoute from './assets/component/PrivateRoute/PrivateRoute.jsx';
import AddHabit from './assets/component/AddHabit/AddHabit.jsx';
import Details from './assets/component/Details/Details.jsx';
import Error from './assets/component/Error/Error.jsx';
import Register from './assets/component/Register/Register.jsx';
import MyHabit from './assets/component/MyHabit/MyHabit.jsx';

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
      },
      {
        path:'/browseAll',
        Component:BrowseAll
      },{
        path:'/addHabit',
        element:<PrivateRoute><AddHabit></AddHabit></PrivateRoute>
      },{
        path:'myHabit',
        element:<PrivateRoute><MyHabit></MyHabit></PrivateRoute>
      },{
        path:'/register',
        Component:Register
      },{
        path:'/details/:id',
        element:<PrivateRoute><Details></Details></PrivateRoute>
      }
    ]
  },
  {
        path:'/*',
        Component:Error
      }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
<AuthProvider>  <RouterProvider router={router} /></AuthProvider>
  </StrictMode>,
)
