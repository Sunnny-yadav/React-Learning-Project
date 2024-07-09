import { createContext ,useContext } from "react";

export const userContext = createContext(
    {  
    }
)

export const ContextProvider = userContext.Provider

export const contextFunc =()=>{
    return useContext(userContext)
}