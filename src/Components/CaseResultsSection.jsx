import React from "react";

const caseResults = [
  {
    image: "https://matchthemes.com/demowp/atis/wp-content/uploads/case-2.jpg",
    overlayTitle: "Client Meeting",
    overlaySubtitle: "Successful Consultation",
    link: "/",
  },
  {
    image: "https://matchthemes.com/demowp/atis/wp-content/uploads/case-1.jpg",
    overlayTitle: "Signing Document",
    overlaySubtitle: "Contract Signed",
    link: "/",
  },
  {
    image: "https://matchthemes.com/demowp/atis/wp-content/uploads/case-4.jpg",
    overlayTitle: "Modern Building",
    overlaySubtitle: "Commercial Project",
    link: "/",
  },
  {
    image: "https://matchthemes.com/demowp/atis/wp-content/uploads/case-5.jpg",
    overlayTitle: "Truck Driving",
    overlaySubtitle: "Logistics Success",
    link: "/",
  },
  {
    image: "https://matchthemes.com/demowp/atis/wp-content/uploads/case-6.jpg",
    overlayTitle: "Family Law",
    overlaySubtitle: "Won $25k",
    link: "/",
  },
  {
    image: "https://matchthemes.com/demowp/atis/wp-content/uploads/case-7.jpg",
    overlayTitle: "Financial Planning",
    overlaySubtitle: "Smart Investment",
    link: "/",
  },
];

const CaseResultsSection = () => {
  return (
    <section className="bg-amber-50 py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header and Subtext */}
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-1">
            Portfolio
          </p>
          <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-4">
            Case Results
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Nullam faucibus sodales mi. Vivamus nisl lorem, vulputate id
            pellentesque non, tristique ac leo. Fabulos docendi iracundia eu
            cum, viris putant dissentias ex cum. Id vim tale mutat, eu velit
            oporteat pri. Molita vidisse saperet.
          </p>
        </div>

        {/* Case Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseResults.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="block relative w-full aspect-video overflow-hidden rounded-md shadow-lg group"
            >
              <img
                src={item.image}
                alt={item.overlayTitle || `Case Result ${index + 1}`}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />

              {/* Hover Overlay for all items */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-xs uppercase tracking-widest mb-1 opacity-80">
                  {item.overlaySubtitle || "Case Study"}
                </p>
                <h3 className="text-xl font-semibold">
                  {item.overlayTitle || `Project ${index + 1}`}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseResultsSection;
