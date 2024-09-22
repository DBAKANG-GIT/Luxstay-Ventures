import HeroBanner from '@/components/hero-banner';
import { Metadata } from 'next';
import banner from '/public/images/contact-image-hero.jpeg';
import ContactFormComponent from '@/components/contact-form/contact-form';

export const metadata: Metadata = {
  title:
    'Contact Luxstay Ventures | Get in Touch for Premium Short-Stay Rentals',
  description:
    'Reach out to Luxstay Ventures for inquiries about our luxury short-stay rentals. We’re here to assist you with personalized service and information about our exclusive accommodations.',
};

export default function ContactPage() {
  return (
    <div id="page-container" className="">
      <HeroBanner text="Contact Us" imageUrl={banner.src} />
      <div className="text-center mt-8 flex flex-col"></div>
      <ContactFormComponent />
    </div>
  );
}
