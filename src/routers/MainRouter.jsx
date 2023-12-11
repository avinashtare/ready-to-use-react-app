import React from 'react'
import { Routes, Route } from "react-router-dom"
// components
import Nav from '../components/Nav'
import Footer from '../components/Footer'
// pages 
import Home from '../pages/Home'
import About from '../pages/About'
import Services from '../pages/Services'
import Blog from '../pages/Blog'
import Signup from '../pages/Signup'

function MainRouter() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/about' Component={About} />
        <Route path='/services' Component={Services} />
        <Route path='/blog' Component={Blog} />
        <Route path="signup" Component={Signup} />
      </Routes>
      
      <Footer />
    </>

  )
}

export default MainRouter