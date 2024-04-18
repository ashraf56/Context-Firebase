import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './component/Main';
import Home from './component/Home/Home';
import Login from './component/Login';
import Signup from './component/Signup';
import Auth, { Authcontext } from './component/Auth';
import Profile from './component/Profile';
import Protected from './component/Protected';
import Category from './component/Home/Category';
import ShowContent from './component/Home/ShowContent';
import News from './component/News/News';
import NewsDetail from './component/News/NewsDetail';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children:[
      {path:'/',
    element:<Home></Home>,
    },
      {path:'/login',
    element:<Login></Login>,
    },
      {path:'/signup',
    element:<Signup></Signup>,
    },
      {path:'/profile',
    element:<Protected><Profile/></Protected>,
    },
   {path:'cate/:id',
    element:<Protected><ShowContent/></Protected>,
    loader: ({params})=> fetch(`https://myapp-ss.vercel.app/${params.id}`)
  },
    ]
   
  },

{
  path:'news', element:<News></News>,
  children:[
{
  path:':id',
  element:<NewsDetail></NewsDetail>
  ,loader:({params})=> fetch(`https://myapp-ss.vercel.app/news/${params.id}`)
}

  ]
}

]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<Auth>
    <RouterProvider router={router} /> 
</Auth>

   
  </React.StrictMode>,
)
