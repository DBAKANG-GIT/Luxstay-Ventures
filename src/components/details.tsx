'use client';

import React from 'react';

interface DetailsProps {
  bedrooms: number;
  bathrooms: number;
  livingRooms: number;
  guests: number;
  details: string;
}

const Details: React.FC<DetailsProps> = ({
  bedrooms,
  bathrooms,
  livingRooms,
  guests,
  details,
}) => (
  <div className="space-y-4">
    <div className="flex flex-wrap gap-2">
      <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
        {bedrooms} Bedrooms
      </span>
      <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
        {bathrooms} Bathrooms
      </span>
      <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
        {livingRooms} Living Room
      </span>
      <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
        Kitchen
      </span>
      <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
        Free Parking
      </span>
      <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
        {guests} Guests
      </span>
    </div>
    <p className="text-gray-600">{details}</p>
  </div>
);

export default Details;
