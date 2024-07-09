import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [], // this todo is an array of object .Object will contain the information regarding each todo, and it will be created for each msg passed in the input box
  btnUpdate: {
    status: false,
    id: null,
  },
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addToTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        Msg: action.payload.Msg,
        complete: false,
        icon: false
      };
      // state.todos.push(todo); // this will also work but do not obey the principles of react immutability which would be causing bugs later so it will be better to use spread variable here too....
      state.todos = [...state.todos, todo];
    },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    loadTodo: (state, action) => {
      state.todos = action.payload;
    },

    toggleComplete: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload
          ? { ...todo, complete: !todo.complete }
          : todo
      );
    },

    toggleBtn: (state, action) => {
      state.btnUpdate = {
        ...state.btnUpdate,
        status: !state.btnUpdate.status,
        id: action.payload,
      };
    },

    updateIcon: (state, action) => {
        state.todos = state.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, icon: !(todo.icon) } : todo
        );
        console.log(state.todos)
      },

    updateMsg: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === state.btnUpdate.id ? { ...todo, Msg: action.payload } : todo
      );
      state.todos = state.todos.map((todo) =>
        todo.id === state.btnUpdate.id ? { ...todo, icon: !todo.icon } : todo
      );
      state.btnUpdate = {
        ...state.btnUpdate,
        status: !state.btnUpdate.status,
        id: null,
      };
      

    },
   
  },

  
});

export const {
  addToTodo,
  removeTodo,
  loadTodo,
  toggleComplete,
  toggleBtn,
  updateMsg,
  updateIcon,
} = todoSlice.actions;

export default todoSlice.reducer;
