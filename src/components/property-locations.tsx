'use client';

import { useEffect, useState, useCallback } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Brighton from '@public/images/Brighton.jpg';
import Watford from '@public/images/harry-potter.jpg';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import AutoplayPlugin from 'embla-carousel-autoplay';
import Fade from 'embla-carousel-fade';

export default function PropertyLocations() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 60 }, [
    AutoplayPlugin({ delay: 6000, stopOnInteraction: false }),
    Fade({ active: true }),
  ]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // Adjust breakpoint for desktop
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
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

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const locations = [
    {
      code: 'BTN',
      city: 'BRIGHTON',
      image: Brighton,
      description:
        'Charming seaside properties with stunning ocean views and vibrant local culture. Brighton is a popular destination known for its lively arts scene, diverse shopping experiences, and historic landmarks such as the Royal Pavilion and Brighton Pier.',
    },
    {
      code: 'WFD',
      city: 'WATFORD',
      image: Watford,
      description:
        'Home to Harry Potter Studios & Convenient town centre locations with easy access to London, shopping, dining, and entertainment.',
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-4xl font-bold mb-8 text-slate-800">
        OUR LATEST LOCATIONS
      </h2>
      <div className="relative w-full">
        {isMobile ? (
          <Carousel>
            <div ref={emblaRef} className="w-full overflow-hidden">
              <div className="flex">
                {locations.map((location, index) => (
                  <div key={index} className="relative flex-[0_0_100%]">
                    <Card className="border-2 border-slate-200">
                      <CardContent className="p-0">
                        <div className="relative">
                          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 text-2xl font-bold">
                            {location.code}
                          </div>
                          <Image
                            src={location.image || '/placeholder.svg'}
                            alt={`${location.city} property`}
                            className="w-full aspect-[4/3] object-cover"
                            style={{ width: 'auto', height: 'auto' }}
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="text-xl font-semibold mb-2">
                            {location.city}
                          </h3>
                          <p className="text-slate-600">
                            {location.description}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden md:flex">
              <div
                onClick={scrollPrev}
                className="absolute -left-12 top-1/2 transform -translate-y-1/2 cursor-pointer"
              >
                <CarouselPrevious />
              </div>
              <div
                onClick={scrollNext}
                className="absolute -right-12 top-1/2 transform -translate-y-1/2 cursor-pointer"
              >
                <CarouselNext />
              </div>
            </div>
          </Carousel>
        ) : (
          <div className="grid grid-cols-2 gap-4">
            {locations.map((location, index) => (
              <Card key={index} className="border-2 border-slate-200">
                <CardContent className="p-0">
                  <div className="relative">
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 text-2xl font-bold">
                      {location.code}
                    </div>
                    <Image
                      src={location.image || '/placeholder.svg'}
                      alt={`${location.city} property`}
                      className="w-full aspect-[4/3] object-cover"
                      style={{ width: 'auto', height: 'auto' }}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">
                      {location.city}
                    </h3>
                    <p className="text-slate-600">{location.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
