import React from 'react'
import { useContextAPI } from '../ContextAPI/CreateContext'
import { useState } from 'react';

function TodoList({todo}) {
  const [isTodoEditable,setIsTodoEditable] = useState(false);
  const [Msg,setmsg] = useState(todo.msg)
  const {toggleStatus,updateTodoMsg,RemoveTodo} = useContextAPI();

  const  updateStatus = ()=>{
    toggleStatus(todo.id) // the id can be accessed because the objects of todo array is passed as a prop to the each Todolist.jsx

  }

  const change = ()=>{
    updateTodoMsg(todo.id,{...todo, msg:Msg});
    setIsTodoEditable(!isTodoEditable)
  }

  const Remove = ()=>{
    RemoveTodo(todo.id)
  }

  return (
    <div className={`${todo.status ?"bg-[#c6e9a7]" : "bg-[#ccbed7]"}  flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black w-full `}>
      <input
        type="checkbox"
        className='cursor-pointer'
        checked={todo.status}
        onChange={updateStatus}
      />
      <input
        type="text"
        className={` outline-none w-full bg-transparent rounded-lg ${todo.status ? "line-through":""} ${isTodoEditable ? "border border-black" : "border-transparent"}`}
        value={Msg}
        onChange={(e)=>{setmsg(e.target.value)}}
        readOnly={!isTodoEditable}

      />
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={()=>{
          if(isTodoEditable){
            change()
          }else{
            setIsTodoEditable(!isTodoEditable)
          }
        }}
        disabled={todo.status}


      >{isTodoEditable ?"📁" : "✏️"}</button>

      <button
         className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
         onClick={Remove}
         >❌</button>
    </div>
  )
}

export default TodoList