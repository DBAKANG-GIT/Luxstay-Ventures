import HeroBanner from '@/components/hero-banner';
import { Metadata } from 'next';
import banner from '/public/images/staybackdrop.jpeg';
import { ServicedPropertyComponent } from '@/components/serviced-property-info/serviced-property';
import { ResponsiveStayCard } from '@/components/responsive-stay-card/responsive-stay-card';

export const metadata: Metadata = {
  title: 'About Luxstay Ventures | Leading Serviced Accommodation Experts',
  description:
    'Learn about Luxstay Ventures, your premier choice for luxury short-stay rentals. Discover our commitment to providing top-notch accommodations that blend comfort and convenience for travelers.',
};

export default function AboutPage() {
  return (
    <div>
      <HeroBanner text="We are Luxstay ventures" imageUrl={banner.src} />
      <ServicedPropertyComponent />
      <ResponsiveStayCard />
    </div>
  );
}
