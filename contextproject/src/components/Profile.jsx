import { useContext} from "react"
import UserContext from "../context/userContext"
function Profile() {
   const {user} = useContext(UserContext);
    if(!user) return (<>Please login first</>)
  return (
    <div>
        <h1>Profile {user.username}</h1>
        <h1>welcome</h1>
    <h2>Name :{user.username} </h2>
    <h2>Password :{user.password} </h2>
    </div>
  )
}

export default Profile