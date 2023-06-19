import React from "react";
import Blog1 from "../assets/image/blog-1.png";
import Blog2 from "../assets/image/blog-2.png";
import Blog3 from "../assets/image/blog-3.png";
import user1 from "../assets/image/user-1.png";
import user2 from "../assets/image/user-2.png";
import user3 from "../assets/image/user-3.png";

const Blog = () => {
  return (
    <div className="w-full">
      <div className="mx-auto max-w-7xl  px-8 md:px-6">
        <span className="text-blue-500 font-bold">Our Blog</span>
        <h5 className="text-black text-3xl  font-extrabold ">
          From Our Latest Blog
        </h5>

        <div className="grid md:grid-cols-3 grid-cols-1 gap-10 mt-10">
          <div className="w-full duration-200 hover:scale-95">
            <div className="rounded-b-xl px-5 pb-5 pt-3 shadow-md shadow-blue-500/10 ">
              <div className='max-h-52 w-full overflow-hidden rounded-t-xl'>
                <img src={Blog1} alt="blog-1" className="w-full rounded-lg mb-2" />
              </div>
              <span className="mr-2 rounded-md bg-blue-50 px-3 py-1 text-sm text-slate-600 ">
                Services
              </span>
              <p className="block pt-4 font-medium capitalize text-slate-800 hover:text-blue-500">
                Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit.
              </p>
              <div className="flex mt-5">
                <img
                  src={user1}
                  className="mr-3 h-10 w-10 rounded-full object-cover"
                  alt="user-1"
                />
                <p className="text-sm font-semibold capitalize text-slate-600">
                  Zahidul Hossain{" "}
                  <span className="block text-xs text-slate-400">
                    Web Designer
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="w-full duration-200 hover:scale-95">
            <div className='rounded-b-xl px-5 pb-5 pt-3 shadow-md shadow-blue-500/10"  '>
            <div className='max-h-52 w-full overflow-hidden rounded-t-xl mb-2'>
              <img src={Blog2} alt="blog-1" className="w-full rounded-lg" />
               </div>
              <span className="mr-2 rounded-md bg-blue-50 px-3 py-1  text-sm text-slate-600 ">
                Services
              </span>
              <span className="mr-2 rounded-md bg-blue-50 px-3 py-1  text-sm text-slate-600">
                Design
              </span>
              <p className="block pt-4 font-medium capitalize text-slate-800 hover:text-blue-500">
                Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit.
              </p>
              <div className="flex pt-4">
                <img
                  src={user2}
                  className="mr-3 h-10 w-10 rounded-full object-cover"
                  alt="user-1"
                />
                <p className="text-sm font-semibold capitalize text-slate-600">
                  Zahidul Hossain{" "}
                  <span className="block text-xs text-slate-400">
                    Web Designer
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="w-full duration-200 hover:scale-95">
            <div className='rounded-b-xl px-5 pb-5 pt-3 shadow-md shadow-blue-500/10" '>
               <div className="max-h-52 w-full overflow-hidden rounded-t-xl mb-2">
              <img src={Blog3} alt="blog-1" className="w-full rounded-lg " />
              </div>
              <span className="mr-2 rounded-md bg-blue-50 px-3 py-1 text-sm text-slate-600">
                Website
              </span>
              <p className="block pt-4 font-medium capitalize text-slate-800 hover:text-blue-500">
                Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit.
              </p>
              <div className="flex pt-4">
                <img
                  src={user3}
                  className="mr-3 h-10 w-10 rounded-full object-cover"
                  alt="user-1"
                />
                <p className="text-sm font-semibold capitalize text-slate-600">
                  Zahidul Hossain{" "}
                  <span className="block text-xs text-slate-400">
                    Web Designer
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
