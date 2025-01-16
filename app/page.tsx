import { ResponsiveCustomCarousel } from '@/components/custom-carousel/responsive-custom-carousel';
import ServiceBadge from '@/components/custom-servicebadge/service-badge';
import { FeaturedOn } from '@/components/featured-on/featured-on';
import { FeatureSection } from '@/components/features/feature-section';
import PropertyLocations from '@/components/property-locations';
import { ResponsiveStayCard } from '@/components/responsive-stay-card/responsive-stay-card';
import WhatWeOffer from '@/components/what-we-offer/what-we-offer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Luxstay Ventures | Homepage',
  description:
    'Luxstay Ventures offers exceptional short-stay rentals designed for luxury, comfort, and convenience. Explore our premium accommodations tailored for both business and leisure travelers. We manage properties in Watford and Brighton.',
};

export default function Home() {
  return (
    <>
      {/* <div className="fixed top-0 left-0 right-0 h-2 bg-red-500 sm:bg-green-500 md:bg-blue-500 lg:bg-yellow-500 xl:bg-purple-500"></div> */}
      <div>
        <div className="min-h-screen ">
          <ResponsiveCustomCarousel />
          <div className="text-center mt-8 ">
            <ServiceBadge text="Where to find us?" />
          </div>
          <FeaturedOn />
          <PropertyLocations />
          <FeatureSection />
          <WhatWeOffer />
          <ResponsiveStayCard />
        </div>
      </div>
    </>
  );
}
