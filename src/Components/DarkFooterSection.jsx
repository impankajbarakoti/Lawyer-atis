import React, { useState, useEffect } from "react";
import { MapPin, Phone, ArrowUp } from "lucide-react";

// Placeholder data for Latest News
const latestNews = [
  {
    date: "January 16, 2025",
    title: "What to Ask a Personal Injury Lawyer",
    image: "https://matchthemes.com/demowp/atis/wp-content/uploads/blog-1.jpg",
    link: "/",
  },
  {
    date: "January 15, 2025",
    title: "Expert Legal Tips for Real Estate",
    image:
      "https://matchthemes.com/demowp/atis/wp-content/uploads/blog-5-700x292.jpg",
    link: "/",
  },
];

const DarkFooterSection = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Show button after scrolling down 300px
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="bg-gray-900 text-gray-300 font-sans">
        {/* Top Section: Four Columns */}
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* 1. About Us */}
            <div>
              <h3 className="text-xl font-serif text-white mb-6">About Us</h3>
              <p className="text-sm leading-relaxed mb-4">
                We are extremely proud nemo enim ipsam voluptatem quia voluptas
                sit aspernatur aut odit t: porro veritus vis.
              </p>
              <div className="flex items-start text-sm mb-2">
                <MapPin className="w-4 h-4 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>40 Park Ave, Brooklyn, New York</span>
              </div>
              <div className="flex items-start text-sm">
                <Phone className="w-4 h-4 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>1-800-111-2222</span>
              </div>
            </div>

            {/* 2. Quick Links */}
            <div>
              <h3 className="text-xl font-serif text-white mb-6">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {[
                  { label: "Home", href: "/" },
                  { label: "About", href: "/about" },
                  { label: "Contact", href: "/contact" },
                  { label: "Blog", href: "/blogs" },
                ].map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-sm hover:text-amber-500 transition duration-300"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* 3. Services */}
            <div>
              <h3 className="text-xl font-serif text-white mb-6">Services</h3>
              <ul className="space-y-2">
                {[
                  { label: "Our Blogs", href: "/blogs" },
                  { label: "Blog Details", href: "/blog/1" },
                  { label: "Finance Law", href: "#" },
                  { label: "Real Estate", href: "#" },
                  { label: "Tax Disputes", href: "#" },
                ].map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-sm hover:text-amber-500 transition duration-300"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* 4. Latest News */}
            <div>
              <h3 className="text-xl font-serif text-white mb-6">
                Latest News
              </h3>
              <div className="space-y-4">
                {latestNews.map((news, index) => (
                  <a
                    key={index}
                    href={news.link}
                    className="flex items-start group"
                  >
                    <img
                      src={news.image}
                      alt={news.title}
                      className="w-20 h-16 object-cover flex-shrink-0 mr-4 rounded transition-opacity duration-300 group-hover:opacity-80"
                    />
                    <div>
                      <p className="text-xs text-gray-500 mb-1">{news.date}</p>
                      <p className="text-sm text-white group-hover:text-amber-500 transition duration-300 leading-snug">
                        {news.title}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Rule */}
        <hr className="border-t border-gray-800" />

        {/* Bottom Copyright */}
        <div className="max-w-7xl mx-auto py-5 px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-500">
          <p>2025 © Atis. Designed by MatchThemes</p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-amber-700 text-white flex items-center justify-center shadow-lg hover:bg-amber-800 transition duration-300 z-50"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </>
  );
};

export default DarkFooterSection;
