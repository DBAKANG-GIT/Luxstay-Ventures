import HeroBanner from '@/components/hero-banner';
import { Metadata } from 'next';
import banner from '@/public/images/staybackdrop.jpeg';
import { ServicedApartmentsInfo } from '@/components/serviced-apartments-info';
import { ServicedApartmentsComponent } from '@/components/serviced-apartments';

export const metadata: Metadata = {
  title: 'About Luxstay Ventures | Leading Serviced Accommodation Experts',
  description:
    'Learn about Luxstay Ventures, your premier choice for luxury short-stay rentals. Discover our commitment to providing top-notch accommodations that blend comfort and convenience for travelers.',
};

export default function AboutPage() {
  const content =
    "Serviced apartments are a great alternative to staying in a hotel. It is ideal for business travelers, groups of friends, families, and couples looking for independence and flexibility. Apart from more space, they give you a great base to enjoy the local life with all the amenities of the neighborhood on your doorstep.\n\nThe serviced part of serviced apartments means that your apartment is fully serviced, in that it's ready to move into and start living! All the utilities are switched on and included in the rate, bedroom and bathroom linen is provided, the kitchen is fully equipped and ready to start cooking, the cushions are plumped, it's sparkling clean and everything is in full working order. During your stay, the housekeeping team will come in once a week and clean all the rooms, change the bedroom and bathroom linen and of course, if there are any maintenance issues during your stay just let us know and we will get them fixed as soon as possible.";

  return (
    <div>
      <HeroBanner text="We are Luxstay ventures" imageUrl={banner.src} />
      <ServicedApartmentsInfo
        title="Why serviced apartments?"
        content={content}
      />
      <ServicedApartmentsComponent />
    </div>
  );
}
