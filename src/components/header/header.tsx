'use client';
import { useState } from 'react';
import Image from 'next/image';
import mobileLogo from '@/public/logo/luxstay-logo-colored.svg';
import desktopLogo from '@/public/logo/text-logo-symbol-coloured.svg';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

type NavLinkProps = {
  href: string;
  label: string;
};

type NavIconProps = {
  isOpen: boolean;
};

const NavLink: React.FC<NavLinkProps> = ({ href, label }) => (
  <Link href={href} className="text-faded-grey hover:text-black font-medium">
    {label}
  </Link>
);

const NavIcon: React.FC<NavIconProps> = ({ isOpen }) =>
  isOpen ? (
    <svg
      width="45"
      height="46"
      viewBox="0 0 45 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_b_199_21902)">
        <line
          x1="15.3982"
          y1="29.1083"
          x2="28.8758"
          y2="15.6306"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <line
          x1="16.4589"
          y1="15.6309"
          x2="29.9365"
          y2="29.1085"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </g>
    </svg>
  ) : (
    <svg
      width="45"
      height="46"
      viewBox="0 0 45 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_b_199_21902)">
        <line
          x1="13.0518"
          y1="16.4907"
          x2="32.112"
          y2="16.4907"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <line
          x1="13.0518"
          y1="22.1885"
          x2="32.112"
          y2="22.1885"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <line
          x1="13.0518"
          y1="27.8857"
          x2="32.112"
          y2="27.8857"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/accommodation', label: 'Our Accommodation' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact Us' },
  ];

  return (
    <>
      {/* <div className="fixed top-0 left-0 right-0 h-2 bg-red-500 sm:bg-green-500 md:bg-blue-500 lg:bg-yellow-500 xl:bg-purple-500"></div> */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            id="logo-and-hamburger-container"
            className="flex justify-between items-center h-24"
          >
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/">
                <Image
                  src={mobileLogo}
                  className="h-12 w-12 lg:hidden"
                  alt="Mobile Logo"
                />
                <Image
                  src={desktopLogo}
                  className="hidden lg:block h-48 w-48"
                  alt="Desktop Logo"
                />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              {navLinks.map((link) => (
                <NavLink key={link.href} href={link.href} label={link.label} />
              ))}
              <span className="text-gray-400">|</span>
              <Button
                className="bg-gold-accent-color text-white ml-4 px-4 py-2 hover:bg-opacity-90 hover:bg-electric-green-500"
                variant="outline"
              >
                <Link href="/book"></Link>
                Book Now
              </Button>
            </div>

            {/* Hamburger Menu Button */}
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={toggleMenu}
                className="p-2 rounded-md text-gray-800 hover:text-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
              >
                <NavIcon isOpen={isOpen} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 text-faded-grey hover:text-black rounded-md text-base font-medium hover:bg-gray-100"
                >
                  {link.label}
                </Link>
              ))}
              <Button
                className="bg-gold-accent-color my-2 text-white hover:bg-electric-green-500 hover:bg-opacity-90 w-full"
                variant="outline"
              >
                <Link href="/book">Book Now</Link>
              </Button>
            </div>
          </div>
        )}
        <div className="absolute left-0 right-0 bg-gold-accent-color h-1"></div>
      </nav>
    </>
  );
};

export default Navbar;
