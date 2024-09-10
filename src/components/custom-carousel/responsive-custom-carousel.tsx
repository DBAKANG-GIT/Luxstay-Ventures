'use client';

import * as React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import AutoplayPlugin from 'embla-carousel-autoplay';
import Fade from 'embla-carousel-fade';

import image_1 from '@/public/images/image_card_1.jpeg';
import image_2 from '@/public/images/image_card_2.jpeg';
import image_3 from '@/public/images/image_card_3.jpeg';
import image_4 from '@/public/images/image_card_4.jpeg';
import CustomButton from '../custom-button/custom-button';

const carouselItems = [
  { image: image_1, alt: 'Carousel image 1' },
  { image: image_2, alt: 'Carousel image 2' },
  { image: image_3, alt: 'Carousel image 3' },
  { image: image_4, alt: 'Carousel image 4' },
];

export function ResponsiveCustomCarousel() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 150 }, [
    AutoplayPlugin({ delay: 6000, stopOnInteraction: false }),
    Fade({ active: true }),
  ]);

  React.useEffect(() => {
    if (emblaApi) {
      emblaApi.on('select', () => {
        setCurrentIndex(emblaApi.selectedScrollSnap());
      });
    }
    return () => {
      if (emblaApi) {
        emblaApi.destroy();
      }
    };
  }, [emblaApi]);

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="w-full mx-auto relative h-[31rem] md:h-[calc(100vh-4rem)] overflow-hidden">
      <div ref={emblaRef} className="h-full">
        <div className="flex h-full">
          {carouselItems.map((item, index) => (
            <div key={index} className="flex-[0_0_100%] h-full relative">
              <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />
              <Image
                src={item.image}
                alt={item.alt}
                layout="fill"
                objectFit="cover"
                priority={index === 0}
                className="carousel-image"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Fixed content overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-start text-white p-6 md:p-12 z-20 max-w-full sm:max-w-[60ch]">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 md:mb-8 max-w-[10ch] sm:max-w-full">
          Inspired By Living
        </h2>
        <div className="w-full space-y-4 sm:space-y-0 sm:space-x-4 sm:flex">
          <CustomButton
            href="/about"
            text="Learn More "
            color="bg-white"
            textColor="text-dark-black"
            hoverColor="bg-electric-green-500"
            props="w-full"
            icon={<ChevronRight className="h-4 w-4" />}
          />
          <CustomButton
            href="/book"
            text="Book Now"
            color="bg-gold-accent-color"
            textColor="text-white"
            hoverColor="bg-electric-green-500"
            props="w-full"
          />
        </div>
      </div>

      {/* Bottom navigation - visible only on desktop */}
      <div className="absolute bottom-0 md:left-0 xl:left-[38.75rem] right-0 bg-dark-black text-white p-4 hidden md:flex md:flex-row md:h-28 justify-between z-30">
        {[1, 2, 3].map((num, index) => (
          <div
            key={num}
            className={`flex items-center gap-4 ${
              currentIndex === index ? 'opacity-100' : 'opacity-50'
            }`}
          >
            <span className="text-6xl font-light text-gray-500">
              {num.toString().padStart(2, '0')}
            </span>
            <div className="flex flex-col">
              <h2 className="text-xl font-semibold">Lorem ipsum</h2>
              <p className="text-sm">
                {num === 1
                  ? 'Lorem Ipsum'
                  : num === 2
                  ? 'EVERY FRIDAY | 8PM'
                  : 'JULY 27 | 6PM'}
              </p>
            </div>
            {num < 3 && <div className="h-16 w-px bg-gray-700"></div>}
          </div>
        ))}
      </div>
    </div>
  );
}
