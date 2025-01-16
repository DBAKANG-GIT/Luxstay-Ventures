'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Home,
  Utensils,
  PiggyBank,
  MapPin,
  Sofa,
  Calendar,
  Key,
  Sparkles,
} from 'lucide-react';

import image_1 from '/public/images/about_image_1.jpeg';
import image_2 from '/public/images/about_image_2.jpeg';
import image_3 from '/public/images/about_image_3.jpeg';
import image_4 from '/public/images/about_image_4.jpeg';

const reasons = [
  {
    title: 'Space',
    content:
      'Unlike hotels, where you are either in separate rooms or all cramped together, elbowing each other for a good view of the TV, serviced properties are typically bigger than equivalent hotels - most with comfortable seating enough for everyone.',
    icon: Home,
  },
  {
    title: 'Home Cooking',
    content:
      "Serviced Properties come with their own fully equipped kitchen, meaning you can enjoy your family's favorite meals and don't have to splash out in restaurants during your whole trip.",
    icon: Utensils,
  },
  {
    title: 'Cost Effective',
    content:
      'Rates are usually lower than similar hotels. Plus, beneficial rates are generally available for longer stays so you can enjoy the property with the satisfaction of getting value for money.',
    icon: PiggyBank,
  },
  {
    title: 'Central Locations',
    content:
      "It's not just hotels and B&Bs that get the top spots close to all the best attractions. Serviced Property are also right there in the heart of the action, so if you've had a busy day exploring, sightseeing and visiting your chosen places you won't be too far back to your property to relax at the end of the day.",
    icon: MapPin,
  },
  {
    title: 'Home Comfort',
    content:
      'Providing a secure, comfortable environment, serviced properties offer a home-from-home comfort. Property often include separate living and sleeping spaces as well as all the entertainment equipment.',
    icon: Sofa,
  },
  {
    title: 'Familiarity',
    content:
      "With your own kitchen and separate bedrooms and living spaces, serviced Property allow you to maintain your normal family routine. If you're used to 7pm bedtimes and 6am breakfasts, there's nothing to stop you sticking to it with ease.",
    icon: Calendar,
  },
  {
    title: 'Freedom',
    content:
      "Once you've booked your serviced property, that's it: you can work, play and relax at any given moment. There's no need to reserve a conference room for a meeting - just host it in the living room or dining room.",
    icon: Key,
  },
  {
    title: 'House Keeping',
    content:
      "Possibly the best part of a serviced property stay is that you experience the best of both worlds: home-style living with hotel service. Cleaning and daily linen service is a given so you don't have to lift a finger.",
    icon: Sparkles,
  },
];

const images = [image_1, image_2, image_3, image_4];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function ServicedPropertyComponent() {
  return (
    <div className="container mx-auto p-6 sm:p-8 md:p-10 lg:p-12">
      <h1 className="text-4xl font-bold mb-6 text-center sm:text-start">
        Why serviced properties?
      </h1>
      <p className="mb-8 text-lg">
        Serviced properties are a great alternative to staying in a hotel. It is
        ideal for business travelers, groups of friends, families, and couples
        looking for independence and flexibility. Apart from more space, they
        give you a great base to enjoy the local life with all the amenities of
        the neighborhood on your doorstep.
      </p>
      <h2 className="text-3xl font-bold mb-6 text-center sm:text-start">
        8 Reasons to stay in serviced properties over hotels
      </h2>

      {/* Mobile view (Accordion) */}
      <div className="md:hidden">
        <Accordion type="single" collapsible>
          {reasons.map((reason, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{`${index + 1}. ${
                reason.title
              }`}</AccordionTrigger>
              <AccordionContent>{reason.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Tablet view (2-column grid) */}
      <div className="hidden md:grid lg:hidden grid-cols-2 gap-6">
        {reasons.map((reason, index) => (
          <motion.div
            key={index}
            className={`bg-gray-100 p-6 rounded-lg transition-transform transform hover:scale-105 hover:bg-gray-200 ${
              index % 2 === 0 ? 'text-left' : 'text-right'
            }`}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-2">{`${index + 1}. ${
              reason.title
            }`}</h3>
            <p>{reason.content}</p>
          </motion.div>
        ))}
      </div>

      {/* Desktop view (3-column grid) */}
      <div className="hidden lg:grid grid-cols-3 gap-6">
        <div className="grid grid-rows-4 gap-6">
          {reasons.slice(0, 4).map((reason, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 p-6 rounded-lg transition-transform transform hover:scale-105 hover:bg-gray-200 flex flex-col justify-between"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center gap-2 mb-2">
                {reason.icon && (
                  <reason.icon className="w-6 h-6 text-primary" />
                )}
                <h3 className="text-xl font-semibold">{`${index + 1}. ${
                  reason.title
                }`}</h3>
              </div>
              <p className="text-sm">{reason.content}</p>
            </motion.div>
          ))}
        </div>
        <div className="grid grid-rows-4 gap-6">
          {reasons.slice(4).map((reason, index) => (
            <motion.div
              key={index + 4}
              className="bg-gray-100 p-6 rounded-lg transition-transform transform hover:scale-105 hover:bg-gray-200 flex flex-col justify-between"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: (index + 4) * 0.1 }}
            >
              <div className="flex items-center gap-2 mb-2">
                {reason.icon && (
                  <reason.icon className="w-6 h-6 text-primary" />
                )}
                <h3 className="text-xl font-semibold">{`${index + 5}. ${
                  reason.title
                }`}</h3>
              </div>
              <p className="text-sm">{reason.content}</p>
            </motion.div>
          ))}
        </div>
        <div className="grid grid-rows-4 gap-6">
          {images.map((src, index) => (
            <motion.div
              key={index}
              className="relative aspect-w-4 aspect-h-3 rounded-lg overflow-hidden"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: (index + 8) * 0.1 }}
            >
              <Image
                src={src}
                alt={`Serviced Property Image ${index + 1}`}
                layout="fill"
                objectFit="cover"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Images (visible on mobile and tablet) */}
      <div className="grid grid-cols-2 gap-4 mt-8 lg:hidden">
        {images.map((src, index) => (
          <motion.div
            key={index}
            className="relative w-full h-48 rounded-lg overflow-hidden"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: (index + 8) * 0.1 }}
          >
            <Image
              src={src}
              alt={`Serviced Property Image ${index + 1}`}
              layout="fill"
              objectFit="cover"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
