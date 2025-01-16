'use client';

import React from 'react';
import { Wifi, Tv, Car, Coffee, Utensils, Moon } from 'lucide-react';

const Amenities: React.FC = () => (
  <div className="space-y-4">
    <h3 className="text-xl font-semibold">Some of what we offer</h3>
    <div className="grid grid-cols-2 gap-4">
      <div className="flex items-center gap-2">
        <Wifi className="text-[#C59948]" />
        <span>Free WiFi</span>
      </div>
      <div className="flex items-center gap-2">
        <Tv className="text-[#C59948]" />
        <span>Smart TV</span>
      </div>
      <div className="flex items-center gap-2">
        <Car className="text-[#C59948]" />
        <span>Free parking</span>
      </div>
      <div className="flex items-center gap-2">
        <Coffee className="text-[#C59948]" />
        <span>Coffee maker</span>
      </div>
      <div className="flex items-center gap-2">
        <Utensils className="text-[#C59948]" />
        <span>Fully equipped kitchen</span>
      </div>
      <div className="flex items-center gap-2">
        <Moon className="text-[#C59948]" />
        <span>Blackout curtains</span>
      </div>
    </div>
  </div>
);

export default Amenities;
