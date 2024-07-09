import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToTodo,updateMsg } from '../features/todo/todoSlice';

function AddTodo({Reference}) {
  const [input, setInput] = useState('');
  const dispatch = useDispatch()
  const todos = useSelector((state) => state.todos)
  const update = useSelector((state)=> state.btnUpdate)



  const addTodoHandler = (e) => {
    e.preventDefault();
    if (input === '') {
      alert("The Msg box is Empty")
      return;
    }
    for (let obj of todos) {
      if (obj.Msg === input) {
        alert("You have Enterd The repeated msg")
        return
      }
    }
    dispatch(addToTodo({ Msg: input }));
    setInput('')
  }

  const updateTodo = (e)=>{
    e.preventDefault();
    dispatch(updateMsg(input));
    setInput('')
    
  }

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-8 ">
      <input
        ref={Reference}
        type="text"
        className="w-[82%] text-xl bg-gray-400 placeholder:text-black rounded-xl border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {update.status ?
       <button
        onClick={updateTodo}
        className="text-white  bg-indigo-500 border-0 py-2 px-2 w-fit focus:outline-none hover:bg-indigo-600 rounded-xl text-lg"
      >
        Update Todo
      </button> : <button
        type="submit"
        className="text-white  bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-xl text-lg"
      >
        Add Todo
      </button>}
    </form>
  )
}

export default AddTodo