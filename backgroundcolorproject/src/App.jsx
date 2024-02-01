
import {useState} from "react";

function App() {
  const [color, setColor] = useState("black")


  return (
    <>
    <div className="flex  w-full h-screen   text-center "
    style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center  bottom-48 inset-x-0 px-2 ">
<div className="flex flex-wrap justify-center bg-white shadow-lg px-3 py-2 rounded-3xl">
       <button onClick={()=>{setColor("red")}} //in this we pass callback because onClick need function but when we pass setColor("red")  it will give me the return value from this function but we need the  whole fuction so we call a function inside a function and get the vlaue and set it to our  desired color
       className="outline-none px-4 py-2 rounded-2xl border-2 border-black mx-3" 
       style={{backgroundColor:"red"}}>
        Red 
       </button>
       <button onClick={()=>{setColor("green")}} 
       className="outline-none px-4 py-2 rounded-2xl border-2 border-black mx-3" 
       style={{backgroundColor:"green"}}>
        Green
       </button>
       <button onClick={()=>{setColor("pink")}} 
       className="outline-none px-4 py-2 rounded-2xl border-2 border-black mx-3" 
       style={{backgroundColor:"pink"}}>
        Pink
       </button>
       <button onClick={()=>{setColor("blue")}} 
       className="outline-none px-4 py-2 rounded-2xl border-2 border-black mx-3" 
       style={{backgroundColor:"blue"}}>
        Blue 
       </button>
       <button onClick={()=>{setColor("cyan")}} 
       className="outline-none px-4 py-2 rounded-2xl border-2 border-black mx-3" 
       style={{backgroundColor:"cyan"}}>
     Cyan
       </button>

       <button onClick={()=>{setColor("orange")}} 
       className="outline-none px-4 py-2 rounded-2xl border-2 border-black mx-3" 
       style={{backgroundColor:"orange"}}>
        Orange
       </button>
       <button onClick={()=>{setColor("yellow")}} 
       className="outline-none px-4 py-2 rounded-2xl border-2 border-black mx-3" 
       style={{backgroundColor:"yellow"}}>
        Yellow
       </button>
       <button onClick={()=>{setColor("purple")}} 
       className="outline-none px-4 py-2 rounded-2xl border-2 border-black mx-3" 
       style={{backgroundColor:"purple"}}>
        Purple
       </button>
       
        </div>

    </div>
    </div>
    </>
  )
}

export default App
