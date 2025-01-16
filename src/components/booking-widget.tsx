import React, { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';

interface BookingWidgetProps {
  isSticky?: boolean;
}

const BookingWidget: React.FC<BookingWidgetProps> = ({ isSticky = false }) => {
  // Determine if the viewport is mobile or not
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // <1024 = mobile/tablet
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // If on mobile, render a fixed bottom bar
  if (isMobile) {
    return (
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#C59948] p-4 z-50 shadow-xl flex items-center justify-between">
        <h3 className="text-base font-semibold text-[#C59948]">
          Check Availability
        </h3>
        <a
          href="https://book.luxstayventures.com/listings?city=Brighton+and+Hove"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded bg-[#C59948] text-white hover:bg-[#b18b3b] text-sm font-medium"
        >
          Book Now
        </a>
      </div>
    );
  }

  // Otherwise (desktop), render the “sticky” card
  return (
    <Card
      className={`p-4 border-[#C59948] border-2 ${
        isSticky ? 'sticky top-4 z-50' : ''
      }`}
    >
      <h3 className="text-lg font-semibold mb-4 text-center">
        Check Availability
      </h3>
      <div className="text-center">
        <a
          href="https://book.luxstayventures.com/listings?city=Brighton+and+Hove"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded bg-[#C59948] text-white hover:bg-[#b18b3b]"
        >
          Book Now
        </a>
      </div>
    </Card>
  );
};

export default BookingWidget;
