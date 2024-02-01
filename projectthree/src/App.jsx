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
  // setCounter(count+1);
  // setCounter(counter+1);
  // setCounter(counter+1);  This is an interview question in this we can see that the counter is not  increasing react use the diffin algorithm to update the state the whole code converted into the bundle using babel and babel see that everytime in this funciton when we are changing the setCounter function it see that evertime it updates the same thing so it is converted into one and updated we can say that the setUpdate on calling again and agian  converted into the batch for more consistency only updates we  can do that by passing a callback function
  setCounter((prevCounter)=>prevCounter+1);
  setCounter((prevCounter)=>prevCounter+1); // Now all the state updates and increased by 2
  // return count;
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
