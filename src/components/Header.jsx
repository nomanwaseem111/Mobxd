import React,{useState} from 'react'
import logo from '../assets/image/logo.png'
import { AiOutlineMenu,AiOutlineClose } from "react-icons/ai";

const Header = () => {
 
 
      const [toggle,setToggle] = useState(false)

    return (
    <>
     <div className='w-full h-[100px] fixed top-[0px] bg-[#fff] '>
       <div className='max-w-[1240px] px-[30px] sm:px-[20px] md:px-[26px]  lg:px-2 border-b mx-auto h-[95px] md:h-[90px] lg:h-[95px] pt-8 md:pt-6 lg:pt-6'>
          <div className='flex justify-between items-center '>
            <img className=' w-[115px] md:w-[140px] lg:w-[180px] h-auto' src={logo} alt="logo"/>
            <ul className='hidden lg:flex gap-8 '>
             <li className='text-[16px] text-[#334415] hover:text-blue-600 font-medium'>Home</li>
             <li className='text-[16px] text-[#334415] hover:text-blue-600 font-medium'>About</li>
             <li className='text-[16px] text-[#334415] hover:text-blue-600 font-medium'>Services</li>
             <li className='text-[16px] text-[#334415] hover:text-blue-600 font-medium'>Portfolio</li>
             <li className='text-[16px] text-[#334415] hover:text-blue-600 font-medium'>Blog</li>
             <li className='text-[16px] text-[#334415] hover:text-blue-600 font-medium'>Contact</li>

            </ul>
             {/* <h1>Responsive Menu</h1> */}
             <ul className={`lg:hidden w-[300px] md:w-[350px] flex bg-[#fff] flex-col gap-8 fixed p-5 px-10  border border-blue-200 rounded right-[35px]  md:right-[70px]  ${ toggle ? "top-[105px]" : "top-[-100%]"  }  `}>
             <li className='text-[16px] text-[#334415] hover:text-blue-600 font-medium'>Home</li>
             <li className='text-[16px] text-[#334415] hover:text-blue-600 font-medium'>About</li>
             <li className='text-[16px] text-[#334415] hover:text-blue-600 font-medium'>Services</li>
             <li className='text-[16px] text-[#334415] hover:text-blue-600 font-medium'>Portfolio</li>
             <li className='text-[16px] text-[#334415] hover:text-blue-600 font-medium'>Blog</li>
             <li className='text-[16px] text-[#334415] hover:text-blue-600 font-medium'>Contact</li>

            </ul>
            <div className='flex lg:w-auto w-[220px] flex justify-end sm:flex sm:justify-end md:justify-between lg:justify-around items-center'>
            <button className='text-[16px] hidden  sm:hidden md:block lg:block rounded-md hover:bg-blue-600 duration-200 bg-blue-500 font-semibold px-9 py-2.5 text-[#fff] shadow border-none outline-none'>Register</button>
            
            {
               toggle ? <AiOutlineClose onClick={() => setToggle(!toggle)} className='text-[35px] text-blue-600 duration-200 lg:hidden block'/> : <AiOutlineMenu  onClick={() => setToggle(!toggle)} className='text-[35px] text-blue-600 duration-200 lg:hidden block' />
            }
            
            
            
            </div>
          </div>
       </div>
     </div>
    </>
  )
}

export default Header
