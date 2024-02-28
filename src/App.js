import React from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import SignUp from './Components/SignUp'
import About from './Components/About'
import SignIn from './Components/SignIn'
import Contact from './Components/Contact'
import Service from './Components/Service'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='About' element={<About />} />
        <Route path='Service' element={<Service />} />
        <Route path='Contact' element={<Contact />} />
        <Route path='SignIn' element={<SignIn />} />
        <Route path='SignUp' element={<SignUp />} />
      </Routes>
    </>
  )
}

export default App