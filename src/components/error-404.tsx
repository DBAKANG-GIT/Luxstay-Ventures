'use client';

import Image from 'next/image';
import man from '@/public/images/man.png';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

export default function Error404() {
  return (
    <div className="min-h-screen bg-white text-[#333333] flex flex-col justify-center items-center p-4 md:p-8">
      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center justify-center">
        <div className="lg:w-1/2 order-2 lg:order-1">
          <Image
            src={man}
            alt="Astronaut"
            width={500}
            height={500}
            placeholder="blur"
            className="mx-auto my-8 lg:my-0 transform rotate-[-42deg] scale-x-[-1]"
          />
        </div>
        <div className="lg:w-1/2 order-1 lg:order-2 flex flex-col items-center lg:items-start text-center lg:text-left">
          <h2 className="text-xl mb-2">error</h2>
          <h1 className="text-8xl lg:text-9xl font-bold mb-4">404</h1>
          <p className="text-xl lg:text-2xl mb-4">
            Oops! something went wrong...
          </p>
          <div className="hidden lg:block w-full relative">
            <div className="absolute left-[-50%] top-[-100px] w-[150%] border-b border-dashed border-gray-300"></div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-6xl flex flex-col items-center mt-8 lg:mt-16">
        <p className="text-sm text-[#75757A] lg:text-base mb-8 text-center">
          try reload this page or go back to homepage
        </p>
        <Link href="/" passHref className="w-full md:w-auto">
          <Button className="bg-[#C59948] hover:bg-[#A17F3A] text-white font-semibold py-3 px-6 rounded w-full md:w-auto">
            Back to Homepage
          </Button>
        </Link>
      </div>
    </div>
  );
}
