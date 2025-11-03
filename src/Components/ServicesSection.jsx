import React from "react";

const services = [
  {
    image: "https://matchthemes.com/demowp/atis/wp-content/uploads/case-2.jpg", // Replace with your image
    title: "Free Consultancy",
    description:
      "Dicit nobis latine qui an, per duis summo impetus an, eam ne perfecto intellegat persequeris.",
  },
  {
    image: "https://matchthemes.com/demowp/atis/wp-content/uploads/case-7.jpg", // Replace with your image
    title: "Strategy Models",
    description:
      "Dicit nobis latine qui an, per duis summo impetus an, eam ne perfecto intellegat persequeris.",
  },
  {
    image: "https://matchthemes.com/demowp/atis/wp-content/uploads/case-1.jpg", // Replace with your image
    title: "Case Solutions",
    description:
      "Dicit nobis latine qui an, per duis summo impetus an, eam ne perfecto intellegat persequeris.",
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-white md:py-10 px-4 sm:px-6 py-10 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* Service Image */}
              <div className="w-full h-60 md:h-72 overflow-hidden mb-6 rounded-md shadow-md">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500 ease-in-out"
                />
              </div>

              {/* Service Title */}
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3">
                {service.title}
              </h3>

              {/* Service Description */}
              <p className="text-gray-600 leading-relaxed mb-4 max-w-sm">
                {service.description}
              </p>

              {/* Read More Link */}
              <a
                href="#" // Replace with actual link
                className="text-amber-700 hover:text-amber-800 font-medium tracking-wide text-sm uppercase transition duration-300"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
