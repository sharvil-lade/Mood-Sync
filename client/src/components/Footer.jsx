import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-purple-200 text-black py-8">
      <div className="container mx-auto px-4">
        {/* Top Section: Logo and Social Icons */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Logo or App Name */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-[#e576f1]">MoodSync</h2>
            <p className="text-sm ">Your partner in mental wellness</p>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-4">
            <a
              href="https://facebook.com"
              className="hover:text-teal-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="https://twitter.com"
              className="hover:text-black"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter size={20} />
            </a>
            <a
              href="https://instagram.com"
              className="hover:text-pink-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://linkedin.com"
              className="hover:text-sky-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>

        {/* Middle Section: Navigation Links */}
        <div className="flex justify-center my-6">
          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
            <Link to="/" className="hover:underline hover:text-[#e576f1]">
              Home
            </Link>
            <Link
              to="/features"
              className="hover:underline hover:text-[#e576f1]"
            >
              Features
            </Link>
            {/* Added a 'to' prop for consistency */}
            <Link
              to="/benefits"
              className="hover:underline hover:text-[#e576f1]"
            >
              Benefits
            </Link>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="text-center text-sm border-t border-teal-200 dark:border-gray-700 pt-4">
          © {new Date().getFullYear()} Sharvil Lade. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;