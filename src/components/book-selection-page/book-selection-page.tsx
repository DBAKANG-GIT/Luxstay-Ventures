// In your BookSelectionPage
'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import WatfordHero from '/public/images/webp/1.webp';
import BrightonHero from '/public/images/brighton-pictures/hero.jpg';
import CustomButton from '../custom-button/custom-button';

const properties = [
  {
    id: 'watford-escape',
    title:
      'Enchanted Watford Escape! Perfect for Harry Potter World & Quick London Access, Free Parking',
    description:
      'Ideal for Families, Contractors & Business Travelers, Free Parking',
    image: WatfordHero,
  },
  {
    id: 'brighton-bliss',
    title:
      'Luxury 4BR Brighton Home Near South Downs with Stunning Sea Views, Pool Table & FREE Parking for 4 Cars',
    description:
      'Peaceful retreat with scenic views ideal for groups of up to 12',
    image: BrightonHero,
  },
];

const BookSelectionPage: React.FC = () => {
  const router = useRouter();
  const [loadingId, setLoadingId] = React.useState<string | null>(null);

  const handleBookNow = (propertyId: string) => {
    setLoadingId(propertyId); // shows spinner
    // Simulate async or do real async fetch
    setTimeout(() => {
      // Navigate after loading
      router.push(`/book/${propertyId}`);
      // If you want the spinner to remain until navigation finishes,
      // do not reset loadingId here.
    }, 1000);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Choose Your Property</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {properties.map((property) => (
          <Card key={property.id} className="p-4">
            <Image
              src={property.image}
              alt={property.title}
              className="w-full h-48 object-cover mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{property.title}</h2>
            <p className="text-gray-600 mb-4">{property.description}</p>

            <CustomButton
              text="Book Now"
              color="bg-[#C59948]"
              props="w-full text-white px-6"
              hoverColor="hover:bg-[#B48838]"
              textColor="text-primary"
              isLoading={loadingId === property.id}
              onClick={() => handleBookNow(property.id)}
            />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BookSelectionPage;
