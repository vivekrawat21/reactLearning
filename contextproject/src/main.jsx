import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

//we use context api for prop drilling......
//means we just create a global context which can be used or anything everything 
//this is also done by the redux which manages states......
//easier  version of the redux is redux toolkit or RTK
//zustand is also a libarary for statemanagement