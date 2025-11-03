import React, { useState } from "react";
import { Quote } from "lucide-react"; // Lucide icon

// Data for the three testimonials
const testimonials = [
  {
    quote:
      "In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat. Duis leo. Sed fringilla mauris sit amet nibh.",
    author: "Laura Foster",
    title: "Agro",
  },
  {
    quote:
      "Experience unparalleled luxury and personalized service at Almaris Hotel, where every stay is a journey into sophistication, comfort, and unforgettable memories.",
    author: "Donette Fondren",
    title: "Hotel Manager",
  },
  {
    quote:
      "Excellent legal counsel! Their team provided swift, knowledgeable, and empathetic support throughout my complex case. I highly recommend their expertise.",
    author: "Michael R.",
    title: "Satisfied Client",
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="flex flex-col items-center justify-center bg-white px-4 sm:px-6 lg:px-8 font-serif">
      <div className="w-full max-w-4xl text-center px-4 md:px-8 py-12 rounded-lg">
        {/* Quote Icon */}
        <div className="flex justify-center mb-6">
          <Quote className="w-12 h-12 text-amber-700 opacity-60" />
        </div>

        {/* Testimonial Quote */}
        <p className="text-xl md:text-2xl font-light italic leading-relaxed mb-8 text-gray-700 transition-opacity duration-500">
          {testimonials[currentIndex].quote}
        </p>

        {/* Author and Title */}
        <div className="transition-opacity duration-500">
          <p className="text-base font-semibold text-gray-800 tracking-wide uppercase">
            {testimonials[currentIndex].author}
          </p>
          <p className="text-sm text-gray-500">
            {testimonials[currentIndex].title}
          </p>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-10 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300
                ${
                  currentIndex === index
                    ? "bg-amber-700 opacity-80"
                    : "bg-amber-700 opacity-30 hover:opacity-50"
                }`}
              aria-label={`Go to testimonial ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
