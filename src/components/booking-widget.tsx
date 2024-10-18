import React, { useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';

interface BookingWidgetProps {
  isSticky?: boolean;
}

interface UplistingSearchWidget {
  init: (config: {
    baseUrl: string;
    showLocation: boolean;
    locationText: string;
    locations: string[];
    color: string;
    insertAt: string;
    guestsMin: number;
    guestsMax: number;
    textColor: string;
    backgroundColor: string;
    buttonText: string;
  }) => void;
}

declare global {
  interface Window {
    uplistingSearchWidget: UplistingSearchWidget;
  }
}

const BookingWidget: React.FC<BookingWidgetProps> = ({ isSticky = false }) => {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scriptId = 'uplisting-widget-script';

    // Check if the script is already added
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src =
        'https://d2n64sniz4ei2k.cloudfront.net/property-search-795f5869.js';
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        if (window.uplistingSearchWidget) {
          window.uplistingSearchWidget.init({
            baseUrl: 'https://book.luxstayventures.com/',
            showLocation: false,
            locationText: 'All cities',
            locations: ['Hertfordshire'],
            color: '#C59948',
            insertAt: `#${widgetRef.current?.id}`,
            guestsMin: 1,
            guestsMax: 5,
            textColor: '#fff',
            backgroundColor: '#C59948',
            buttonText: 'Search',
          });
        }
      };
    } else {
      // Initialize the widget if the script is already present
      if (window.uplistingSearchWidget) {
        window.uplistingSearchWidget.init({
          baseUrl: 'https://book.luxstayventures.com/',
          showLocation: false,
          locationText: 'All cities',
          locations: ['Hertfordshire'],
          color: '#C59948',
          insertAt: `#${widgetRef.current?.id}`,
          guestsMin: 1,
          guestsMax: 5,
          textColor: '#fff',
          backgroundColor: '#C59948',
          buttonText: 'Search',
        });
      }
    }
  }, []);

  return (
    <Card
      className={`p-4 border-[#C59948] border-2 ${
        isSticky ? 'sticky top-4 z-50' : ''
      }`}
    >
      <h3 className="text-lg font-semibold mb-4 text-center">
        Check Availability
      </h3>
      <div
        id={`uplisting-widget-${isSticky ? 'sticky' : 'normal'}`}
        ref={widgetRef}
      ></div>
    </Card>
  );
};

export default BookingWidget;
