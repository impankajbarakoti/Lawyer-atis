import React from "react";

const CallToActionBanner = () => {
  return (
    <section
      className="relative w-full h-56 flex items-center justify-center text-center p-4 bg-fixed bg-cover bg-center font-sans"
      style={{
        // Replace this URL with your actual background image
        backgroundImage: `url('https://matchthemes.com/demowp/atis/wp-content/uploads/blog-1.jpg')`,
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center">
        <p className="text-sm uppercase tracking-widest text-amber-500 mb-2">
          Start Now!
        </p>
        <h2 className="text-4xl md:text-5xl font-serif text-white mb-8 leading-tight drop-shadow-lg">
          Let's Work Together
        </h2>
        <a
          href="/" // Replace with your contact page link
          className="px-8 py-3 bg-amber-700 text-white font-medium uppercase tracking-wider text-sm 
                     shadow-md hover:bg-amber-800 transition duration-300"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default CallToActionBanner;
