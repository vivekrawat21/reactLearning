import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// function MyApp() {
//   return(
//     <div>
//       custom app
//     </div>
//   )
// }
  // <React.StrictMode>
  //   {/* <MyApp /> */}
  //   {/* we can also use MyApp()  to do this work */}
  //   {/* <App /> */}
   
  // </React.StrictMode>,
// const customElement = (
//   <div>
//   <a href="https://www.google.com">click to go to google</a>
//   </div>
// )

// const reactElement = React.createElement(
//   // 'tag' first parameter is tag
//   'a',
//   {
//     href: 'https://www.google.com',
//     target: '_blank',
//   },
//   'click me to visit google' //This is the function which runs behid the scene with customizations...
// )
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   {/* <MyApp /> */}
  //   {/* we can also use MyApp()  to do this work */}
     <App /> 
   
  // </React.StrictMode>,
  // customElement
  //from above line we can say that the react strict mode prohibit the customEelement
  //In react there is a createElement fucntion is present which changes the jsx code into a react dom js
  // reactElement
)
