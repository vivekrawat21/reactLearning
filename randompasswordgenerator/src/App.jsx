import { useState,useCallback,useEffect,useRef } from 'react';

function App() {
  const [length,setLegth] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed ,setCharAllowed] = useState(false);
  const [password,setPassword] = useState("");
  //refhook

  const passwordRef = useRef(null);
  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str += "0123456789";
    if(charAllowed) str += "&@*#!@#$%^*_";

    for (let index = 1; index <= length; index++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char);
    }
    setPassword(pass)
  },[length,charAllowed,setPassword,numberAllowed]);

 
useEffect(()=>{
  passwordGenerator();
},[length,charAllowed,passwordGenerator,numberAllowed]);

const copyPasswordToClipBoard =useCallback(()=>{
  passwordRef.current?.select();
  passwordRef.current?.setSelectionRange(0,99);
  window.navigator.clipboard.writeText(password);
},[password]);
  return (
    <>
    
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-8 py-8 my-8 text-orange-500 bg-gray-800'>
       <h1 className='text-4xl  text-white font-bold my-4'>Password Generator</h1>
     <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      <input type="text"
      value={password} 
      className='outline-none w-full py-1 px-3'
      placeholder='Password'
      ref={passwordRef}
      readOnly
      />
      <button
      onClick={copyPasswordToClipBoard}
      className=' bg-blue-700 hover:bg-blue-500 px-3 py-0.5 shrink-0 text-white'>
        copy
      </button>

     </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'> 
    <input 
    type="range" 
   min={6}
   max={100}
   value={length} 
   className='cursor-pointer'
   id='length'
   onChange={(e)=>{
    setLegth(e.target.value)
   }}/>
   <label htmlFor="length">length : {length}</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input type="checkbox" 
        defaultChecked = {numberAllowed}
        id='numberInput'
        onChange={()=>{
          setNumberAllowed((prevVlaue)=>!prevVlaue)
        }}
        />
        <label htmlFor="numberInput">
          Numbers?
        </label>
      </div>
      <div className='flex items-center gap-x-1 '>
        <input type="checkbox" 
        defaultChecked = {numberAllowed}
        id='characterInput'
        onChange={()=>{
         setCharAllowed((prevVlaue)=>!prevVlaue)
        }}
        />
        <label htmlFor="characterInput">
          Characters?
        </label>
      </div>
    </div>
     </div>
    </>
  )
}

export default App
