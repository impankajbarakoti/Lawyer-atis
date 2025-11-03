import Blogs from "./Blogs";
import React from "react";
const BlogHeader = () => {
  return (
    <>
      {/* --- Hero Section --- */}
      <section className="pt-16 sm:pt-20 lg:pt-20  pb-4  bg-white font-sans overflow-hidden">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* --- Title Section --- */}
          <div className="relative  bg-black p-3 ">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight relative z-10">
              Our Blogs
            </h2>
          </div>
        </div>
      </section>

      {/* --- Blog Section --- */}
      <Blogs />
    </>
  );
};

export default BlogHeader;
