import Wifi from '/public/images/pepicons-print_wifi.svg';
import Award from '/public/images/icon-tick.png';
import Calendar from '/public/images/calendar.png';
import Cancel from '/public/images/cancel-icon.png';
import Image from 'next/image';
import React from 'react';
import ServiceBadge from '../custom-servicebadge/service-badge';
type FeatureItemProps = {
  src: string;
  alt: string;
  title: string;
};

const FeatureItem: React.FC<FeatureItemProps> = ({ src, alt, title }) => (
  <div className="flex flex-col md:flex-row lg:flex-col md:gap-20 lg:gap-2 items-center text-center gap-2">
    <Image src={src} alt={alt} className="w-16 h-16" />
    <h3 className="text-lg text-grey-custom font-semibold">{title}</h3>
  </div>
);

const features = [
  { src: Award, alt: 'award-icon', title: 'Best Rate Guaranteed' },
  { src: Wifi, alt: 'wifi-icon', title: 'Free Wi-Fi' },
  { src: Calendar, alt: 'calendar-icon', title: 'Reserve Now, Pay Later' },
  { src: Cancel, alt: 'cancel-icon', title: 'Free Cancellation' },
];

export function FeatureSection() {
  return (
    <div className="text-white p-6 md:p-12 lg:p-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <ServiceBadge text="Our Services" />
          <h2 className="text-3xl text-custom-black md:text-4xl lg:text-5xl font-bold mb-4">
            Our Serviced Apartments
          </h2>
          <p className="text-custom-grey max-w-3xl mx-auto">
            Fully-furnished, self-catering accommodations for corporate housing,
            short-term stay, or temporary home
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureItem
              key={index}
              src={feature.src}
              alt={feature.alt}
              title={feature.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
