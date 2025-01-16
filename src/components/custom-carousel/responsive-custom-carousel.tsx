'use client';

import * as React from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import AutoplayPlugin from 'embla-carousel-autoplay';
import Fade from 'embla-carousel-fade';

import image_1 from '/public/images/image_card_1.jpeg';
import image_2 from '/public/images/image_card_2.jpeg';
import image_3 from '/public/images/image_card_3.jpeg';
import image_4 from '/public/images/image_card_4.jpeg';

import CustomButton from '../custom-button/custom-button';
import useNavigateWithSpinner from '@/hook/use-navigate-with-spinner';

const carouselItems = [
  { image: image_1, alt: 'Carousel image 1' },
  { image: image_2, alt: 'Carousel image 2' },
  { image: image_3, alt: 'Carousel image 3' },
  { image: image_4, alt: 'Carousel image 4' },
];

export function ResponsiveCustomCarousel() {
  // One instance per button
  const { isLoading: isLearnMoreLoading, navigate: navigateLearnMore } =
    useNavigateWithSpinner();
  const { isLoading: isBookNowLoading, navigate: navigateBookNow } =
    useNavigateWithSpinner();

  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 60 }, [
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

  return (
    <div className="relative w-full mx-auto h-[44rem] md:h-[calc(100vh-4rem)] overflow-hidden">
      {/* Carousel */}
      <div ref={emblaRef} className="h-full">
        <div className="flex h-full">
          {carouselItems.map((item, index) => (
            <div key={index} className="relative flex-[0_0_100%] h-full">
              <div className="absolute inset-0 bg-black bg-opacity-70 z-10" />
              <Image
                src={item.image}
                alt={item.alt}
                priority={index === 0}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Text & Buttons Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-start text-white p-6 md:p-12 z-20 max-w-full sm:max-w-[60ch] space-y-4">
        {/* Main Heading */}
        <h2 className="text-4xl md:text-6xl font-extrabold uppercase tracking-wide leading-tight drop-shadow-md">
          Serviced Apartments & Houses
          <br className="hidden sm:block" />
          <span className="block">Across the UK!</span>
        </h2>
        {/* Subheadings */}
        <h3 className="text-lg md:text-2xl font-semibold leading-snug drop-shadow-sm">
          Short Stays • Long Stay Accommodations • Luxury Apartments
        </h3>
        <p className="text-md md:text-lg leading-relaxed drop-shadow-sm">
          For businesses, relocations, emergency accommodation, families,
          professionals, weekends away, leisure stays, workers, corporates,
          trade contractors &amp; much more!
        </p>

        {/* Buttons */}
        <div className="w-full space-y-4 sm:space-y-0 sm:space-x-4 sm:flex">
          <CustomButton
            text="Learn More"
            color="bg-white"
            textColor="text-dark-black"
            hoverColor="bg-electric-green-500"
            props="w-full"
            icon={<ChevronRight className="h-4 w-4" />}
            isLoading={isLearnMoreLoading}
            onClick={() => navigateLearnMore('/about')}
          />
          <CustomButton
            text="Book Now"
            color="bg-gold-accent-color"
            textColor="text-white"
            hoverColor="bg-electric-green-500"
            props="w-full"
            isLoading={isBookNowLoading}
            onClick={() => navigateBookNow('/book')}
          />
        </div>
      </div>

      {/* Bottom Navigation (Desktop) */}
      <div className="absolute bottom-0 md:left-0 xl:left-[38.75rem] right-0 bg-dark-black text-white p-4 hidden md:flex md:flex-row md:h-28 justify-between z-30">
        {[1, 2, 3].map((num, index) => (
          <div
            key={num}
            className={`flex items-center gap-4 ${
              currentIndex === index ? 'opacity-100' : 'opacity-50'
            }`}
          >
            <span
              className={`text-6xl font-light ${
                currentIndex === index ? 'text-white' : 'text-gray-500'
              }`}
            >
              {num.toString().padStart(2, '0')}
            </span>
            <div className="flex flex-col">
              <p className="text-sm">
                {num === 1 ? (
                  <>
                    <span className="text-xl font-semibold">Luxury Homes</span>
                    <br />
                    <span>Short Stay, Long Memories</span>
                  </>
                ) : num === 2 ? (
                  <>
                    <span className="text-xl font-semibold">
                      Flexible Stays
                    </span>
                    <br />
                    <span>AVAILABLE NOW | BOOK TODAY</span>
                  </>
                ) : (
                  <>
                    <span className="text-xl font-semibold">
                      Special Discounts
                    </span>
                    <br />
                    <span>LIMITED TIME OFFERS</span>
                  </>
                )}
              </p>
            </div>
            {num < 3 && <div className="h-16 w-px bg-gray-700"></div>}
          </div>
        ))}
      </div>
    </div>
  );
}
