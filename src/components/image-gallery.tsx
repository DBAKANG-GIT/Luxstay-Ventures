'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { ArrowLeft, ArrowRight, Pause, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Hero from '/public/images/webp/1.webp';
import HeroWithKitchen from '/public/images/webp/living-room5.webp';
import Kitchen from '/public/images/webp/kitchen6.webp';
import Bedroom from '/public/images/webp/bedroom1.webp';
import Bedroom_1_single from '/public/images/webp/bedroom1-singles.webp';
import Bedroom_1 from '/public/images/webp/bedroom1.1.webp';
import Bedroom_2 from '/public/images/webp/bedroom-2.webp';
import Bedroom_2_external from '/public/images/webp/bedroom2-from-window.webp';
import Toilet from '/public/images/webp/toilet.webp';
import Toilet_2 from '/public/images/webp/toilet-2.webp';
import Balcony from '/public/images/webp/balcony.webp';
import FloorPlan from '/public/images/webp/floorplan.webp';
import HarryPotter from '/public/images/harry-porter.jpeg';
import BushyStation from '/public/images/bushey-station.jpeg';
import WatfordMall from '/public/images/webp/watford-shopping-mall.webp';
import WatfordHospital from '/public/images/watford-hospital.jpg';

const ImageGallery: React.FC = () => {
  const [currentImage, setCurrentImage] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const images: string[] = [
    Hero.src,
    HeroWithKitchen.src,
    Kitchen.src,
    Bedroom.src,
    Toilet.src,
    Bedroom_1_single.src,
    Bedroom_1.src,
    Bedroom_2.src,
    Bedroom_2_external.src,
    Toilet_2.src,
    Balcony.src,
    FloorPlan.src,
    HarryPotter.src,
    BushyStation.src,
    WatfordMall.src,
    WatfordHospital.src,
  ];

  const nextImage = useCallback(() => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback(() => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setInterval(() => {
        nextImage();
      }, 5000); // Change image every 5 seconds
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isPlaying, nextImage]);

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <div className="relative w-full h-[300px] md:h-[400px] lg:h-[600px] overflow-hidden rounded-lg">
      {images.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt={`Apartment view ${index + 1}`}
          width={1200} // Replace with the actual width of your images
          height={800} // Replace with the actual height of your images
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentImage ? 'bg-white w-4' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-between p-4">
        <Button
          variant="ghost"
          size="icon"
          className="text-white bg-black/20 hover:bg-black/40 rounded-full"
          onClick={prevImage}
        >
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="text-white bg-black/20 hover:bg-black/40 rounded-full"
          onClick={nextImage}
        >
          <ArrowRight className="h-6 w-6" />
        </Button>
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="absolute bottom-4 right-4 z-10 text-white bg-black/20 hover:bg-black/40 rounded-full"
        onClick={togglePlayPause}
      >
        {isPlaying ? (
          <Pause className="h-6 w-6" />
        ) : (
          <Play className="h-6 w-6" />
        )}
      </Button>
    </div>
  );
};

export default ImageGallery;
