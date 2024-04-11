import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import Layout from './Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import User from './components/User/User'
import {createRoutesFromElements,Route} from 'react-router-dom'
import Github, { githubInfoLoader } from './components/GIthub/Github'

// const router = createBrowserRouter([
//   {
//     path:"/",
//     element:<Layout />,
//     children: [
//       {
//         path: "" ,
//         element:<Home/>
//       },
//       {
//         path:"/about",
//         element:<About/>
//       },
//       {
//         path: "/contact",
//         element:<Contact/>

//       }
//       ,{
//         path:"/github"
//         element:<Github />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path='/' element={<Layout />}>
      <Route path="" element= {<Home />} />
      <Route path="about" element= {<About />} />
      <Route path="contact" element= {<Contact />} />
      <Route  path='/user/:id' element= {<User />} />
      <Route 
      loader={/*()=>{ we can fetch directly here}*/ githubInfoLoader} //by the help of loader we can call the api while we are hovering over the gihub and it will also save the details in the cache also so fast rendering...
       path='/github' 
       element= {<Github />} />

    </Route>
 //Both are the approach for creating routing
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
   <RouterProvider  router={router}/>
 
)
