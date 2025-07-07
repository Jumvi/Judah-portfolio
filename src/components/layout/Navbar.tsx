import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="border-b border-gray-100 bg-white fixed w-full top-0 z-10">
      <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-black">
          JM
        </Link>

        {/* Mobile menu button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={1.5} 
            stroke="currentColor" 
            className="w-6 h-6"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            )}
          </svg>
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex gap-8">
          <Link 
            to="/" 
            className={`${isActive('/') ? 'font-medium border-b-2 border-black' : 'text-gray-600 hover:text-black transition-colors'}`}
          >
            Home
          </Link>
          <Link 
            to="/cv" 
            className={`${isActive('/cv') ? 'font-medium border-b-2 border-black' : 'text-gray-600 hover:text-black transition-colors'}`}
          >
            CV
          </Link>
          <Link 
            to="/contact" 
            className={`${isActive('/contact') ? 'font-medium border-b-2 border-black' : 'text-gray-600 hover:text-black transition-colors'}`}
          >
            Contact
          </Link>
        </nav>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white p-4 border-t border-gray-100">
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className={`${isActive('/') ? 'font-medium' : 'text-gray-600'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/cv" 
              className={`${isActive('/cv') ? 'font-medium' : 'text-gray-600'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              CV
            </Link>
            <Link 
              to="/contact" 
              className={`${isActive('/contact') ? 'font-medium' : 'text-gray-600'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;