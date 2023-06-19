import React from 'react'
import { BiBriefcase } from "react-icons/bi";
import aboutImage from '../assets/image/about.png'

const About = () => {
  return (
    <div className='w-full mt-[100px]'>
      <div className='mx-auto max-w-7xl sm:px-2  md:px-4 lg:px-0   '>
          <div className='flex  flex-wrap justify-between '>
            <div className='md:w-[500px] lg:w-[620px] sm:w-[700px] sm:mx-auto  w-[450px]  '>
              <h3 className='text-blue-500 font-medium'>About Us</h3>
              <h2 className='text2xl font-bold text-slate-700 sm:text-3xl'>Creative Marketing agency</h2>
              <p className='md:w-[500px] lg:w-[610px] mt-[40px] text-slate-500 w-[350px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere corporis delectus commodi suscipit dolores? Laudantium natus consectetur maiores architecto iste?</p>
            <div>
              <div className='flex  mt-[20px]  w-[400px]  md:w-[475px] lg:w-[380px] justify-between items-center '>
              <div className='bg-blue-500 w-[40px] h-[40px] rounded-full flex justify-center items-center'>
              <BiBriefcase  className='text-[#fff] text-[20px]' />
              </div>
              <p className='ml-4 max-w-md font-medium text-slate-600 w-[320px] lg:[800px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>

              <div className='flex  mt-[20px] w-[400px]   md:w-[440px] lg:w-[530px] justify-between items-center'>
              <div className='bg-blue-500 w-[40px] h-[40px] rounded-full flex justify-center items-center'>
              <BiBriefcase  className='text-[#fff] text-[20px]' />
              </div>
              <p className='md:w-[380px] sm:w-[640px] lg:w-[472px] w-[320px] font-medium text-slate-600 '>Omnis unde nam quia harum voluptatum itaque iste nostrum amet vero.</p>
              </div>

              <div className='flex  mt-[20px]  lg:w-[500px] md:w-[500px] w-[380px] justify-between items-center'>
              <div className='bg-blue-500 w-[40px] h-[40px] rounded-full flex justify-center items-center'>
              <BiBriefcase  className='text-[#fff] text-[20px]' />
              </div>
              <p className='lg:w-[440px] w-[300px]  md:w-[440px] font-medium text-slate-600 '>Id quos et quidem perspiciatis similique! Rerum, natus temporibus.</p>
              </div>
             
            </div>
            <button className="w-full rounded-md bg-blue-500 px-8 py-2.5 mt-[40px] font-semibold text-white shadow-md shadow-blue-500/20 hover:bg-blue-600 duration-200 sm:w-auto">
              Get Started
            </button>
            </div>


            <div className='md:w-[450px] lg:w-[500px]  sm:w-[500px] sm:mx-auto '>
            <img src={aboutImage} alt="aboutImage"  />
            </div>
          </div>
      </div>
    </div>
  )
}

export default About
