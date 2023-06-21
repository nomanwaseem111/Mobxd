import React from 'react'
import features from '../assets/image/features.png'
import icon1 from '../assets/image/icon-1.png'
import icon2 from '../assets/image/icon-2.png'
import icon3 from '../assets/image/icon-3.png'

const FeaturesSection = () => {
  return (
    <div className='w-full  '>
       <div className='mx-auto max-w-7xl  px-8 md:px-6 py-5  flex justify-between flex-wrap '>
         <div className='md:w-[100%] lg:w-[500px] w-[500px] sm:w-[100%] '>
          <div data-aos="fade-down"
     data-aos-duration="2000">
          <h1 className='text-blue-500 font-medium'>Our Features</h1>
           <p className='text-2xl font-bold text-slate-700 sm:text-3xl'>Provide Our Features</p>
           <img src={features} alt="feature"  className="rounded-lg mt-[40px]  lg:w-[600px]  "/>
           </div>
        

         <div className='md:w-[100%] lg:w-[680px] mt-[50px] lg:mt-[97px]'>
          <p className='mb-3 text-slate-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint explicabo perferendis voluptatibus sunt enim officiis.</p>
          <p className='mt-[10px]  text-slate-500'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint laudantium, cum, quaerat nulla possimus magni odio ullam ratione vitae id fuga aliquam sed molestiae? Voluptas.</p>
          <button className="w-full rounded-md bg-blue-500 px-8 py-2.5 mt-[40px] font-semibold text-white shadow-md shadow-blue-500/20 hover:bg-blue-600 duration-200 sm:w-auto">
              Get Started
            </button>
            </div>

            <div data-aos="fade-up"
     data-aos-duration="2000">
            <div className='flex justify-between items-center mt-[60px] flex-wrap lg:mx-0 md:mx-auto'>
             
             <div className='shadow-lg bg-[#fff] px-4 py-8 rounded-xl w-[100%]  lg:mt-0 mt-[10px] lg:w-[215px] flex flex-col justify-center items-center'>
              <img src={icon1} alt="icon-1" className='w-[70px]'/>
              <h1 className='text-lg font-bold text-slate-600 mt-3'>Web Design</h1>
              <p className='text-sm text-blue-500'>Learn more</p>

             </div>

             <div className='shadow-lg bg-[#fff] px-4 py-8 rounded-xl w-[100%]  lg:mt-0 mt-[10px]  lg:w-[215px] flex flex-col justify-center items-center '>
              <img src={icon2} alt="icon-1" className='w-[70px]'/>
              <h1 className='text-lg font-bold text-slate-600 mt-3'>Automation</h1>
              <p className='text-sm text-blue-500'>Learn more</p>


             </div>
             <div className='shadow-lg bg-[#fff] px-4 py-8 rounded-xl w-[100%]  lg:mt-0 mt-[10px]  lg:w-[215px] flex flex-col justify-center items-center'>
              <img src={icon3} alt="icon-1" className='w-[70px]'/>
              <h1 className='text-lg font-bold text-slate-600 mt-3'>Infographics</h1>
              <p className='text-sm text-blue-500'>Learn more</p>


             </div>

            </div>
            </div>
         </div>
       </div>
    </div>
  )
}

export default FeaturesSection
