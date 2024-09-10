'use client';

import * as React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import AutoplayPlugin from 'embla-carousel-autoplay';
import Fade from 'embla-carousel-fade';

import image_1 from '@/public/images/image_card_1.jpeg';
import image_2 from '@/public/images/image_card_2.jpeg';
import image_3 from '@/public/images/image_card_3.jpeg';
import image_4 from '@/public/images/image_card_4.jpeg';

const carouselItems = [
  { image: image_1, alt: 'Carousel image 1' },
  { image: image_2, alt: 'Carousel image 2' },
  { image: image_3, alt: 'Carousel image 3' },
  { image: image_4, alt: 'Carousel image 4' },
];

export function ResponsiveCustomCarousel() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    AutoplayPlugin({ delay: 5000, stopOnInteraction: false }),
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
    <div className="w-full max-w-5xl mx-auto relative h-[31rem] md:h-[calc(100vh-4rem)] overflow-hidden">
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
      <div className="absolute inset-0 flex flex-col justify-center items-start text-white p-6 md:p-12 z-20">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 md:mb-8 max-w-[10ch]">
          Inspired By Living
        </h2>
        <div className="w-full space-y-4 md:space-y-0 md:space-x-4 md:flex">
          <Button
            variant="outline"
            className="w-full md:w-auto text-white border-white hover:bg-white hover:text-black"
          >
            Learn More <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button className="w-full md:w-auto bg-yellow-600 hover:bg-yellow-700 text-white">
            Book Now
          </Button>
        </div>
      </div>

      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hidden md:block z-30"
        onClick={scrollPrev}
      >
        &#8592;
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hidden md:block z-30"
        onClick={scrollNext}
      >
        &#8594;
      </button>

      {/* Bottom navigation - visible only on desktop */}
      <div className="absolute bottom-0 left-0 right-0 bg-indigo-900 text-white p-4 hidden md:flex justify-between z-30">
        {[1, 2, 3].map((num) => (
          <div
            key={num}
            className={`flex-1 ${
              currentIndex === num - 1 ? 'opacity-100' : 'opacity-50'
            }`}
          >
            <div className="text-3xl font-light">
              {num.toString().padStart(2, '0')}
            </div>
            <div className="text-sm">Lorem ipsum</div>
            <div className="text-xs">
              {num === 1
                ? 'Lorem Ipsum'
                : num === 2
                ? 'EVERY FRIDAY | 8PM'
                : 'JULY 27 | 6PM'}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
