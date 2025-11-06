import React, { useState } from "react";

// Data for the two primary experts
const experts = [
  {
    name: "Sarah Barrett",
    title: "Founder",
    imageUrl:
      "https://matchthemes.com/demowp/atis/wp-content/uploads/team-1.jpg",
  },
  {
    name: "Mike Holmes",
    title: "Senior Partner",
    imageUrl:
      "https://matchthemes.com/demowp/atis/wp-content/uploads/team-2.jpg",
  },
];

// Data for the FAQ/Accordions
const faqs = [
  {
    question: "Why choose our lawyers firm?",
    answer:
      "Our firm has years of experience and a team of expert attorneys dedicated to providing the best legal guidance tailored to your needs.",
  },
  {
    question: "How does it work?",
    answer:
      "You can schedule a consultation, discuss your case, and our attorneys will provide a step-by-step plan to address your legal matters efficiently.",
  },
  {
    question: "Is the first consultation free?",
    answer:
      "Yes! We offer a complimentary initial consultation to understand your situation and provide guidance on the next steps.",
  },
  {
    question: "How can we help?",
    answer:
      "We provide legal solutions in areas such as corporate law, family law, criminal defense, and more, ensuring our clients receive personalized support.",
  },
];

const MeetTheExpertsSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Top Half: Text and Expert Profiles */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 mb-20 items-start">
          {/* Left Column: Text and Call to Action */}
          <div className="lg:col-span-1 lg:pr-8">
            <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">
              Our Attorneys
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight mb-6">
              Meet the Experts
            </h2>
            <p className="text-gray-700 leading-relaxed text-base mb-6">
              Ut vix option temporibus, ad nec molestie consectetuer, eu animal
              persecuti eum. Ea inani appetere assentior sed, vertutus ancillae
              id qui, ne mel solet exerci primis. Ei iriure vidisse quo, eu
              utamur feugait.
            </p>
            <p className="text-gray-700 leading-relaxed text-base mb-8">
              Molestiae sea vis habemus civibus in, probo illud everti te sea,
              est ut diceret maiestatis. Autem postulant theophrastus quo id,
              probo nostro eloquentiam eum ne, vide sale primis sea ex.
            </p>

            {/* Find More Button */}
            <a
              href="#"
              className="inline-block px-8 py-3 bg-amber-700/80 text-white font-medium uppercase tracking-wider text-sm 
                         shadow-md hover:bg-amber-700 transition duration-300"
            >
              Find More
            </a>
          </div>

          {/* Right Columns: Expert Profiles (2/3 width) */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {experts.map((expert, index) => (
              <div
                key={index}
                className="relative w-full h-[500px] overflow-hidden shadow-xl rounded-md"
              >
                <img
                  src={expert.imageUrl}
                  alt={expert.name}
                  className="w-full h-full object-cover"
                />

                {/* Overlay Text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                  <p className="text-xs uppercase tracking-widest opacity-80 mb-1">
                    {expert.title}
                  </p>
                  <h3 className="text-2xl font-semibold">{expert.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Half: FAQ and General Questions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column: FAQ/Accordion List */}
          <div>
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-300 mb-4 rounded-md overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left px-4 py-4 flex justify-between items-center font-medium text-gray-800 hover:bg-gray-50 transition duration-200"
                >
                  <span>{faq.question}</span>
                  <span className="text-red-600 text-xl">
                    {activeIndex === index ? "−" : "+"}
                  </span>
                </button>
                {activeIndex === index && (
                  <div className="px-4 py-3 text-gray-700 text-sm bg-gray-50">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Column: General Questions Text Block */}
          <div>
            <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">
              FAQ
            </p>
            <h2 className="text-3xl font-serif text-gray-900 leading-tight mb-6">
              General Questions
            </h2>
            <p className="text-gray-700 leading-relaxed text-base mb-4">
              Ut vix option temporibus, ad nec molestie consectetuer, eu animal
              persecuti eum. Ea inani appetere assentior sed, vertutus ancillae
              id qui, ne mel solet exerci primis. Ei iriure vidisse quo, eu
              utamur feugait.
            </p>
            <p className="text-gray-700 leading-relaxed text-base">
              Molestiae sea vis habemus civibus in, probo illud everti te sea,
              est ut diceret maiestatis. Autem postulant theophrastus quo id,
              probo nostro eloquentiam eum ne, vide sale primis sea ex.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetTheExpertsSection;
