'use client';

import React, { useState, useEffect } from 'react';
import { Star, MapPin, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import ImageGallery from './image-gallery';
import BookingWidget from './booking-widget';
import Details from './details';
import Amenities from './amenities';
import ThingsToKnow from './things-to-know';
import GoogleMap from './google-map';
import { Property } from '@/data/properties';

interface PropertyListingProps {
  data: Property;
}

const PropertyListing: React.FC<PropertyListingProps> = ({ data }) => {
  const [isDesktop, setIsDesktop] = useState<boolean>(false);
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkIsDesktop();
    window.addEventListener('resize', checkIsDesktop);
    return () => window.removeEventListener('resize', checkIsDesktop);
  }, []);

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: data.title,
          text: data.description,
          url: window.location.href,
        })
        .then(() => console.log('Successful share'))
        .catch((error) => console.log('Error sharing', error));
    } else {
      alert('Web Share API is not supported in your browser.');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto p-4">
        <div className="mt-8 space-y-8">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
            <div className="w-full lg:w-2/3 space-y-8">
              <div>
                <h1 className="text-3xl font-bold mb-2">{data.title}</h1>
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center space-x-2">
                    <div className="flex text-[#C59948]">
                      {Array.from({
                        length: Math.round(data.reviews.rating),
                      }).map((_, i) => (
                        <Star key={i} fill="currentColor" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">
                      {data.reviews.rating} ({data.reviews.count} reviews)
                    </span>
                    <span className="text-sm text-gray-600">•</span>
                    <span className="text-sm text-gray-600 flex items-center">
                      <MapPin size={14} className="mr-1" />
                      {data.location}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-[#C59948] text-[#C59948] hover:bg-[#C59948] hover:text-white"
                      onClick={handleShare}
                    >
                      <Share2 size={16} className="mr-2" /> Share
                    </Button>
                  </div>
                </div>
              </div>
              <ImageGallery images={data.images} />
              <Details
                bedrooms={data.bedrooms}
                bathrooms={data.bathrooms}
                livingRooms={data.livingRooms}
                guests={data.guests}
                details={data.details}
              />
              <Amenities />
              <ThingsToKnow />
            </div>
            <div className="w-full lg:w-1/3 space-y-4">
              <BookingWidget
                isSticky={isDesktop}
                bookingUrl={data.externalBookingLink}
              />
              <Card className="p-4 border-[#C59948] border-2 mt-4">
                <h3 className="text-lg font-semibold mb-2">Location</h3>
                <div className="w-full h-[200px] rounded">
                  {apiKey ? (
                    <GoogleMap
                      apiKey={apiKey}
                      center={data.coordinates}
                      zoom={14}
                      markerTitle={data.title}
                    />
                  ) : (
                    <p className="text-red-500">
                      Google Maps API key is missing.
                    </p>
                  )}
                </div>
                <p className="mt-2 text-sm text-gray-600">{data.location}</p>
                <Button
                  variant="link"
                  className="mt-2 text-[#C59948] p-0"
                  onClick={() =>
                    window.open(
                      `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                        data.location
                      )}`,
                      '_blank'
                    )
                  }
                >
                  Open in Google Maps
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PropertyListing;
