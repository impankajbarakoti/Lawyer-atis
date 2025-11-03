import React from "react";

const practiceAreas = [
  {
    image:
      "https://matchthemes.com/demowp/atis/wp-content/uploads/auto-accidents-700x700.jpg", // Traffic Accidents
    category: "Traffic Law",
    title: "Auto Accidents",
    description:
      "Meli eu unum utinam, choro dissentiet accommodare te est, no probo facete commodo vim. Solet ridens ne sea.",
  },
  {
    image:
      "https://matchthemes.com/demowp/atis/wp-content/uploads/finance-law-img-700x700.jpg", // Finance Law
    category: "Transactions",
    title: "Finance Law",
    description:
      "Meli eu unum utinam, choro dissentiet accommodare te est, no probo facete commodo vim. Solet ridens ne sea.",
  },
  {
    image:
      "https://matchthemes.com/demowp/atis/wp-content/uploads/real-estate-img-700x700.jpg", // Real Estate
    category: "Business",
    title: "Real Estate",
    description:
      "Meli eu unum utinam, choro dissentiet accommodare te est, no probo facete commodo vim. Solet ridens ne sea.",
  },
  {
    image:
      "https://matchthemes.com/demowp/atis/wp-content/uploads/tax-disputes-img-700x700.jpg", // Tax Disputes
    category: "Business",
    title: "Tax Disputes",
    description:
      "Meli eu unum utinam, choro dissentiet accommodare te est, no probo facete commodo vim. Solet ridens ne sea.",
  },
  {
    image:
      "https://matchthemes.com/demowp/atis/wp-content/uploads/family-law-img-700x700.jpg", // Family Law
    category: "Legal",
    title: "Family Law",
    description:
      "Meli eu unum utinam, choro dissentiet accommodare te est, no probo facete commodo vim. Solet ridens ne sea.",
  },
  {
    image:
      "https://matchthemes.com/demowp/atis/wp-content/uploads/insurance-img-700x700.jpg", // Insurance
    category: "Business",
    title: "Insurance",
    description:
      "Meli eu unum utinam, choro dissentiet accommodare te est, no probo facete commodo vim. Solet ridens ne sea.",
  },
];

const PracticeAreasSection = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header and Subtext */}
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-1">
            Legal Help
          </p>
          <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-4">
            Practice Areas
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Nullam faucibus sodales mi. Vivamus nisl lorem, vulputate id
            pellentesque non, tristique ac leo. Fabulos docendi iracundia eu
            cum, viris putant dissentias ex cum. Id vim tale mutat, eu velit
            oporteat pri. Molita vidisse saperet.
          </p>
        </div>

        {/* Practice Area Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {practiceAreas.map((area, index) => (
            <div key={index} className="flex flex-col">
              {/* Image */}
              <div className="w-full h-56 overflow-hidden mb-4 rounded-md shadow-md">
                <img
                  src={area.image}
                  alt={area.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500 ease-in-out"
                />
              </div>

              {/* Category */}
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">
                {area.category}
              </p>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {area.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-sm mb-4 flex-grow">
                {area.description}
              </p>

              {/* View More Button */}
              <a
                href="#" // Replace with actual link
                className="inline-block px-4 py-2 bg-amber-700/80 text-white font-medium text-sm 
                           shadow-sm hover:bg-amber-700 transition duration-300 w-fit"
              >
                View More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreasSection;
