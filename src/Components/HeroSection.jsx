import React from "react";

// Video URL provided by the user
const VIDEO_URL =
  "https://matchthemes.com/demowp/atis/wp-content/uploads/video-atis.mp4";

const HeroSection = () => {
  return (
    // Outer container for the whole hero section
    <section className="relative h-screen w-full overflow-hidden font-serif">
      {/* 1. Background Video Element */}
      <video
        autoPlay
        loop
        muted
        playsInline // Ensures video plays correctly on iOS/mobile
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={VIDEO_URL} type="video/mp4" />
        {/* Fallback content if the video cannot be loaded */}
        Your browser does not support the video tag.
      </video>

      {/* 2. Dark Overlay for better text readability */}
      <div className="absolute inset-0  z-10"></div>

      {/* 3. Content Container (Centered) */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center p-4">
        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif text-white mb-4 leading-tight drop-shadow-lg">
          Professional Legal Expertise
        </h1>

        {/* Sub Text (Lorem Ipsum) */}
        <p className="max-w-xl text-lg text-gray-200 mb-8 font-sans drop-shadow-md">
          Pri ex nullam mollis nonumes. Eum libris iuvaret forensibus ex, sit ei
          assum iusto.
        </p>

        {/* Action Button */}
        <button
          className="px-10 py-4 bg-amber-700 text-white font-medium uppercase tracking-wider text-sm 
                           shadow-xl hover:bg-amber-800 transition duration-300"
        >
          Schedule a Free Consultation
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
