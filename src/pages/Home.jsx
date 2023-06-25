import React from 'react'
import FeaturesSection from '../components/FeaturesSection'
import Frequently from '../components/Frequently'
import HeroSection from '../components/HeroSection'
import Portfolio from '../components/Portfolio';
import Services from '../components/Services'
import About from '../components/About'
import Blog from '../components/Blog'

const Home = () => {


  return (
    <>
     <HeroSection/>
     <FeaturesSection/>
    <About/>
    <Services/>
    <Frequently/>
    <Portfolio/>
    <Blog/>
    
    </>
  )
}

export default Home
