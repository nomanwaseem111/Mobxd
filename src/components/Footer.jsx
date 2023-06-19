import React from "react";
import logo from "../assets/image/logo.png";

const Footer = () => {
  return (
    <div className="w-full bg-slate-50/80 pt-16 ">
      <div className="max-w-7xl mx-auto  p-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-5">
          <div className="col-span-full lg:col-span-2 md:px-5 px-5  h-[300px]">
            <img src={logo} alt="footer-img" className="max-h-[50px]" />
            <p className="mt-[20px] md:w-[500px] lg:w-[350px] text-sm text-slate-500">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.
            </p>
            <p className=" md:w-[500px] lg:w-[350px] text-sm text-slate-500 mt-2">
              Eaque ipsa quae ab illo inventore veritatis et quasi architecto
              beatae vitae dicta sunt explicabo.
            </p>
          </div>
          <div className="px-5 sm:px-5 md:px-5 lg:px-0">
            <h3 className="font-semibold text-slate-700">Category</h3>
            <p className="text-slate-500 transition-colors duration-300 hover:text-slate-700 py-2">
              News
            </p>
            <p className="text-slate-500 transition-colors duration-300 hover:text-slate-700 py-2">
              World
            </p>
            <p className="text-slate-500 transition-colors duration-300 hover:text-slate-700 py-2">
              Games
            </p>
            <p className="text-slate-500 transition-colors duration-300 hover:text-slate-700 py-2">
              References
            </p>
          </div>
          <div className="px-5 sm:px-0 md:px-0 lg:px-0">
            <h3 className="font-semibold text-slate-700">Business</h3>
            <p className="text-slate-500 transition-colors duration-300 hover:text-slate-700 py-2">
              {" "}
              Web
            </p>
            <p className="text-slate-500 transition-colors duration-300 hover:text-slate-700 py-2">
              eCommerce
            </p>
            <p className="text-slate-500 transition-colors duration-300 hover:text-slate-700 py-2">
              Business
            </p>
            <p className="text-slate-500 transition-colors duration-300 hover:text-slate-700 py-2">
              Entertainment
            </p>
            <p className="text-slate-500 transition-colors duration-300 hover:text-slate-700 py-2">
              Portfolio
            </p>
          </div>
          <div className="px-5 sm:px-5 md:px-5 lg:px-0">
            <h3 className="font-semibold text-slate-700">Apples</h3>
            <p className="text-slate-500 transition-colors duration-300 hover:text-slate-700 py-2">
              Media
            </p>
            <p className="text-slate-500 transition-colors duration-300 hover:text-slate-700 py-2">
              Brochure
            </p>
            <p className="text-slate-500 transition-colors duration-300 hover:text-slate-700 py-2">
              Nonprofit
            </p>
            <p className="text-slate-500 transition-colors duration-300 hover:text-slate-700 py-2">
              Educational
            </p>
            <p className="text-slate-500 transition-colors duration-300 hover:text-slate-700 py-2">
              Projects
            </p>
          </div>
          <div className="px-5 sm:px-0 md:px-0 lg:px-0">
            <h3 className="font-semibold text-slate-700">Cherry</h3>
            <p className="text-slate-500 transition-colors duration-300 hover:text-slate-700 py-2">
              Infopreneur
            </p>
            <p className="text-slate-500 transition-colors duration-300 hover:text-slate-700 py-2">
              Personal
            </p>
            <p className="text-slate-500 transition-colors duration-300 hover:text-slate-700 py-2">
              Wiki
            </p>
            <p className="text-slate-500 transition-colors duration-300 hover:text-slate-700 py-2">
              Forum
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
