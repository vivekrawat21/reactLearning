import { useState } from "react";

function App() {
// const count = 0;
// const counter = ()=>{
//   count+1;
//   console.log(count);
// } by this method we can see that the counter is not increasing so for that react use new thing called states
//states are used to update ui in whole webapp 
const [count ,setCounter] =useState(0); //we can pass anything in the useState hook we can pass functions  as well 
const counter = ()=>{
  setCounter(count+1);
  return count;
};

const removeCounter = ()=>{
  if(count>0){
  setCounter(count-1);
  }
  else{
console.log("counter can't be negative");
  }
  
}

  return (
    <>
   <button onClick={counter}>
    count is {count}
   </button>
   <button onClick={removeCounter}>
    remove
   </button>
    </>
  )
}

export default App
