import {useEffect, useState } from 'react';

function useCurrencyInfo(currency) {
  const [data , setData] = useState({})
  useEffect(()=>{
    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
    .then((res)=>res.json()) //covert data string to data
    .then((res)=>setData(res[currency]))   //this will give the value to the currency key  
    
  },[currency])

  console.log(data)
     return data
}

export default useCurrencyInfo  //this is why we do not need to return whole data and setData we can just export the whole method which will return the whole method as it is... we can access anything form it