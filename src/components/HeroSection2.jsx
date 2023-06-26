import React,{useState} from "react";
import brand1 from "../assets/image/brand-1.png";
import brand2 from "../assets/image/brand-2.png";
import brand3 from "../assets/image/brand-3.png";
import brand4 from "../assets/image/brand-4.png";
import hero from "../assets/image/hero.png";
import { motion, useAnimationControls } from "framer-motion";



const HeroSection = () => {

    const controls = useAnimationControls()
    const [isPlaying, setIsPlaying] = useState(false)
 
    const rubberBand = () => {

       controls.start({
            transform:[
                "scale3d(1,1,1)",
                "scale3d(1.4,.55,1)",
                "scale3d(.75,1.25,1)",
                "scale3d(1.25,.85,1)",
                "scale3d(.9,1.05,1)",
                "scale3d(1,1,1)",

            ],
            // transition:{
            //     times:[0,.4,.6,.7,.8,.9]
            // }

        })
        setIsPlaying(true)
    }
 
    return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full "
      id="hero"
    >
      <div className="max-w-7xl pt-[150px] md:pt-[200px] lg:pt-[200px] p-4 mx-auto flex justify-between   flex-wrap ">
        <motion.div
         
          initial={{y:"-10vh"}}
          animate={{y:0}}
          transition={{ duration:2}}
          className="w-full lg:w-5/12  md:px-5 lg:px-0"
        >
          <motion.p animate={controls} onMouseOver={() => {
              if(!isPlaying)
                rubberBand()
          }}
           onAnimationComplete={() => setIsPlaying(false)}
           className="text-slate-800 mb-3 text-4xl font-bold leading-snug sm:text-[42px] lg:text-[40px] md:w-[680px] lg:w-[500px] xl:text-[42px] ">
            Everything you need to run your online{" "}
            <span className="text-blue-600">business</span>
          </motion.p>
          <p className="text-slate-500 mb-8 max-w-[480px] text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
            alias voluptate esse blanditiis molestiae repudiandae fugiat eius
            sapiente expedita ut.
          </p>
          <div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="w-full rounded-md bg-blue-500 px-8 py-2.5 font-semibold text-white shadow-md shadow-blue-500/20 hover:bg-blue-600 duration-200 sm:w-auto"
            >
              Get Started
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="mt-4 box-border w-full rounded-md border border-blue-500/20 px-8 py-2.5 font-semibold text-blue-500 shadow-md shadow-blue-500/10 duration-200 sm:ml-4 sm:mt-0 sm:w-auto "
            >
              Register Now
            </motion.button>
          </div>
          <div className="mt-6 flex flex-wrap gap-6">
            <img
              src={brand1}
              alt="img"
              className="w-32 cursor-pointer rounded-lg border border-blue-300/20 bg-white px-5 py-3 shadow-md shadow-blue-500/5 duration-200 hover:scale-95 sm:w-36"
            />
            <img
              src={brand2}
              alt="img"
              className="w-32 cursor-pointer rounded-lg border border-blue-300/20 bg-white px-5 py-3 shadow-md shadow-blue-500/5 duration-200 hover:scale-95 sm:w-36"
            />
            <img
              src={brand3}
              alt="img"
              className="w-32 cursor-pointer rounded-lg border border-blue-300/20 bg-white px-5 py-3 shadow-md shadow-blue-500/5 duration-200 hover:scale-95 sm:w-36"
            />
            <img
              src={brand4}
              alt="img"
              className="w-32 cursor-pointer rounded-lg border border-blue-300/20 bg-white px-5 py-3 shadow-md shadow-blue-500/5 duration-200 hover:scale-95 sm:w-36"
            />
          </div>
        </motion.div>

        <motion.div
          // data-aos="fade-down"
          // data-aos-easing="linear"
          // data-aos-duration="1000"
          // initial={{x:"100vw"}}
          
        >
          <img
            src={hero}
            alt="hero-image"
            className="w-[300px]  sm:w-[550px] md:w-[650px] lg:w-[590px] lg:mt-0 mt-10  "
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
