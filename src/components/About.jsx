import React from 'react'
import aboutImage from '../assets/image/about.png'

const About = () => {
  return (
     <div className='mt-[100px]' id='about' >
     <div className='mx-auto max-w-7xl px-8 md:px-6'>
       <div className='md:flex md:justify-between md:gap-6'>
         <div className='md:w-6/12'>
           <div className='mb-5 sm:mb-10'>
             <span className='font-medium text-blue-500'>About Us</span>
             <h1 className='text-2xl font-bold text-slate-700 sm:text-3xl'>Creative Marketing agency</h1>
             
           </div>
           <p className='text-slate-500 mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere corporis delectus commodi suscipit dolores? Laudantium natus consectetur maiores architecto iste?</p>
           <div className='mb-6 flex items-center'>
             <div className='flex h-[35px] w-[35px] min-w-[35px] items-center justify-center rounded-full bg-blue-500 text-white'>
             <ion-icon name="briefcase-outline"></ion-icon>
             </div>
             <p className='ml-4 max-w-md font-medium text-slate-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
           </div>
           <div className='mb-6 flex items-center'>
             <div className='flex h-[35px] w-[35px] min-w-[35px] items-center justify-center rounded-full bg-blue-500 text-white'>
             <ion-icon name="briefcase-outline"></ion-icon>
             </div>
             <p className='ml-4 max-w-md font-medium text-slate-600'>Omnis unde nam quia harum voluptatum itaque iste nostrum amet vero.</p>
           </div>
           <div className='mb-6 flex items-center'>
             <div className='flex h-[35px] w-[35px] min-w-[35px] items-center justify-center rounded-full bg-blue-500 text-white'>
             <ion-icon name="briefcase-outline"></ion-icon>
             </div>
             <p className='ml-4 max-w-md font-medium text-slate-600'>Id quos et quidem perspiciatis similique! Rerum, natus temporibus.</p>
           </div>
            <button className='w-full rounded-md bg-blue-500 px-8 py-2.5 font-semibold text-white shadow-md shadow-blue-500/20 hover:bg-blue-600 duration-200 md:w-max'>Get Started</button>
         </div>
         
         <div className='mt-8 flex justify-center md:mt-0 md:w-5/12'>
           
         <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">

           <img src={aboutImage} alt="about-Image" className='max-h-[500px] md:max-h-max'/>
           </div>
         </div>


       </div>
       </div>
     </div>
  )
}

export default About
