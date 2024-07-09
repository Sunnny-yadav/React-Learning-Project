import React from 'react'
import { NavLink } from 'react-router-dom'

function InsideAbout() {
  return (
    <>
      <h1 className='text-xl bg-red-400 text-white text-center'>I am  component occured  from About.jsx componet</h1>
      <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores veritatis minus reiciendis earum, quasi iusto et expedita alias, labore nisi minima distinctio! Fugiat laboriosam iusto et sint magnam quibusdam ex saepe? Itaque, fugiat suscipit.</div>
      <button className='hover:bg-orange-400 hover:text-black bg-orange-600 px-2 py-1 text-white font-semibold rounded-xl mt-3'><NavLink   to="/about/inside/moreInside" > click me2!</NavLink ></button>

    </>
  )
}

export default InsideAbout