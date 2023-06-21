import React from 'react'
import faq from '../assets/image/faq.png'

const Frequently = () => {
  return (
    <div className='w-full '>
      <div className='max-w-7xl py-10 p-3 mx-auto md:px-8 px-8 '>
        <span className='text-blue-500 font-bold'>Our FAQ</span>
        <h5 className='text-black text-3xl  font-extrabold '>Frequently Asked Questions</h5>
        <div className='grid lg:grid-cols-2 sm:grid-cols-1'>
          
          <div className='max-w-[550px] md:mx-auto lg:mx-0  mx-auto  '>
          <div data-aos="zoom-in-up"  data-aos-duration="1000">


            <img src={faq} alt="faq-images"/>
            </div>
          </div>
          <div>
            <div className='flex   justify-between items-center p-5 bg-blue-50 mb-5 rounded-lg  ' >
              <p className='text-slate-600 font-medium pl-3'>Lorem ipsum dolor sit, amet consectetur </p>
              <div className='text-blue-500 text-2xl'>
              <ion-icon name="arrow-down-circle-outline"></ion-icon>
              </div>
            </div>
            <div className='flex   justify-between items-center p-5 bg-blue-50 mb-5 rounded-lg ' >
            <p className='text-slate-600 font-medium  pl-3'>Lorem ipsum dolor sit, amet consectetur </p>
              <div className='text-blue-500 text-2xl'>
              <ion-icon name="arrow-down-circle-outline"></ion-icon>
              </div>
            </div>

            <div className='flex   justify-between items-center p-5 bg-blue-50 mb-5 rounded-lg ' >
            <p className='text-slate-600 font-medium  pl-3'>Lorem ipsum dolor sit, amet consectetur </p>
              <div className='text-blue-500 text-2xl'>
              <ion-icon name="arrow-down-circle-outline"></ion-icon>
              </div>
            </div>


            <div className='flex   justify-between items-center p-5 bg-blue-50 mb-5 rounded-lg ' >
            <p className='text-slate-600 font-medium  pl-3'>Lorem ipsum dolor sit, amet consectetur </p>
              <div className='text-blue-500 text-2xl'>
              <ion-icon name="arrow-down-circle-outline"></ion-icon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Frequently
