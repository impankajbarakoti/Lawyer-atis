import React from "react";
// Importing specific icons from Lucide React
import { Phone, Mail, Facebook, Twitter, Linkedin } from "lucide-react";

const TeamMemberProfile = () => {
  return (
    <section className="bg-white py-1 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Left Column: Profile Image */}
        <div className="relative w-full h-auto aspect-[4/5] lg:h-[600px] overflow-hidden rounded-lg shadow-xl">
          <img
            src="https://matchthemes.com/demowp/atis/wp-content/uploads/about-me.jpg" // Replace with Sarah Barrett's actual image
            alt="Sarah Barrett"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Column: Profile Details */}
        <div className="lg:pt-8">
          {/* Title/Role */}
          <p className="text-sm uppercase tracking-widest text-amber-700 font-medium mb-3">
            Founder & CEO
          </p>

          {/* Name */}
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight mb-6">
            Sarah Barrett
          </h2>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 mb-8">
            <div className="flex items-center text-gray-700">
              <Phone className="w-5 h-5 text-amber-700 mr-2 flex-shrink-0" />
              <span>1-800-111-2222</span>
            </div>
            <div className="flex items-center text-gray-700">
              <Mail className="w-5 h-5 text-amber-700 mr-2 flex-shrink-0" />
              <span>contact@example.com</span>
            </div>
          </div>

          {/* Biography/Description Paragraph 1 */}
          <p className="text-gray-700 leading-relaxed text-base mb-6">
            Lorem ipsum dolor sit amet, ut eius periculis eos, eu mea suscipit
            intellegam. Tota consequuntur cu pro, congue efficiantur eos id. Ius
            in percipit recusabo. Has ex agam audire, id dicat dolores. Vero
            dicunt ius id, ut assum animal legendos pro, erant aliquam verterem
            sed no. Facete civibus eam ut, mel quot mnesarchum cu.
          </p>

          {/* Biography/Description Paragraph 2 */}
          <p className="text-gray-700 leading-relaxed text-base mb-10">
            Aegue exerci intellegat mea ne, congue ornatus ius ex. Ius laudem
            tacimates ea. Ad vix agam disputando deterruisset amet, ut eius
            periculis eos, eu mea suscipit intellegam.
          </p>

          {/* Social Links */}
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-600 hover:text-amber-700 transition duration-300"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-amber-700 transition duration-300"
              aria-label="Twitter"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-amber-700 transition duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamMemberProfile;
