import React from "react";

const SimpleCallToAction = () => {
  return (
    <section className="bg-amber-50/50 py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between">
        {/* Left Content: Text */}
        <div className="mb-8 lg:mb-0 lg:max-w-3xl">
          <p className="text-sm uppercase tracking-wider text-amber-700 font-medium pb-1 relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-amber-700/50">
            Next Step
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight mt-3">
            Let's Work Together
          </h2>
        </div>

        {/* Right Content: Button */}
        <a
          href="#" // Replace with your contact page link
          className="px-10 py-4 bg-amber-700/80 text-white font-medium uppercase tracking-wider text-sm 
                     shadow-md hover:bg-amber-700 transition duration-300 flex-shrink-0"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default SimpleCallToAction;
