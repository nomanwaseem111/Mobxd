import React from 'react'
import About from '../components/About'
import FeaturesSection from '../components/FeaturesSection'
import Frequently from '../components/Frequently'
import HeroSection from '../components/HeroSection'
import Portfolio from '../components/portfolio'
import Services from '../components/Services'

const Home = () => {
  return (
    <>
     <HeroSection/>
     <FeaturesSection/>
    {/* <About/> */}
    <Services/>
    <Frequently/>
    <Portfolio/>
    </>
  )
}

export default Home
