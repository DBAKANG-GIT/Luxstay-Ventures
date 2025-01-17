export interface Property {
  id: string;
  title: string;
  description: string;
  location: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  images: string[];
  amenities: string[];
  details: string;
  reviews: {
    rating: number;
    count: number;
  };
  externalBookingLink: string; // Optional for properties that redirect externally
  bedrooms: number;
  bathrooms: number;
  livingRooms: number;
  guests: number;
}

export const properties: Property[] = [
  {
    id: 'watford-escape',
    title:
      'Enchanted Watford Escape! Perfect for Harry Potter World & Quick London Access, Free Parking',
    description:
      'Ideal for Families, Contractors & Business Travelers, Free Parking',
    location: 'Watford, United Kingdom',
    coordinates: { lat: 51.64614, lng: -0.3827 },
    images: [
      '/images/webp/1.webp',
      '/images/webp/living-room5.webp',
      '/images/webp/kitchen6.webp',
      '/images/webp/bedroom1-singles.webp',
      '/images/webp/bedroom1.webp',
      '/images/webp/bedroom1.1.webp',
      '/images/webp/bedroom-2.webp',
      '/images/webp/bedroom2-from-window.webp',
      '/images/webp/toilet.webp',
      '/images/webp/toilet-2.webp',
      '/images/webp/balcony.webp',
      '/images/webp/floorplan.webp',
      '/images/harry-porter.jpeg',
      '/images/bushey-station.jpeg',
      '/images/webp/watford-shopping-mall.webp',
      '/images/watford-hospital.jpg',
    ],
    amenities: [
      'Free WiFi',
      'Smart TV',
      'Free parking',
      'Coffee maker',
      'Fully equipped kitchen',
      'Blackout curtains',
    ],
    details:
      'Experience luxury living in the heart of Watford. This beautifully appointed 2-bedroom apartment offers modern amenities, stunning views, and a prime location. Perfect for both short stays and extended visits, our space provides all the comforts of home with the sophistication of a high-end hotel.',
    bedrooms: 2,
    bathrooms: 1.5,
    livingRooms: 1,
    guests: 5,
    reviews: {
      rating: 5.0,
      count: 128,
    },
    externalBookingLink:
      'https://book.luxstayventures.com/listings?city=Hertfordshire',
  },
  {
    id: 'brighton-bliss',
    title:
      'Luxury 4BR Brighton Home Near South Downs with Stunning Sea Views, Pool Table & FREE Parking for 4 Cars',
    description:
      'Peaceful retreat with scenic views ideal for groups of up to 12',
    location: 'Brighton and Hove, United Kingdom',
    coordinates: { lat: 50.829115, lng: -0.066163 },
    images: [
      '/images/brighton-pictures/hero1.jpg',
      '/images/brighton-pictures/IMG_9220.JPG',
      '/images/brighton-pictures/IMG_9163.JPG',
      '/images/brighton-pictures/IMG_9159.JPG',
      '/images/brighton-pictures/IMG_9150.JPG',
      '/images/brighton-pictures/IMG_9123.JPG',
      '/images/brighton-pictures/IMG_9113.JPG',
      '/images/brighton-pictures/IMG_9085.JPG',
      '/images/brighton-pictures/IMG_9084.JPG',
      '/images/brighton-pictures/IMG_9071.JPG',
      '/images/brighton-pictures/IMG_2107.JPG',
      '/images/brighton-pictures/IMG_2103.JPG',
      '/images/brighton-pictures/IMG_2097.JPG',
      '/images/brighton-pictures/IMG_2092.JPG',
      '/images/brighton-pictures/IMG_2088.JPG',
      '/images/brighton-pictures/IMG_2078.JPG',
      '/images/brighton-pictures/IMG_2146.JPG',
      '/images/brighton-pictures/IMG_2136.JPG',
      '/images/brighton-pictures/IMG_2127.JPG',
      '/images/brighton-pictures/IMG_2122.JPG',
      '/images/brighton-pictures/IMG_2118.JPG',
      '/images/brighton-pictures/IMG_9453.JPG',
      '/images/brighton-pictures/IMG_9449.JPG',
      '/images/brighton-pictures/IMG_9250.JPG',
      '/images/brighton-pictures/IMG_9246.JPG',
      '/images/brighton-pictures/IMG_9202.JPG',
      '/images/brighton-pictures/IMG_9183.JPG',
      '/images/brighton-pictures/IMG_9063.JPG',
      '/images/brighton-pictures/IMG_8902.jpg',
      '/images/brighton-pictures/IMG_8894.JPG',
      '/images/brighton-pictures/IMG_8889.JPG',
      '/images/brighton-pictures/IMG_2163.JPG',
      '/images/brighton-pictures/IMG_2162.JPG',
      '/images/brighton-pictures/IMG_2152.JPG',
      '/images/brighton-pictures/garden.jpeg',
      '/images/brighton-pictures/ferrisWheel.jpeg',
      '/images/brighton-pictures/brighton-5214283.jpg',
      '/images/brighton-pictures/brighton-5200004.jpg',
      '/images/brighton-pictures/BrightonPier.jpg',
      '/images/brighton-pictures/beach-4286271.jpg',
      '/images/brighton-pictures/uni.jpg',
      '/images/brighton-pictures/royalPavilion.jpeg',
      '/images/brighton-pictures/rottingdeanBeach.jpg',
      '/images/brighton-pictures/racecourse.jpeg',
    ],
    amenities: [
      'Free WiFi',
      'Pool Table',
      'Free parking for 4 cars',
      'Coffee maker',
      'Fully equipped kitchen',
      'Stunning sea views',
    ],
    details:
      'Enjoy a luxurious stay in our 4-bedroom Brighton home, perfectly located near the South Downs. With stunning sea views, a pool table, and ample parking, this property is ideal for large groups seeking comfort and style.',
    reviews: {
      rating: 4.8,
      count: 95,
    },
    externalBookingLink:
      'https://book.luxstayventures.com/listings?city=Brighton+and+Hove',

    bedrooms: 4,
    bathrooms: 3,
    livingRooms: 1,
    guests: 12,
  },
  // Add more properties as needed
];
