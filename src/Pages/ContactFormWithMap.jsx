import React from "react";
import { Send, MapPin } from "lucide-react";

const ContactFormWithMap = () => {
  const address = "40 Park Ave, Brooklyn, NY 11205, USA";

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted. Implement actual backend logic.");
  };

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Column: Contact Form */}
        <div>
          <p className="text-sm uppercase tracking-wider text-amber-700 font-medium pb-1 mb-4 relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-amber-700/50">
            Contact
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight mb-6">
            Send Us a Message
          </h2>
          <p className="text-gray-600 mb-8 max-w-lg">
            Nullam faucibus sodales mi. Vivamus nisl lorem, vulputate id
            pellentesque non, tristique ac leo.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <input
              type="text"
              placeholder="Name"
              required
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-amber-700 focus:border-amber-700 transition duration-150 placeholder:text-gray-500"
            />

            {/* Email */}
            <input
              type="email"
              placeholder="Email"
              required
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-amber-700 focus:border-amber-700 transition duration-150 placeholder:text-gray-500"
            />

            {/* Phone */}
            <input
              type="tel"
              placeholder="Phone"
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-amber-700 focus:border-amber-700 transition duration-150 placeholder:text-gray-500"
            />

            {/* Message */}
            <textarea
              rows="6"
              placeholder="Briefly tell us about your case"
              required
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-amber-700 focus:border-amber-700 transition duration-150 resize-y placeholder:text-gray-500"
            ></textarea>

            {/* Submit */}
            <button
              type="submit"
              className="flex items-center justify-center px-8 py-3 bg-amber-700/80 text-white font-medium uppercase tracking-wider text-sm rounded-lg
                         shadow-md hover:bg-amber-700 transition duration-300"
            >
              <Send className="w-5 h-5 mr-2" /> Send Message
            </button>
          </form>
        </div>

        {/* Right Column: Responsive Google Map */}
        <div className="relative w-full h-[450px] lg:h-[630px] rounded-lg overflow-hidden shadow-lg">
          {/* Embedded Google Map */}
          <iframe
            title="Google Map"
            src={`https://www.google.com/maps?q=${encodeURIComponent(
              address
            )}&output=embed`}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          {/* Floating Address Card */}
          <div className="absolute top-6 sm:left-3  md:mt-25  bg-white/95 backdrop-blur-md p-4 rounded-lg shadow-md max-w-xs">
            <div className="flex items-start space-x-2">
              <MapPin className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-gray-900">Our Office</p>
                <p className="text-sm text-gray-600 leading-snug">{address}</p>
              </div>
            </div>
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-700 hover:text-amber-900 mt-2 inline-block font-medium text-sm"
            >
              View larger map →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormWithMap;
