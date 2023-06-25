import React, { useState } from "react";
import logo from "../assets/image/logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
// import { Link } from "react-scroll";
import {motion} from 'framer-motion'

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className="w-full h-[100px] fixed top-[0px] bg-[#fff] z-50 ">
        <div className="max-w-7xl px-[18px] sm:px-[20px] md:px-[26px]  lg:px-2 border-b mx-auto h-[95px] md:h-[90px] lg:h-[95px] pt-8 md:pt-6 lg:pt-6">
          <div className="flex justify-between items-center ">
            <img
              className=" w-[115px] md:w-[140px] lg:w-[180px] h-auto"
              src={logo}
              alt="logo"
            />

            <ul className="hidden lg:flex gap-8 ">
              <Link
                to="/"
                // spy={true}
                // smooth={true}
                // offset={-100}
                // duration={500}
                className="text-[16px] text-[#334415] hover:text-blue-600 font-medium cursor-pointer"
              >
                Home
              </Link>
              <Link
                to="/home2"
                // spy={true}
                // smooth={true}
                // offset={-100}
                // duration={500}
                className="text-[16px] text-[#334415] hover:text-blue-600 font-medium cursor-pointer"
              >
                Home2
              </Link>
              <Link
                to="/home3"
                // spy={true}
                // smooth={true}
                // offset={-100}
                // duration={500}
                className="text-[16px] text-[#334415] hover:text-blue-600 font-medium cursor-pointer"
              >
                Home3
              </Link>
              <Link
                to="/home4"
                // spy={true}
                // smooth={true}
                // offset={-100}
                // duration={500}
                className="text-[16px] text-[#334415] hover:text-blue-600 font-medium cursor-pointer"
              >
                Home4
              </Link>
               <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="text-[16px] text-[#334415] hover:text-blue-600 font-medium cursor-pointer"
              >
                About
              </Link>
              
               <Link
                to="services"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="text-[16px] text-[#334415] hover:text-blue-600 font-medium cursor-pointer"
              >
                Services
              </Link>
              <Link
                to="portfolio"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="text-[16px] text-[#334415] hover:text-blue-600 font-medium cursor-pointer"
              >
                Portfolio
              </Link>
              <Link
                to="blog"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="text-[16px] text-[#334415] hover:text-blue-600 font-medium cursor-pointer"
              >
                Blog
              </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="text-[16px] text-[#334415] hover:text-blue-600 font-medium cursor-pointer"
              >
                Contact
              </Link>
            </ul>
            {/* <h1>Responsive Menu</h1> */}
            <ul
              className={`lg:hidden w-[300px] md:w-[350px] flex bg-[#fff] flex-col gap-8 fixed p-5 px-10  border border-blue-200 rounded right-[35px]  md:right-[70px]  ${
                toggle ? "top-[105px]" : "top-[-100%]"
              }  `}
            >
              <Link
                to="hero"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="text-[16px] text-[#334415] hover:text-blue-600 font-medium"
              >
                Home
              </Link>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="text-[16px] text-[#334415] hover:text-blue-600 font-medium"
              >
                About
              </Link>
              <Link
                to="services"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="text-[16px] text-[#334415] hover:text-blue-600 font-medium"
              >
                Services
              </Link>
              <Link
                to="portfolio"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="text-[16px] text-[#334415] hover:text-blue-600 font-medium"
              >
                Portfolio
              </Link>
              <Link
                to="blog"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="text-[16px] text-[#334415] hover:text-blue-600 font-medium"
              >
                Blog
              </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="text-[16px] text-[#334415] hover:text-blue-600 font-medium"
              >
                Contact
              </Link>
            </ul>
            <div className="lg:w-auto w-[220px] flex justify-end sm:flex sm:justify-end md:justify-between lg:justify-around items-center">
              <motion.button whileHover={{ scale:1.1}} className="text-[16px] hidden  sm:hidden md:block lg:block rounded-md hover:bg-blue-600 duration-200 bg-blue-500 font-semibold px-9 py-2.5 text-[#fff] shadow border-none outline-none">
                Register
              </motion.button>

              {toggle ? (
                <AiOutlineClose
                  onClick={() => setToggle(!toggle)}
                  className="text-[26px] text-blue-600 duration-200 lg:hidden block"
                />
              ) : (
                <AiOutlineMenu
                  onClick={() => setToggle(!toggle)}
                  className="text-[26px]  text-blue-600 duration-200 lg:hidden block"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
