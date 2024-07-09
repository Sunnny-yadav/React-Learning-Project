import React, { useState } from 'react'
import { useContextAPI } from '../ContextAPI/CreateContext';

function TodoForm() {
  const [todomsg, setTodomsg] = useState("");
  const { addMsg } = useContextAPI()

  const add = (e) => {
    e.preventDefault();
    if (todomsg === "") {
      alert("You have not Entered any msg");
      return;
    }

    addMsg({ msg: todomsg, status: false })
    setTodomsg("") //this is called again because we are checking the condition that the if todomsg is hodling nothing than addMsg() should not get executed
  }

  return (

    <form className="flex "
      onSubmit={add}
    >
      <input
        type="text"
        name="message"
        value={todomsg}
        onChange={(e) => setTodomsg(e.target.value)}
        placeholder='Enter the Todo msg....'
        className="w-[100%] border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5  "
      />
      <button
        type='submit'
        className="rounded-r-lg px-3 py-2 bg-green-600 text-white shrink-0 "

      >Add</button>
    </form>

  )
}

export default TodoForm