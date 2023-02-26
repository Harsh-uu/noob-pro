import { useState } from "react"

function App() {
  const [a,seta]=useState(0);
  return (
   <div className="h-screen w-screen grid place-items-center bg-emerald-800">
   <div>
    <h1 className='text-center text-emerald-400 text-6xl  '>{a}</h1>
    <button 
    onClick={()=>{
      seta(a+1);
    }}
    className="text-emerald-400 border border-emerald-400 px-3 py-2 text-xl my-5 hover:bg-emerald-400 hover:text-emerald-800">increase</button>
   </div>
   </div>
  )
}

export default App
