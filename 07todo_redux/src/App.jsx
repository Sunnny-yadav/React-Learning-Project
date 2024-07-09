
import { useRef } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'


function App() {
  const Ref = useRef(null);

  return (
    <>
     <div className='bg-slate-900 h-screen flex flex-col items-center '>
          <div className='w-[55vw] mt-12'>
          <h1 className='text-xl text-center font-semibold font-serif text-white'>Learn about redux toolkit</h1>
          <AddTodo reference = {Ref} />
          <Todos reference = {Ref}/>
          </div>
     </div>
      
    </>
  )
}

export default App
