/* eslint-disable react-refresh/only-export-components */
// import { useEffect, useState } from "react"
import {useLoaderData} from 'react-router-dom';
function Github() {
    const data  = useLoaderData()
    // const [data , setData] = useState([]);
// useEffect(()=>{
    
//     fetch('https://api.github.com/users/vivekrawat21')
//     .then((res)=>res.json())
//     .then((data)=>{console.log(data)
//     setData(data);
//     })
// },[])
  return (
    <div className="flex justify-center bg-gray-800 text-white font-bold font-mono items-center text-2xl"> 
        <img src={data?.avatar_url} width={60} className="rounded-xl mx-9" alt="avatar" />
         <span>followers :{data?.followers}</span>
   </div>
  )
}

export default Github

export const githubInfoLoader = async ()=>{
   const res =  await fetch('https://api.github.com/users/vivekrawat21');
   return res.json();
}