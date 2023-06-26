import React from 'react'
// import '../home4.css'
import FeaturesSection from '../components/FeaturesSection'
import Frequently from '../components/Frequently'
import HeroSection from '../components/HeroSection'
import Portfolio from '../components/Portfolio';
import Services from '../components/Services'
import About from '../components/About'
import Blog from '../components/Blog';
const Home4 = () => {
  return (
    // <div className='container2'>
    //   <h1 className='child2'>
    //     New Design
    //   </h1>
    // </div>
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

export default Home4
