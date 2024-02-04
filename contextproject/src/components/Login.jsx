import { useState,useContext } from "react"
import UserContext from "../context/userContext"
function Login() {
 const [userr, setUserr] =useState({
    username : "",
    password : "",
 })

 const {setUser} = useContext(UserContext)


    const  handleSubmit= (e)=>{
        e.preventDefault()
        setUser(userr);
        
    }
  return (

    <div>
        <h2>login</h2>
        <input type="text" placeholder="username" value={userr.username} onChange={(e)=>{
            setUserr({...userr , username :e.target.value});
        }} />
        <br />
        <input type="text" placeholder="username"  value={userr.password} onChange={(e)=>{
            setUserr({...userr , password :e.target.value});
        }} />
        <br />
        <button onClick={handleSubmit}>submit</button>
    </div>
  )
}

export default Login
