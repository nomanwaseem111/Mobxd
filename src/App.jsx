import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './components/About'
import Blog from './components/Blog'
import Footer from './components/Footer'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import Portfolio from './components/Portfolio'
import Services from './components/Services'
import Home from './pages/Home'

const App = () => {
  return (
    <>
       <Header/>
       <Routes>
        <Route path='/' element={<Home/>} />
       

       </Routes>
       <Footer/>
    </>
  )
}

export default App
