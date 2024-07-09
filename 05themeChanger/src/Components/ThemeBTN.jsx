import React from 'react'
import { contextFunc } from '../context/Createcontext'

function ThemeBTN() {
    // const {themeMode,darkMode,lightMode} = contextFunc();
    const {themeMode,setThemeMode} = contextFunc();
    const handeller =(e)=>{
        const result = e.currentTarget.checked;
        if(result){
            // darkMode()
            setThemeMode('dark')
        }else{
            // lightMode()
            setThemeMode("light")
        }
    }
  return (
    <>
        <label className='flex relative items-center cursor-pointer m-2 gap-2'>
            <input 
                type="checkbox" 
                className='sr-only peer '
                checked={themeMode === "dark"}
                onChange={handeller}
                  />
            <div className='w-11 h-6 bg-gray-200 rounded-full peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 after:content-[" "] after:bg-black dark:after:bg-white after:w-5 after:h-5 after:absolute after:top-[2px]  after:left-[2px] after:rounded-full after:border after:duration-300 peer-checked:after:translate-x-full dark:peer-focus:ring-blue-800 dark:bg-gray-700'></div>
            <span className='font-semibold font-serif text-blue-600 hover:underline drop-shadow-xl dark:text-white'>Theme Toggler</span>
        </label>
    </>
  )
}

export default ThemeBTN