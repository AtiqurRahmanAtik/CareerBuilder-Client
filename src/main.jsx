import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Component/Root/Root';
import ErrorPage from './Component/ErrorPage/ErrorPage';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import Register from './Component/Register/Register';
import AuthProvider from './Component/AuthProvider/AuthProvider';
import ViewDetails from './Component/ViewDetails/ViewDetails';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import AddJob from './Component/AddJob/AddJob';
import AllJobs from './Component/AllJobs/AllJobs';
import MyJobs from './Component/MyJobs/MyJobs';
import UpdateJob from './Component/UpdateJob/UpdateJob';
import JobsView from './Component/JobsView/JobsView';
import Blog from './Component/Bolgs/Blog';
import AppliedJobs from './Component/AppliedJobs/AppliedJobs';
import Download from './Component/Download/Download';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,

    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },

      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/allJobs',
        element: <AllJobs></AllJobs>,
        loader : () => fetch('https://career-builder-server-one.vercel.app/applyJob')
      },
      {
        path:'/addjob',
        element : <PrivateRoute>
          <AddJob></AddJob>
        </PrivateRoute>
      },
      {
        path: '/myjob',
        element : <PrivateRoute>
          <MyJobs></MyJobs>
        </PrivateRoute>
       
      },
      {
        path: '/appliedJobs',
        element: <PrivateRoute>
          <AppliedJobs></AppliedJobs>
        </PrivateRoute>
      
      },
      {
        path: '/download/:id',
        element: <Download></Download>,
        loader : ({params})=> fetch(`https://career-builder-server-one.vercel.app/download/${params.id}`)
      },

      {
        path: '/update/:id',
        element : <UpdateJob></UpdateJob>,
       loader: ({params})=> fetch(`https://career-builder-server-one.vercel.app/applyJob/${params.id}`)
      },

      {
        path: '/job/:id',
        element: <PrivateRoute>
          <ViewDetails></ViewDetails>
        </PrivateRoute>,
        loader: ({params})=> fetch(`https://career-builder-server-one.vercel.app/job/${params.id}`)
    },

      {
        path: '/viewDetail/:id',
        element: <PrivateRoute>
          <JobsView></JobsView>
        </PrivateRoute>,
       loader : ({params}) => fetch(`https://career-builder-server-one.vercel.app/applyJob/${params.id}`)
            
    }


    ]


  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
