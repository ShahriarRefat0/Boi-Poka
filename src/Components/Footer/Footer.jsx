import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#3B2F2F] text-[#F8F7F3] py-10 px-6 mt-15">
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Logo Section */}
        <div>
          <h2
            className="text-3xl font-bold mb-3"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#D2B48C",
            }}
          >
            Boi<span style={{ color: "#F8F7F3" }}>-Poka</span>
          </h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            Your cozy corner for book lovers. Explore stories, share thoughts,
            and connect with readers around the world.
          </p>
        </div>

        {/* Services */}
        <nav>
          <h6 className="text-lg font-semibold mb-3 text-[#D2B48C]">
            Services
          </h6>
          <a className="block text-gray-300 hover:text-white mb-1 cursor-pointer">
            Book Reviews
          </a>
          <a className="block text-gray-300 hover:text-white mb-1 cursor-pointer">
            Recommendations
          </a>
          <a className="block text-gray-300 hover:text-white mb-1 cursor-pointer">
            Reading Clubs
          </a>
          <a className="block text-gray-300 hover:text-white cursor-pointer">
            Literary Events
          </a>
        </nav>

        {/* Company */}
        <nav>
          <h6 className="text-lg font-semibold mb-3 text-[#D2B48C]">Company</h6>
          <a className="block text-gray-300 hover:text-white mb-1 cursor-pointer">
            About Us
          </a>
          <a className="block text-gray-300 hover:text-white mb-1 cursor-pointer">
            Contact
          </a>
          <a className="block text-gray-300 hover:text-white mb-1 cursor-pointer">
            Our Team
          </a>
          <a className="block text-gray-300 hover:text-white cursor-pointer">
            Careers
          </a>
        </nav>

        {/* Legal */}
        <nav>
          <h6 className="text-lg font-semibold mb-3 text-[#D2B48C]">Legal</h6>
          <a className="block text-gray-300 hover:text-white mb-1 cursor-pointer">
            Terms of Use
          </a>
          <a className="block text-gray-300 hover:text-white mb-1 cursor-pointer">
            Privacy Policy
          </a>
          <a className="block text-gray-300 hover:text-white cursor-pointer">
            Cookie Policy
          </a>
        </nav>
      </div>

      {/* Bottom */}
      <div className="mt-10 border-t border-[#D2B48C]/30 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold text-[#D2B48C]">Boi-Poka</span>. All
        Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
