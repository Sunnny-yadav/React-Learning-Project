import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToTodo, updateMsg } from '../features/todo/todoSlice';

function AddTodo({ Reference }) {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const update = useSelector((state) => state.btnUpdate);

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (input === '') {
      alert("The Msg box is Empty");
      return;
    }
    for (let obj of todos) {
      if (obj.Msg === input) {
        alert("You have Entered The repeated msg");
        return;
      }
    }
    dispatch(addToTodo({ Msg: input }));
    setInput('');
  };

  const updateTodo = (e) => {
    e.preventDefault();
    dispatch(updateMsg(input));
    setInput('');
  };

  return (
    <div className="max-w-xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-xl">
      <form onSubmit={addTodoHandler} className="space-y-6">
        <input
          ref={Reference}
          type="text"
          className="w-full p-4 text-xl bg-gray-200 rounded-xl border-2 border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-600 outline-none transition duration-300 ease-in-out"
          placeholder="Enter a Todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        {update.status ? (
          <button
            onClick={updateTodo}
            className="w-full py-3 px-4 text-lg font-medium text-white bg-indigo-600 rounded-xl transition-colors duration-300 hover:bg-indigo-700 focus:outline-none"
          >
            Update Todo
          </button>
        ) : (
          <button
            type="submit"
            className="w-full py-3 px-4 text-lg font-medium text-white bg-indigo-600 rounded-xl transition-colors duration-300 hover:bg-indigo-700 focus:outline-none"
          >
            Add Todo
          </button>
        )}
      </form>
    </div>
  );
}

export default AddTodo;
