import React from 'react'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom'
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/contact';
import InsideAbout from './components/InsideAbout';
import GitHub from './components/GitHub';
import GitLoaderInfo from './components/GitLoaderInfo';
import InsideAbout2 from './components/InsideAbout2';

//This function can be used if you don't want to export and import the loaderfunction
// async function GitloaderInfo(){
//   let data =await fetch("https://api.github.com/users/Sunnny-yadav");
//   return data.json();
// }

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/about/inside' element={<InsideAbout />} />
      <Route path='/about/inside/moreInside' element={<InsideAbout2 />} />

      {/* if you want to display the components which is present in other component inside the root layout such a way that if we go back from that page we should come to parent page from where the component was accessed then use the above method i.e /about/inside i mean to say that give the same path as we are following to access that component   */}

      {/* ..==> suppose you are in About.jsx component and this component contains other component that will rendered after clinking on Navlink present in this component such a way that the content of About.jsx should be visible than use nested routing in App.jsx using <outlet /> as shown below */}
      {/* <Route path='/about' element={<About />} >
           <Route path='inside' element={<InsideAbout />}/>
       <Route/> */}
      <Route path='/contact' element={<Contact />} />

      <Route
        path='/git'
        element={<GitHub />}
        loader={GitLoaderInfo}
      />
    </Route>
  )
);


function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App