import React from "react";
// Importing specific icons from Lucide React
import { Zap, Lightbulb, Smile, Heart } from "lucide-react";

const features = [
  {
    icon: Zap, // Lucide icon component
    title: "Fast Help & Advice",
    description:
      "Appetere inciderint eloquentiam ne sed. In veri illud erroribus vel, vel ad graeci theophrastus, libris timeam.",
  },
  {
    icon: Lightbulb, // Lucide icon component
    title: "Custom Case Solutions",
    description:
      "Appetere inciderint eloquentiam ne sed. In veri illud erroribus vel, vel ad graeci theophrastus, libris timeam.",
  },
  {
    icon: Smile, // Lucide icon component
    title: "Happy Clients",
    description:
      "Appetere inciderint eloquentiam ne sed. In veri illud erroribus vel, vel ad graeci theophrastus, libris timeam.",
  },
  {
    icon: Heart, // Lucide icon component
    title: "Personal Attention",
    description:
      "Appetere inciderint eloquentiam ne sed. In veri illud erroribus vel, vel ad graeci theophrastus, libris timeam.",
  },
];

const AboutAtisSection = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Left Column: Team Image */}
        <div className="relative h-auto  md:mt-40 lg:aspect-auto  overflow-hidden rounded-lg shadow-xl">
          <img
            src="https://matchthemes.com/demowp/atis/wp-content/uploads/about-us2-700x350.jpg" // Replace with your image_db3ba6.jpg
            alt="Atis Team"
            className="w-auto h-auto object-contain"
          />
        </div>

        {/* Right Column: Text and Features */}
        <div className="lg:pt-8">
          {/* Header */}
          <p className="text-sm uppercase tracking-widest text-amber-700 mb-2 font-medium">
            Since 1985
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight mb-8">
            We are Atis
          </h2>

          {/* Main Text Block */}
          <p className="text-gray-700 leading-relaxed text-base mb-10">
            Harum saperet, ius paulo noluisse dignissim eu. Inimicus scripserit
            accommodare has ei, cum ut aliquam delicata.
            <strong className="font-semibold">
              {" "}
              Ipsum elit ad ius, salutatus tincidunt signiferumque in has, an
              mea vocent delicata.
            </strong>{" "}
            Eos enim dictas invenire ex. Amet elus cu vim, admodum mandamus
            imperdiet.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                {/* Icon Container */}
                <div className="flex-shrink-0 mt-1">
                  <feature.icon
                    className="w-6 h-6 text-amber-700"
                    strokeWidth={1.5}
                  />
                </div>

                {/* Feature Content */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAtisSection;
