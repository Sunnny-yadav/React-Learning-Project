import React, { useState, useEffect } from 'react';
import './App.css';
import TodoForm from './Components/TodoForm';
import TodoList from './Components/TodoList';
import { TodosContext } from './ContextAPI/CreateContext';

function App() {
  const [todos, settodos] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    console.log(storedTodos)
    if (storedTodos) {
      settodos(storedTodos);
    } 
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addMsg = (todo) => {
    settodos((prev) => {
      const newTodos = [...prev, { id: Date.now(), ...todo }];
      return newTodos;
    });
  };

  const toggleStatus = (id) => {
    settodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, status: !todo.status } : todo
      )
    );
  };

  const updateTodoMsg = (id, updatedTodo) => {
    settodos((prev) =>
      prev.map((todo) => (todo.id === id ? updatedTodo : todo))
    );
  };

  const RemoveTodo = (id) => {
    settodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <TodosContext value={{ todos, addMsg, toggleStatus, updateTodoMsg, RemoveTodo }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoList todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodosContext>
  );
}

export default App;


// import { useState } from 'react'
// import './App.css'
// import TodoForm from './Components/TodoForm'
// import TodoList from './Components/TodoList'
// import { TodosContext } from './ContextAPI/CreateContext'
// import { useEffect } from 'react'

// function App() {
//   const [todos, settodos] = useState([]);

//   const addMsg = (todo) => {
//     settodos((prev) => [ { id: Date.now(), ...todo },...prev])
//   }

//   const toggleStatus = (id) => {
//     settodos((prev) => prev.map((eachObj) => eachObj.id === id ? { ...eachObj, status: !(eachObj.status) } : eachObj))
//   }

//   const updateTodoMsg = (id, todo) => {
//     settodos((prev) => prev.map((eachObj) => eachObj.id === id ? todo : eachObj))
//   }

//   const RemoveTodo = (id) => {
//     settodos((prev) => prev.filter((eachObj) => eachObj.id !== id))
//   }
//   // to set items in local storage when the todos set is updated
//   // Point to be noted is that the local storage always store the value in string format 
//   useEffect(() => {
//     localStorage.setItem('todos', JSON.stringify(todos));
//   }, [todos]);
  

//   //to get todo from local storage when the page get loaded first time
//   useEffect(() => {
//     const storedTodos = JSON.parse(localStorage.getItem('todos'));
//     if (storedTodos) {
//       settodos(storedTodos);
//     }
//   }, []);
  

//   return (
//     <>
//       <TodosContext value={{ todos, addMsg, toggleStatus, updateTodoMsg, RemoveTodo }}>
//         <div className="bg-[#172842] min-h-screen py-8">
//           <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
//             <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
//             <div className="mb-4">
//               {/* Todo form goes here */}
//               <TodoForm />
//             </div>
//             <div className="flex flex-wrap gap-y-3">
//               {/*Loop and Add TodoItem here */}
//               {
//                 todos.map((todo) => (
//                   <div key={todo.id} className='w-full' >
//                     <TodoList todo={todo} />
//                   </div>
//                 ))
//               }
//             </div>
//           </div>
//         </div>
//       </TodosContext>
//     </>
//   )
// }

// export default App
