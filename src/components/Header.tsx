import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sprout } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Dashboard', path: '/' },
    { name: 'Predictions', path: '/predictions' },
    { name: 'Historical Data', path: '/historical-data' },
    { name: 'About', path: '/about' },
  ];

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Sprout className="h-8 w-8 text-green-600" />
            <span className="text-xl font-bold text-green-800">PalayPredict</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-medium transition-colors duration-300 ${
                  location.pathname === link.path
                    ? 'text-green-600 border-b-2 border-green-600'
                    : 'text-gray-700 hover:text-green-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 animate-fade-in">
            <nav className="flex flex-col space-y-4 bg-white py-4 rounded-lg shadow-lg">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-4 py-2 font-medium transition-colors duration-300 ${
                    location.pathname === link.path
                      ? 'text-green-600 bg-green-50'
                      : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;