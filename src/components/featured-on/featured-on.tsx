'use client';
import Image from 'next/image';
import Airbnb from '/public/logo/airbnb-logo.png';
import HomeAway from '/public/logo/homeaway.png';
import Vrbo from '/public/logo/vrbo-logo.png';
import Agoda from '/public/logo/agoda.png';
import Booking from '/public/logo/booking-com.png';

const platforms = [
  { src: Airbnb, alt: 'Airbnb' },
  { src: Booking, alt: 'Booking.com' },
  { src: HomeAway, alt: 'HomeAway' },
  { src: Vrbo, alt: 'Vrbo' },
  { src: Agoda, alt: 'Agoda' },
];

export function FeaturedOn() {
  return (
    <div className="w-full bg-gradient-to-b from-gray-50 to-white py-16">
      <h2 className="text-center text-2xl md:text-4xl font-bold text-gray-800 mb-12 tracking-wide">
        Our Properties Are Featured On
      </h2>
      <div className="flex flex-wrap justify-center gap-4 md:gap-8 items-center">
        {platforms.map((platform, index) => (
          <div
            key={index}
            className="flex justify-center items-center h-12 w-24 md:h-16 md:w-40 transform hover:scale-110 transition-transform duration-300 ease-in-out"
          >
            <Image
              src={platform.src}
              alt={platform.alt}
              className="object-contain"
              height={48}
              width={96}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
