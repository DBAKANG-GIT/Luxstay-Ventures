import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import Bedroom from '@/public/images/bedroom.png';
import ServiceBadge from '../custom-servicebadge/service-badge';
import LuxstayLogo from '@/public/logo/luxstay-logo-colored.svg';
import CustomButton from '../custom-button/custom-button';
const features = [
  {
    number: '01',
    title: 'Affordable Prices',
    description:
      'Our apartments are very competitively priced when compared to nearby hotels.',
  },
  {
    number: '02',
    title: 'House Keeping',
    description:
      'Our apartments are cleaned once a week and are accompanied with hotel-grade linens & towels for your stay.',
  },
  {
    number: '03',
    title: 'Equipped Kitchen',
    description:
      'Our kitchens are fully equipped with all the major household appliance. From utensils and pots, to oils, teas & coffee.',
  },
  {
    number: '04',
    title: 'Prime Locations',
    description:
      'Our apartments are in central locations or near major transport links for convenience.',
  },
  {
    number: '05',
    title: 'Fully Furnished',
    description:
      'Our apartments are complete with everything you would need in your own home.',
  },
  {
    number: '06',
    title: 'Customer Support',
    description:
      'Our Guest Services Team is available 24/7 to answer any queries during your',
  },
];

export default function WhatWeOffer() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-8">
        <ServiceBadge text="Our Qualities" />
        <h2 className="text-3xl  font-bold mb-4">Features</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="col-span-1 md:col-span-2 lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="md:p-6 flex flex-col md:bg-light-grey md:rounded-lg"
            >
              <span className="text-3xl font-bold text-center text-custom-gold mb-2 block">
                {feature.number}
              </span>
              <h3 className="text-xl text-center font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-500 self-stretch">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-1 space-y-8 mt-12">
          <div className="relative md:mx-12">
            {/* Bedroom Image */}
            <Image
              src={Bedroom}
              alt="Luxury bedroom"
              width={600}
              height={400}
              className="rounded-lg object-cover w-full h-auto"
            />

            {/* Logo Image Positioned at the Top Center */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full">
              <Image
                src={LuxstayLogo} // Update with the correct path to your logo image
                alt="LuxStay Ventures Logo"
                width={100}
                height={100}
                className="rounded-full object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 flex justify-center items-center mx-auto lg:mx-0">
              <CustomButton
                href="/about"
                text="Learn More"
                color="bg-gold-accent-color"
                textColor="text-white"
                hoverColor="bg-electric-green-500"
                props="w-full mt-4"
                icon={<ArrowUpRight />}
              />
            </div>
          </div>

          {/* Button */}
        </div>
      </div>
    </div>
  );
}
