import React from 'react'
import Home from './pages/Home.jsx'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { createBrowserRouter } from 'react-router-dom'
import { AuthLoyout,login } from './components/index.js'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import AllPosts from './pages/AllPost.jsx'
import AddPost from './pages/AddPost.jsx'
import EditPost from './pages/EditPost.jsx'
import Post from './pages/Post.jsx'
import { RouterProvider } from 'react-router-dom'


const router = createBrowserRouter([
 { path:'/',
  element : <App/>,
  children:[
    {
      path: '/',
      element: <Home/>
    },
    {
      path: '/login',
      element: (
        <AuthLoyout authentication = {false}>
          <Login/>
          </AuthLoyout>
      )
      
    },
    {
      path: '/signup',
      element: (
        <AuthLoyout authentication = {false}>
          <Signup/>
          </AuthLoyout>
      )
      
    },
    {
      path: 'all-posts',
      element: (
        <AuthLoyout>
          <AllPosts/>
          </AuthLoyout>
      )
    },
    {
      path: '/add-post',
      element: (
        <AuthLoyout authentication>
          {" "}
          <AddPost/>
          </AuthLoyout>
      )
      
    },
    {
      path: '/edit-post/:slug',
      element: (
        <AuthLoyout authentication>
          {""}
          <EditPost/>
          </AuthLoyout>
      )
      
    },
    {
      path: '/post/:slug',
      element: (
        <AuthLoyout>
          <Post/>
          </AuthLoyout>
      )
      
    }
  ]
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
