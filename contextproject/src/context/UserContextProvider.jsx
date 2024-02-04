//Now we have to return the jsx because we have to c
import React from "react";
import UserContext from "./userContext";


// eslint-disable-next-line react/prop-types
const UserContextProvider= ({children})=>{
    const [user,setUser] = React.useState(null)
    return(
        <>
        <UserContext.Provider value={{user,setUser}}>
        {children}
        </UserContext.Provider>
        </>
    )
}

export default UserContextProvider