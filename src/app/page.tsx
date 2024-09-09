import { Metadata } from 'next';
import Navbar from '@/components/header/header';

export const metadata: Metadata = {
  title: 'Luxstay Ventures | Homepage',
  description:
    'Luxstay Ventures offers exceptional short-stay rentals designed for luxury, comfort, and convenience. Explore our premium accommodations tailored for both business and leisure travelers.',
};

export default function Home() {
  return (
    <>
      {/* <div className="fixed top-0 left-0 right-0 h-2 bg-red-500 sm:bg-green-500 md:bg-blue-500 lg:bg-yellow-500 xl:bg-purple-500"></div> */}
      <div>
        <Navbar />
        <main>
          <h1>Welcome to our website!</h1>
          <p>This is some sample text to test your code.</p>
        </main>
      </div>
    </>
  );
}
