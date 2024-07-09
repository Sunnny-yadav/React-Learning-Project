import { useState } from "react";
import "./App.css";


function App() {
  const [color, setcolor] = useState("olive");
  // using useRef for persisting the value of variable Ref which get updated during rendering process 
//   let Ref = useRef(null)
//  let handel = ()=>{
//   Ref.current.focus();
//  }

  return (
    <>
      <div  className="w-full h-screen duration-100" style={{ backgroundColor: color }}>
        <h1 className="text-3xl font-bold font-serif text-white text-center pt-8">Background changer</h1>
      {/* <input ref= {Ref} type="text" name="" id="" />
      <button onClick={handel }>focus</button> */}
        {/* <div className="fixed left-5  bottom-6  flex inset-y-0 sm:inset-x-0 items-center sm:justify-center "> */}
        <div className="fixed bottom-[25vh]    sm:bottom-6  flex  sm:inset-x-0 sm:justify-center   ">
        <div className="flex flex-col sm:flex-row  justify-between items-center gap-10 bg-white px-3 py-2 rounded-full ">
          <div className="px-3 py-1 rounded-full font-semibold bg-red-600 text-white hover:bg-red-500  ">
            <button onClick={() => setcolor("Red")}>Red</button>
          </div>
          <div className="px-3 py-1 rounded-full font-semibold bg-blue-600 text-white hover:bg-blue-500  ">
            <button onClick={() => setcolor("blue")}>blue</button>
          </div>
          <div className="px-3 py-1 rounded-full font-semibold bg-green-600 text-white hover:bg-green-500  ">
            <button onClick={() => setcolor("green")}>green</button>
          </div>
          <div className="px-3 py-1 rounded-full font-semibold bg-violet-600 text-white hover:bg-violet-500  ">
            <button onClick={() => setcolor("violet")}>violet</button>
          </div>
          <div className="px-3 py-1 rounded-full font-semibold bg-indigo-600 text-white hover:bg-indigo-500  ">
            <button onClick={() => setcolor("indigo")}>indigo</button>
          </div>
          <div className="px-3 py-1 rounded-full font-semibold bg-cyan-600 text-white hover:bg-cyan-500  ">
            <button onClick={() => setcolor("cyan")}>cyan</button>
          </div>
        </div>
        </div>
      </div>
     
    </>
  );
}

export default App;
