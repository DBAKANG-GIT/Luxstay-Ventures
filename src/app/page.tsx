import { Metadata } from 'next';
import Navbar from '@/components/header/header';

export const metadata: Metadata = {
  title: 'Luxstay Ventures | Homepage',
  description:
    'Luxstay Ventures offers exceptional short-stay rentals designed for luxury, comfort, and convenience. Explore our premium accommodations tailored for both business and leisure travelers.',
};

export default function Home() {
  return <Navbar />;
}
