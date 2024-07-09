import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ThemeBTN from './Components/ThemeBTN'
import Card from './Components/Card'
import { ContextProvider } from './context/Createcontext'

function App() {
const [themeMode,setThemeMode] = useState("light");
// const darkMode = ()=>{
//   setThemeMode("dark");
// }
// const lightMode = ()=>{
//   setThemeMode("light");
// }

useEffect(()=>{
  document.querySelector('html').classList.remove("light","dark");
  document.querySelector("html").classList.add(themeMode);
},[themeMode])
  return (
    <>
      {/* <ContextProvider value={{themeMode,darkMode,lightMode} }> */}
      <ContextProvider value={{themeMode,setThemeMode} }>
        <div className='flex items-center justify-center h-screen dark:bg-slate-500'>
          <div className='flex flex-col gap-2 w-fit items-end'>
            <div><ThemeBTN /></div>
            <div className='w-[300px]'><Card /></div>
          </div>
        </div>
      </ContextProvider>
    </>
  )
}

export default App
