import HeroBanner from '@/components/hero-banner';
import { Metadata } from 'next';
import banner from '@/public/images/contact-image-hero.jpeg';
import { ContactFormComponent } from '@/components/contact-form/contact-form';

export const metadata: Metadata = {
  title:
    'Contact Luxstay Ventures | Get in Touch for Premium Short-Stay Rentals',
  description:
    'Reach out to Luxstay Ventures for inquiries about our luxury short-stay rentals. We’re here to assist you with personalized service and information about our exclusive accommodations.',
};

export default function ContactPage() {
  return (
    <div
      id="page-container"
      className="md:flex
       md:py-12 md:pb-18 justify-center items-center content-center md:gap-12 flex-wrap"
    >
      <HeroBanner text="Contact Us" imageUrl={banner.src} />
      <div className="text-center mt-8 flex flex-col"></div>
      <ContactFormComponent />

      {/* Add your contact form and other components here */}
    </div>
  );
}
