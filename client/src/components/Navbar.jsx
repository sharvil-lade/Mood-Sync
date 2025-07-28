import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
// import { logout, reset } from "../features/authSlice"; // Make sure your path is correct
// import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { IoClose } from "react-icons/io5";
import { BsList } from "react-icons/bs";

function Navbar() {
  const user = null;
  // const { user } = useSelector((state) => state.auth);
  // const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onLogout = () => {
    toast.success("Logged out successfully");
    setTimeout(() => {
      // dispatch(logout());
      // dispatch(reset());
      navigate("/");
    }, 2000);
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMobileMenu = () => setIsMenuOpen(false);

  const getNavLinkClass = ({ isActive }) => {
    const commonClasses =
      "py-2 px-3 block font-medium transition-colors duration-300 rounded-md";
    const activeClass = "text-white bg-[#e576f1]";
    const inactiveClass = "text-[#e576f1] hover:bg-purple-300";
    return isActive
      ? `${commonClasses} ${activeClass}`
      : `${commonClasses} ${inactiveClass}`;
  };

  return (
    <nav className="sticky top-0 z-50 bg-purple-200">
      <ToastContainer autoClose={1500} />
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <div
          className="text-[#e576f1] text-2xl font-bold cursor-pointer"
          onClick={() => {
            navigate("/");
            closeMobileMenu();
          }}
        >
          MoodSync
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex lg:items-center lg:gap-4">
          <li>
            <NavLink to="/" className={getNavLinkClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/features" className={getNavLinkClass}>
              Features
            </NavLink>
          </li>
          <li>
            <NavLink to="/testimonials" className={getNavLinkClass}>
              Testimonials
            </NavLink>
          </li>
          {user && (
            <li>
              <button
                onClick={onLogout}
                className="text-white font-medium py-2 px-4 border border-[#e576f1] bg-[#e576f1] rounded hover:bg-purple-600 transition-colors duration-300"
              >
                Logout
              </button>
            </li>
          )}
        </ul>

        {/* Hamburger/Close Icon (Mobile) */}
        <div className="lg:hidden" onClick={toggleMenu}>
          {isMenuOpen ? (
            <IoClose size={30} className="text-red-600 cursor-pointer" />
          ) : (
            <BsList size={30} className="text-[#e576f1] cursor-pointer" />
          )}
        </div>

        {/* Mobile Menu (conditionally rendered) */}
        {isMenuOpen && (
          <ul
            className="
              flex flex-col items-center justify-center gap-6
              absolute top-20 left-0 w-full h-screen-minus-nav 
              bg-purple-200 text-center text-xl
              lg:hidden
            "
            style={{ height: "calc(100vh - 80px)" }}
          >
            <li>
              <NavLink
                to="/"
                className={getNavLinkClass}
                onClick={closeMobileMenu}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/features"
                className={getNavLinkClass}
                onClick={closeMobileMenu}
              >
                Features
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/testimonials"
                className={getNavLinkClass}
                onClick={closeMobileMenu}
              >
                Testimonials
              </NavLink>
            </li>
            {user && (
              <li className="mt-4">
                <button
                  onClick={() => {
                    onLogout();
                    closeMobileMenu();
                  }}
                  className="text-white font-medium py-2 px-6 border border-[#e576f1] bg-[#e576f1] rounded hover:bg-purple-600 transition-colors duration-300"
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
