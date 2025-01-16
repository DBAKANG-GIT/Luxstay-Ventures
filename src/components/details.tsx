'use client';

import React from 'react';

const Details: React.FC = () => (
  <div className="space-y-4">
    <div className="flex flex-wrap gap-2">
      <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
        2 Bedrooms
      </span>
      <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
        1.5 Bathrooms
      </span>
      <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
        1 Living Room
      </span>
      <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
        Kitchen
      </span>
      <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
        Free Parking
      </span>
      <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
        5 Guests
      </span>
    </div>
    <p className="text-gray-600">
      Experience luxury living in the heart of Watford. This beautifully
      appointed 2-bedroom apartment offers modern amenities, stunning views, and
      a prime location. Perfect for both short stays and extended visits, our
      space provides all the comforts of home with the sophistication of a
      high-end hotel.
    </p>
  </div>
);

export default Details;
