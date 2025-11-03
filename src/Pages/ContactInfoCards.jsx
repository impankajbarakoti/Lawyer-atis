import React from "react";
// Importing specific icons from Lucide React
import { Phone, Mail, MapPin } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us Today",
    detail: "1-800-111-2222",
  },
  {
    icon: Mail,
    title: "Send Message",
    detail: "contact@example.com",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    detail: "40 Park Ave, Brooklyn, New York",
  },
];

const ContactInfoCards = () => {
  return (
    <section className="bg-white  px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {contactInfo.map((item, index) => (
          <div
            key={index}
            className="flex items-start p-6 border border-gray-200 hover:border-amber-700/50 transition duration-300"
          >
            {/* Icon Container (Gold/Amber Circle) */}
            <div className="flex-shrink-0 w-12 h-12 bg-amber-700/80 rounded-full flex items-center justify-center mr-4">
              <item.icon className="w-6 h-6 text-white" strokeWidth={2} />
            </div>

            {/* Text Content */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                {item.title}
              </h3>
              <p className="text-base text-gray-600">{item.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactInfoCards;
