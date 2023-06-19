import React from "react";
import por1 from "../assets/image/p-1.png";
import por2 from "../assets/image/p-2.png";
import por3 from "../assets/image/p-3.png";
import por4 from "../assets/image/p-4.png";
import por5 from "../assets/image/p-5.png";
import por6 from "../assets/image/p-6.png";
import por7 from "../assets/image/p-7.png";
import por8 from "../assets/image/p-8.png";

const Portfolio = () => {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-7xl px-8 md:px-6 p-2 ">
        <div className="mb-10 text-center">
          <span className="font-medium text-blue-500">Our Portfolio</span>
          <h1 className='text-2xl font-bold text-slate-700 sm:text-3xl"'>
            Our Recent Works
          </h1>
          <p className="mx-auto max-w-2 mt-2 text-slate-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequatur deleniti sit dolor numquam non. Et.
          </p>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-10">
          <div >
            <img src={por1} alt="port-1" className="rounded-2xl" />
          </div>

          <div >
            <img src={por2} alt="port-1"  className="rounded-2xl" />
          </div>

          <div >
            <img src={por3} alt="port-1"  className="rounded-2xl "/>
          </div>

          <div >
            <img src={por4} alt="port-1"  className="rounded-2xl "/>
          </div>

          <div >
            <img src={por5} alt="port-1"  className="rounded-2xl "/>
          </div>

          <div >
            <img src={por6} alt="port-1"  className="rounded-2xl "/>
          </div>

          <div  >
            <img src={por7} alt="port-1"  className="rounded-2xl"/>
          </div>

          <div >
            <img src={por3} alt="port-1"  className="rounded-2xl "/>
          </div>

          <div >
            <img src={por8} alt="port-1"  className="rounded-2xl  "/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
