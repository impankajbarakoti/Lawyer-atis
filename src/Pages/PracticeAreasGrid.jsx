import React from "react";
// Importing specific icons from Lucide React
import { Car, Scale, Building2, Landmark, Users, Umbrella } from "lucide-react";

// Data structure for the 6 practice areas
const areas = [
  {
    icon: Car,
    tag: "Traffic Law",
    title: "Auto Accidents",
    description:
      "Mei eu unum utinam, choro dissentiet accommodare te est, no probo facete commodo vim. Solet ridens ne sea.",
  },
  {
    icon: Scale,
    tag: "Transactions",
    title: "Finance Law",
    description:
      "Mei eu unum utinam, choro dissentiet accommodare te est, no probo facete commodo vim. Solet ridens ne sea.",
  },
  {
    icon: Building2,
    tag: "Business",
    title: "Real Estate",
    description:
      "Mei eu unum utinam, choro dissentiet accommodare te est, no probo facete commodo vim. Solet ridens ne sea.",
  },
  {
    icon: Landmark,
    tag: "Business",
    title: "Tax Disputes",
    description:
      "Mei eu unum utinam, choro dissentiet accommodare te est, no probo facete commodo vim. Solet ridens ne sea.",
  },
  {
    icon: Users,
    tag: "Legal",
    title: "Family Law",
    description:
      "Mei eu unum utinam, choro dissentiet accommodare te est, no probo facete commodo vim. Solet ridens ne sea.",
  },
  {
    icon: Umbrella,
    tag: "Business",
    title: "Insurance",
    description:
      "Mei eu unum utinam, choro dissentiet accommodare te est, no probo facete commodo vim. Solet ridens ne sea.",
  },
];

const PracticeAreasGrid = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest text-amber-700 font-medium mb-2">
            Legal Services
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
            Practice Areas
          </h2>
        </div>

        {/* 6-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-8">
          {areas.map((area, index) => (
            <div key={index} className="text-left">
              {/* Icon, Tag, and Title */}
              <div className="flex items-center space-x-4 mb-4">
                {/* Icon Container with Amber Color */}
                <area.icon
                  className="w-8 h-8 text-amber-700 flex-shrink-0"
                  strokeWidth={1.5}
                />
                <div>
                  <p className="text-xs uppercase tracking-wider text-amber-700 font-medium">
                    {area.tag}
                  </p>
                  <h3 className="text-xl font-serif text-gray-900 mt-1">
                    {area.title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-base text-gray-700 leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreasGrid;
