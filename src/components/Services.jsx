import React from "react";
import {motion} from 'framer-motion'

const Services = () => {
  return (
    <div  id="services">
      <div className="mx-auto max-w-7xl px-8 py-10 md:px-6 p-2  ">
        <div className="mb-10 text-center">
          <span className="font-medium text-blue-500">Our Services</span>
          <h1 className='text-2xl font-bold text-slate-700 sm:text-3xl"'>
            Provide Awesome Services
          </h1>
          <p className="mx-auto max-w-2 mt-2 text-slate-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequatur deleniti sit dolor numquam non. Et.
          </p>
        </div>
        <div 
        // data-aos="fade-right"      
        //  data-aos-duration="1000"
         
         >

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 xl:gap-8">
          
          <motion.div 
            

            initial={{ x : "-100vw"}}
            animate={{x:0}}
            transition={{ type:"spring", duration:4 }}

           className="group flex cursor-pointer flex-col items-center rounded-xl border border-blue-500/10 bg-white px-5 py-8 shadow-lg shadow-blue-300/10 duration-200 hover:bg-blue-500 ">
            <div className="text-[50px] text-blue-500 group-hover:text-white">
              <ion-icon
                name="bar-chart-outline"
                className="bar-chart-icon"
              ></ion-icon>
            </div>
            <h1 className="mt-3 mb-1 text-[17px] font-semibold text-slate-600 duration-200 group-hover:text-white">
              Crafted for Startups
            </h1>
            <p className="text-center text-sm text-slate-500 duration-200 group-hover:text-blue-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              accusamus nihil veritatis ad. Odit, veritatis!
            </p>
          </motion.div>

          <motion.div  initial={{ x : "-100vw"}}
            animate={{x:0}}
            transition={{ type:"spring", duration:3 }} className="group flex cursor-pointer flex-col items-center rounded-xl border border-blue-500/10 bg-white px-5 py-8 shadow-lg shadow-blue-300/10 duration-200 hover:bg-blue-500 ">
            <div className="text-[50px] text-blue-500 group-hover:text-white">
            <ion-icon name="airplane-outline"></ion-icon>
            </div>
            <h1 className="mt-3 mb-1 text-[17px] font-semibold text-slate-600 duration-200 group-hover:text-white">
              Crafted for Startups
            </h1>
            <p className="text-center text-sm text-slate-500 duration-200 group-hover:text-blue-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              accusamus nihil veritatis ad. Odit, veritatis!
            </p>
          </motion.div>

          <motion.div  initial={{ x : "-100vw"}}
            animate={{x:0}}
            transition={{ type:"spring", duration:2 }} className="group flex cursor-pointer flex-col items-center rounded-xl border border-blue-500/10 bg-white px-5 py-8 shadow-lg shadow-blue-300/10 duration-200 hover:bg-blue-500 ">
            <div className="text-[50px] text-blue-500 group-hover:text-white">
              <ion-icon name="speedometer-outline"></ion-icon>
            </div>
            <h1 className="mt-3 mb-1 text-[17px] font-semibold text-slate-600 duration-200 group-hover:text-white">
              Speed Optimized
            </h1>
            <p className="text-center text-sm text-slate-500 duration-200 group-hover:text-blue-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              accusamus nihil veritatis ad. Odit, veritatis!
            </p>
          </motion.div>

                  
         <motion.div  initial={{ x : "-100vw"}}
            animate={{x:0}}
            transition={{ type:"spring", duration:4 }}  className="group flex cursor-pointer flex-col items-center rounded-xl border border-blue-500/10 bg-white px-5 py-8 shadow-lg shadow-blue-300/10 duration-200 hover:bg-blue-500 ">
            <div className="text-[50px] text-blue-500 group-hover:text-white">
              <ion-icon name="diamond-outline"></ion-icon>
            </div>
            <h1 className="mt-3 mb-1 text-[17px] font-semibold text-slate-600 duration-200 group-hover:text-white">
              High-quality Design
            </h1>
            <p className="text-center text-sm text-slate-500 duration-200 group-hover:text-blue-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              accusamus nihil veritatis ad. Odit, veritatis!
            </p>
          </motion.div>

          <motion.div initial={{ x : "-100vw"}}
            animate={{x:0}}
            transition={{ type:"spring", duration:3 }} className="group flex cursor-pointer flex-col items-center rounded-xl border border-blue-500/10 bg-white px-5 py-8 shadow-lg shadow-blue-300/10 duration-200 hover:bg-blue-500 ">
            <div className="text-[50px] text-blue-500 group-hover:text-white">
              <ion-icon name="file-tray-full-outline"></ion-icon>
            </div>
            <h1 className="mt-3 mb-1 text-[17px] font-semibold text-slate-600 duration-200 group-hover:text-white">
              All Essential Sections
            </h1>
            <p className="text-center text-sm text-slate-500 duration-200 group-hover:text-blue-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              accusamus nihil veritatis ad. Odit, veritatis!
            </p>
          </motion.div>

          <motion.div initial={{ x : "-100vw"}}
            animate={{x:0}}
            transition={{ type:"spring", duration:2 }} className="group flex cursor-pointer flex-col items-center rounded-xl border border-blue-500/10 bg-white px-5 py-8 shadow-lg shadow-blue-300/10 duration-200 hover:bg-blue-500 ">
            <div className="text-[50px] text-blue-500 group-hover:text-white">
              <ion-icon name="cloud-download-outline"></ion-icon>
            </div>
            <h1 className="mt-3 mb-1 text-[17px] font-semibold text-slate-600 duration-200 group-hover:text-white">
              Regular Updates
            </h1>
            <p className="text-center text-sm text-slate-500 duration-200 group-hover:text-blue-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              accusamus nihil veritatis ad. Odit, veritatis!
            </p>
          </motion.div>
         

        </div>
        </div>
   
      </div>
    </div>
  );
};

export default Services;
