import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'About Luxstay Ventures | Leading Serviced Accommodation Experts',
  description:
    'Learn about Luxstay Ventures, your premier choice for luxury short-stay rentals. Discover our commitment to providing top-notch accommodations that blend comfort and convenience for travelers.',
};

export default function AboutPage() {
  return (
    <div>
      <h1>About Page</h1>
      <p>Welcome to the About page!</p>
    </div>
  );
}
