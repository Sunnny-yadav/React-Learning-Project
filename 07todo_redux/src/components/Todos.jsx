import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo, loadTodo, toggleComplete, toggleBtn, updateIcon } from '../features/todo/todoSlice'


function Todos({ Reference }) {
  // const [isEditable, setisEditable] = useState(false)
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos)


  const Remove = (id) => {
    dispatch(removeTodo(id))
  }

  const checkBoxHandeller = (id) => {
    dispatch(toggleComplete(id))
  }

  const editBtn = (id) => {
    dispatch(toggleBtn(id))
    // setisEditable(!isEditable)
  }

  const editIcon = (id) => {
    dispatch(updateIcon(id))
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("todos")) || [];
    dispatch(loadTodo(data))
  }, [])


  return (
    <>
      <div className='font-semibold font-serif text-center text-xl mt-2 text-white'>Todos</div>
      {/* //below use can use div instead of <li> </li> */}
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className={`mt-4  flex justify-between items-center  px-4 py-2 rounded-lg ${todo.complete ? "bg-[#c6e9a7] duration-200 " : "bg-[#ccbed7]"}`}
            key={todo.id}
          >
            <div className='flex justify-center items-center gap-4 '>
              <input
                type="checkbox"
                checked={todo.complete}
                onChange={() => checkBoxHandeller(todo.id)}
              />
              <input
           className={`bg-transparent text-black text-xl ${todo.complete ? "line-through after:contents-[\"completed\"]" : ''} outline-none`}

                type="text"
                value={todo.Msg}
                readOnly
              />
            </div>
            <div className='flex justify-center items-center gap-2'>

              <button
                className={`bg-white py-1 px-2 rounded-md  ${todo.complete ? "hidden" : "visible"}`}
                disabled={todo.complete}
                onClick={() => {
                  editBtn(todo.id);
                  editIcon(todo.id);

                }}
              >{todo.icon ? "📁" : "✏️"}</button>

              <button
                className="text-white bg-red-500 border-0 py-1 px-2 focus:outline-none hover:bg-red-600 rounded text-md"
                onClick={() => Remove(todo.id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Todos