import React, { Component, useEffect, useState } from 'react'
import { useLoaderData,useLocation } from 'react-router-dom'

function GitHub() {
    let data = useLoaderData();
 
    // we are not using this method for fetching data , because it is less efficent and been a pro developer we should optimized the project so we use Loader prop in the route of this Component
    // const [data,setData]=useState({})
    // useEffect(()=>{
    //     fetch("https://api.github.com/users/Sunnny-yadav")
    //     .then((res)=> res.json())
    //     .then((data)=> setData(data))
    
    // },[])
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers:{data.followers} &nbsp; userId:&nbsp;{data.login}
    <img className='mx-auto rounded-full border-4 border-orange-700 mt-5' src={data.avatar_url} alt="Git picture" width={300} />
    
   
      
    
    </div>
  )
}

export default GitHub