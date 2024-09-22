import Image from 'next/image';
import Link from 'next/link';
import logo from '/public/logo/png_full-logo-coloured-and-white.png';
import backdrop from '/public/logo/luxstay-logo-colored.svg';
import FacebookIcon from '/public/logo/facebook-logo.svg';
import InstagramIcon from '/public/logo/instagram-logo.svg';
import LinkedInIcon from '/public/logo/linkedin-logo.svg';
import IcoLogo from '/public/logo/Ico-logo.png';
import PrsLogo from '/public/logo/prs-logo.png';
import NewsletterForm from '../contact-form/newsletter-form';

export default function Footer() {
  return (
    <footer className="bg-[#000929] text-light-grey py-8 px-4 flex flex-col items-center md:px-6 lg:px-8 relative overflow-hidden">
      {/* Backdrop */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <Image
          src={backdrop}
          alt="Luxstay Backdrop"
          className="w-full h-full object-contain object-center"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:justify-between md:space-x-8">
          {/* Left: Logo and Description */}
          <div className="mb-8 md:mb-0 md:w-1/2 lg:w-1/3 flex flex-col items-start">
            <Image
              src={logo}
              alt="Luxstay Ventures Logo"
              width={150}
              height={80}
              className="mb-4"
            />
            <p className="text-lg mb-6 text-start font-normal">
              Everything we do, we believe will enhance your living experience.
              We believe you should have the comfort of your home wherever you
              go. The way we do this is by replicating a modern home in all our
              apartments - new, clean, and fully furnished with everything you
              could possibly need. Come live with us!
            </p>
            <Link href="/about" className="text-[#C4A052] hover:underline">
              More about us
            </Link>
          </div>

          {/* Right: Contact Info, Location and Subscription Form */}
          <div className="md:w-1/2 lg:w-2/3 text-start flex flex-col gap-6">
            <div className="text-left md:text-right">
              <h3 className="text-xl font-semibold text-white">Contact Us</h3>
              <p className="text-sm uppercase mb-2">Customer care</p>
              <Link
                href="mailto:info@luxstayventures.com"
                className="text-sm uppercase mb-4 hover:underline"
              >
                Email us
              </Link>
            </div>

            <div className="text-left md:text-right">
              <h3 className="text-xl font-semibold text-white">Location</h3>
              <p className="text-sm">LUXSTAY VENTURES LTD</p>
              <p className="text-sm">483 Green Lanes, London, N13 4BS</p>
            </div>

            {/* Newsletter Subscription Form */}
            <div className="w-full lg:w-3/4 md:ml-auto">
              <h3 className="text-lg font-semibold text-white">
                Subscribe for our newsletters
              </h3>
              <NewsletterForm />
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="mt-8 flex justify-center md:justify-between items-center w-full">
          <div className="flex space-x-4">
            <Link
              href="https://www.linkedin.com/company/luxstayventures/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C4A052] transition-colors"
            >
              <Image
                src={LinkedInIcon}
                alt="LinkedIn Icon"
                className="text-white h-8 w-7"
              />
            </Link>
            <Link
              href="https://www.instagram.com/luxstayventures"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C4A052] transition-colors"
            >
              <Image
                src={InstagramIcon}
                alt="Instagram Icon"
                className="text-white h-8 w-8"
              />
            </Link>
            <Link
              href="https://www.facebook.com/people/Luxstay-Ventures/61565412656959/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C4A052] transition-colors"
            >
              <Image
                src={FacebookIcon}
                alt="Facebook Icon"
                className="text-white h-8 w-8"
              />
            </Link>
          </div>
        </div>

        {/* Legal Section */}
        <div className="border-t border-gray-700 pt-6 mt-6 flex flex-col items-center">
          <p className="text-lg text-white mb-4">COMPLIANCE AND LEGAL</p>
          <div className="flex items-center justify-center gap-4 mb-4">
            <Image src={IcoLogo} alt="ICO Logo" width={60} height={30} />
            <Image src={PrsLogo} alt="PRS Logo" width={100} height={30} />
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center w-full">
            <div className="flex space-x-4">
              <Link
                href="/terms-and-conditions"
                className="text-sm hover:underline"
              >
                Terms & conditions
              </Link>
              <span className="text-gray-400">|</span>
              <Link href="/privacy-notice" className="text-sm hover:underline">
                Privacy Policy
              </Link>
            </div>
            <p className="text-sm text-bright-gold mt-4 sm:mt-0">
              &copy; 2024 Luxstay Ventures All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
