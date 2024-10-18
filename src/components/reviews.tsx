'use client';

import React from 'react';
import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ReviewCard from './review-card';

const Reviews: React.FC = () => (
  <div className="space-y-4">
    <h3 className="text-xl  font-semibold">Reviews</h3>
    <div className="flex items-center gap-2">
      <div className="flex text-[#C59948]">
        <Star fill="currentColor" />
        <Star fill="currentColor" />
        <Star fill="currentColor" />
        <Star fill="currentColor" />
        <Star fill="currentColor" />
      </div>
      <span className="font-semibold">4.9</span>
      <span className="text-gray-600">(10 reviews)</span>
    </div>
    <div className="space-y-4">
      <ReviewCard
        name="John D."
        date="August 2024"
        content="Absolutely stunning apartment! The location is perfect, and the amenities are top-notch. We especially loved the modern kitchen and the comfortable beds. Will definitely stay here again on our next visit to Watford."
      />
      <ReviewCard
        name="Sarah M."
        date="July 2024"
        content="This place exceeded our expectations. It's beautifully decorated, spotlessly clean, and the host was incredibly responsive. The free parking was a huge plus. Highly recommend!"
      />
      <ReviewCard
        name="David L."
        date="June 2024"
        content="Great value for money. The apartment is spacious, well-equipped, and in a fantastic location. We enjoyed our morning coffee on the balcony with a lovely view. Five stars all around!"
      />
    </div>
    <Button
      variant="outline"
      className="mt-4 border-[#C59948] text-[#C59948] hover:bg-[#C59948] hover:text-white"
    >
      Show all 128 reviews
    </Button>
  </div>
);

export default Reviews;
