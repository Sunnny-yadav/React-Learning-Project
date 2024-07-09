import { createContext, useContext } from "react";

export const TodoContext = createContext(
    {
        todos:[{
           
        }],
        addMsg:()=>{},
        updateTodoMsg:()=>{},
        toggleStatus:()=>{},
        RemoveTodo:()=>{}
    }
)


export const TodosContext = TodoContext.Provider;

export const useContextAPI = ()=>{
    return useContext(TodoContext);
}