import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/logo/png_full-logo-coloured-and-white.png';
import backdrop from '@/public/logo/luxstay-logo-colored.svg';
import FacebookIcon from '@/public/logo/facebook-logo.svg';
import InstagramIcon from '@/public/logo/instagram-logo.svg';
import IcoLogo from '@/public/logo/Ico-logo.png';
import PrsLogo from '@/public/logo/prs-logo.png';

export default function Footer() {
  return (
    <footer className="bg-[#000929] text-light-grey py-8 px-4 flex flex-col items-center md:px-6 lg:px-8 relative overflow-hidden  ">
      {/* Backdrop */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <Image
          src={backdrop}
          alt="Luxstay Backdrop"
          layout="fill"
          objectFit="contain"
          objectPosition="center"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:justify-between md:space-x-8">
          <div className="mb-8 md:mb-0 md:w-1/2 lg:w-1/3 flex flex-col items-center md:items-start">
            <Image
              src={logo}
              alt="Luxstay Ventures Logo"
              width={120}
              height={120}
              className="mb-4"
            />

            <p className="text-xl mb-6 text-center font-normal">
              Everything we do, we believe will enhance your living experience.
              We believe you should have the comfort of your home wherever you
              go. The way we do this is by replicating a modern home in all our
              apartments - new, clean and fully furnished with everything you
              could possibly need. Come live with us!
            </p>
          </div>

          <div className="md:w-1/2 lg:w-2/3 text-center flex flex-col p-1 justify-center gap-3">
            <h3 className="text-xl font-semibold text-white">Contact</h3>

            <p className="uppercase text-sm mb-2">Customer care</p>
            <Link
              href={'mailto:info@luxstayventures.com'}
              className="uppercase text-sm mb-4"
            >
              Email us
            </Link>
            {/* This form might need to go */}
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email address"
                className="bg-white text-black px-4 py-2 rounded-md flex-grow"
              />
              <button
                type="submit"
                className="bg-[#C4A052] text-white px-6 py-2 rounded-md hover:bg-[#B38F3F] transition-colors"
              >
                Submit
              </button>
            </form>

            <div className="mb-8 flex p-1 flex-col items-center gap-3 self-stretch">
              <h4 className="text-lg font-semibold mb-2">Follow us on</h4>
              <div className="flex space-x-4">
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
                  href="#"
                  className="hover:text-[#C4A052] transition-colors"
                >
                  <Image
                    src={FacebookIcon}
                    alt="Facebook Icon"
                    className="text-white h-8 w-8"
                  />
                </Link>
                {/* <Link
                  href="#"
                  className="hover:text-[#C4A052] transition-colors"
                >
                  <Image src={LinkedInIcon} alt="LinkedIn Icon" />
                </Link> */}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 mt-6 flex flex-col items-center gap-4 self-stretch">
          <p className="text-lg ">LEGAL & COMPLIANCE</p>
          <div className="flex flex-wrap gap-4 mb-4 flex-col items-center">
            <Image src={IcoLogo} alt="ICO Logo" width={60} height={30} />
            <Image src={PrsLogo} alt="PRS Logo" width={100} height={30} />
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center">
            {/* TODO:Terms and conditions and privacy policy */}
            <div className="flex space-x-4 mb-2 sm:mb-0">
              <Link href="#" className="text-sm hover:underline">
                Terms & conditions
              </Link>
              <span className="text-gray-400">|</span>

              <Link href="#" className="text-sm hover:underline">
                Privacy Policy
              </Link>
            </div>
            <p className="text-sm text-bright-gold">
              &copy; 2024 Luxstay Ventures All right reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
