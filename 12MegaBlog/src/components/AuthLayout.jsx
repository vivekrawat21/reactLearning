import { useEffect } from "react"
import { UseSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

export default function Protected({children ,authentication=true}) {
    const navigate = useNavigate()
    const [loader,setLoader] = useState(true)
    const authStatus = UseSelector(state=>state.auth.status)

    useEffect(()=>{
        if(authStatus !== authentication && authentication){
            navigate('/login')
        }
        else if(!authentication && authStatus!=authentication){
            navigate('/')
           
        }
        setLoader(false)
    },[authStatus,navigate,authentication])
  return loader ? <div>Loading...</div> : children
}

