import React from "react";
// Importing specific icons from Lucide React
import {
  Headset,
  FileText,
  Handshake,
  Lightbulb,
  HeartHandshake,
  MonitorCheck,
} from "lucide-react";

const features = [
  {
    icon: Headset, // Always listen
    title: "Always listen",
    description:
      "Sed ut nisl urna, eget convallis purus pretium facilisis. Interdum et malesuada.",
  },
  {
    icon: FileText, // Confidentiality
    title: "Confidentiality",
    description:
      "Sed ut nisl urna, eget convallis purus pretium facilisis. Interdum et malesuada.",
  },
  {
    icon: Handshake, // Right approach
    title: "Right approach",
    description:
      "Sed ut nisl urna, eget convallis purus pretium facilisis. Interdum et malesuada.",
  },
  {
    icon: Lightbulb, // Right person
    title: "Right person",
    description:
      "Sed ut nisl urna, eget convallis purus pretium facilisis. Interdum et malesuada.",
  },
  {
    icon: HeartHandshake, // Respect & Care
    title: "Respect & Care",
    description:
      "Sed ut nisl urna, eget convallis purus pretium facilisis. Interdum et malesuada.",
  },
  {
    icon: MonitorCheck, // Expertly guide
    title: "Expertly guide",
    description:
      "Sed ut nisl urna, eget convallis purus pretium facilisis. Interdum et malesuada.",
  },
];

const FeatureGridSection = () => {
  return (
    <section className="bg-amber-50 py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-4">
              {/* Icon Container */}
              <div className="flex-shrink-0 mt-1">
                {/* Use the Lucide component, styled with an amber/gold color */}
                <feature.icon
                  className="w-8 h-8 text-amber-700 opacity-80"
                  strokeWidth={1.5}
                />
              </div>

              {/* Feature Content */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGridSection;
