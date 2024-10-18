'use client';

import React, { useEffect, useRef } from 'react';

interface GoogleMapProps {
  apiKey: string;
  center: { lat: number; lng: number };
  zoom: number;
  markerTitle?: string;
}

const GoogleMap: React.FC<GoogleMapProps> = ({
  apiKey,
  center,
  zoom,
  markerTitle,
}) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadGoogleMapsScript = () => {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=maps&v=beta`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);

      script.onload = initMap;
    };

    const initMap = () => {
      if (mapRef.current && window.google) {
        const map = new window.google.maps.Map(mapRef.current, {
          center,
          zoom,
        });

        new window.google.maps.Marker({
          position: center,
          map,
          title: markerTitle || 'My Location',
        });
      }
    };

    if (!window.google) {
      loadGoogleMapsScript();
    } else {
      initMap();
    }

    return () => {
      const script = document.querySelector(
        'script[src^="https://maps.googleapis.com/maps/api/js"]'
      );
      if (script) {
        document.head.removeChild(script);
      }
    };
  }, [apiKey, center, zoom, markerTitle]);

  return <div ref={mapRef} style={{ width: '100%', height: '200px' }} />;
};

export default GoogleMap;
