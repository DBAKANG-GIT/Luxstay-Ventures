'use client';
import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import landlordImage from '../../../public/images/landlord.png';
import careImage from '@public/images/room.jpeg';
import {
  ChevronDown,
  Home,
  DollarSign,
  Shield,
  Award,
  Briefcase,
} from 'lucide-react';
import CustomButton from '../custom-button/custom-button';
import useNavigateWithSpinner from '@/hook/use-navigate-with-spinner';

// Define a type for the valid tab keys
type TabKey = 'landlords' | 'agents';

export function PropertyManagementComponent() {
  const [activeTab, setActiveTab] = useState<TabKey>('landlords');
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const content: Record<
    TabKey,
    {
      title: string;
      description: string;
      mainFeature: {
        title: string;
        description: string;
      };
      benefits: {
        icon: React.ComponentType<{ className?: string }>;
        title: string;
        description: string;
      }[];
      faqs: {
        question: string;
        answer: string;
      }[];
    }
  > = {
    landlords: {
      title: 'Guaranteed Rent – Stress-Free, Long-Term Income',
      description:
        'With our serviced accommodation model, we guarantee your rent for 3-5 years, with no voids, no tenant issues, and zero management fees. We handle everything, ensuring your property is well maintained, while you enjoy a hassle-free, consistent income.',
      mainFeature: {
        title: 'Complete Property Care',
        description:
          'We ensure that your property is kept to the highest standard, managing all aspects of cleaning, maintenance, and tenant relations, so you don’t have to lift a finger.',
      },
      benefits: [
        {
          icon: Home,
          title: 'Long-Term Guaranteed Rent',
          description:
            'No need to worry about tenants or void periods. We ensure a steady income for up to 5 years with guaranteed rent, even if the property is vacant.',
        },
        {
          icon: DollarSign,
          title: 'No Hidden Costs',
          description:
            'We take care of everything – from tenant management to property upkeep – with no extra fees. This means no surprise maintenance costs or management fees.',
        },
        {
          icon: Shield,
          title: 'Secure & Reliable',
          description:
            'We offer complete transparency and reliability with clear agreements and a professional team ensuring your property is in the best hands.',
        },
        {
          icon: Award,
          title: 'Tailored to Your Needs',
          description:
            'We understand that each property is unique. Our approach is flexible and designed to fit your specific requirements, ensuring you receive the best returns with minimal hassle.',
        },
      ],
      faqs: [
        {
          question: 'How does guaranteed rent work?',
          answer:
            'We offer a contract where you receive fixed rent payments for up to 5 years, regardless of occupancy. This guarantees your income without the typical risks of tenant turnover or voids.',
        },
        {
          question: 'What is included in your management service?',
          answer:
            'Our management service includes everything from sourcing tenants, property maintenance, and handling repairs, to ensuring compliance with legal regulations – all at no additional cost to you.',
        },
        {
          question: 'Who will stay in my property?',
          answer:
            'We host professionals, contractors, and corporate clients. All guests undergo thorough checks, ensuring only trusted individuals stay in your property, while we handle all guest communication and maintenance.',
        },
        {
          question: 'What happens if repairs are needed?',
          answer:
            'We take full responsibility for repairs and maintenance, ensuring your property is always well-maintained without you having to worry about callout charges or finding contractors.',
        },
      ],
    },

    agents: {
      title: 'Expand Your Portfolio with Serviced Accommodation',
      description:
        'As new rental regulations impact traditional letting, serviced accommodation offers a secure and profitable alternative. Partner with us to offer your clients guaranteed rent, long-term stability, and no management headaches.',
      mainFeature: {
        title: 'Benefits for Letting Agents in a Changing Market',
        description:
          'Serviced accommodation provides guaranteed returns, flexibility, and less regulatory burden, helping you stay ahead in a shifting market.',
      },
      benefits: [
        {
          icon: Home,
          title: 'Long-Term Guaranteed Rent for Clients',
          description:
            'Help your clients secure guaranteed income for 3-5 years, with no voids or tenancy-related uncertainties.',
        },
        {
          icon: DollarSign,
          title: 'No Estate Management Headaches',
          description:
            'Our model eliminates estate management fees and unexpected costs, providing clients with a streamlined, profitable option.',
        },
        {
          icon: Shield,
          title: 'Increased Revenue Opportunities',
          description:
            'Serviced accommodation properties typically offer higher yields and faster turnovers, boosting your revenue while keeping clients happy.',
        },
        {
          icon: Briefcase,
          title: 'Professional Support',
          description:
            'Our experienced team provides ongoing support and guidance, ensuring that your clients receive the best possible service and returns.',
        },
      ],
      faqs: [
        {
          question: 'What does partnering with you involve?',
          answer:
            'We work with you to integrate serviced accommodation into your portfolio, offering your clients a more secure and profitable alternative to traditional lets.',
        },
        {
          question: 'How can letting agents benefit?',
          answer:
            'Agents benefit from increased revenue through higher-yield properties, while offering clients long-term guaranteed rent and minimal hassle.',
        },
        {
          question: "Is this compliant with the Renters' Rights Bill?",
          answer:
            'Yes, serviced accommodation operates under different terms from long-term lets, allowing more flexibility and ensuring compliance with changing regulations.',
        },
      ],
    },
  };
  const { isLoading, navigate } = useNavigateWithSpinner();

  return (
    <div className="min-h-screen bg-white">
      <div className="relative h-[600px] lg:h-[800px]">
        <Image
          src={landlordImage}
          alt="Luxury property"
          layout="fill"
          objectFit="cover"
          className="brightness-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-black bg-opacity-50 p-2 rounded-lg mb-8"
          >
            <button
              onClick={() => setActiveTab('landlords')}
              className={cn(
                'px-4 py-2 rounded-lg transition-all duration-300 text-sm md:text-base',
                activeTab === 'landlords'
                  ? 'bg-white text-black'
                  : 'bg-transparent hover:bg-white/20'
              )}
            >
              For Landlords
            </button>
            <button
              onClick={() => setActiveTab('agents')}
              className={cn(
                'px-4 py-2 rounded-lg transition-all duration-300 text-sm md:text-base',
                activeTab === 'agents'
                  ? 'bg-white text-black'
                  : 'bg-transparent hover:bg-white/20'
              )}
            >
              For Letting Agents
            </button>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-5xl font-bold mb-4 text-center max-w-4xl"
          >
            {content[activeTab].title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg md:text-xl text-center max-w-2xl"
          >
            {content[activeTab].description}
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center mb-16"
        >
          <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {content[activeTab].mainFeature.title}
            </h2>
            <p className="text-lg">
              {content[activeTab].mainFeature.description}
            </p>
          </div>
          <div className="md:w-1/2">
            <Image
              src={careImage}
              alt="Property maintenance"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-bold mb-8 text-center"
        >
          Why partner with us?
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {content[activeTab].benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <benefit.icon className="w-12 h-12 text-custom-gold mb-4" />
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p>{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-bold mb-8 text-center"
        >
          Frequently asked questions
        </motion.h2>
        <div className="space-y-6 mb-16">
          {content[activeTab].faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-100 rounded-lg shadow-md overflow-hidden"
            >
              <button
                onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                className="flex justify-between items-center w-full p-6 text-left"
              >
                <h3 className="text-xl font-semibold">{faq.question}</h3>
                <ChevronDown
                  className={cn(
                    'w-6 h-6 transition-transform duration-300',
                    activeFaq === index ? 'transform rotate-180' : ''
                  )}
                />
              </button>
              <div
                className={cn(
                  'overflow-hidden transition-all duration-300',
                  activeFaq === index ? 'max-h-96 p-6 pt-0' : 'max-h-0'
                )}
              >
                <p>{faq.answer}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-lighter-grey text-[#333] p-8 rounded-lg text-center shadow-xl"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {activeTab === 'landlords'
              ? 'Ready to secure your rental income?'
              : 'Ready to expand your portfolio?'}
          </h2>
          <p className="mb-6 text-sm sm:text-base text-[#6C6C6C]">
            {activeTab === 'landlords'
              ? 'Get in touch with our team to learn how we can provide you with guaranteed rent and hassle-free property management.'
              : "Let's discuss how serviced accommodation can boost your agency's offerings and revenue."}
          </p>

          <CustomButton
            href="/contact"
            text={activeTab === 'landlords' ? 'Get Started' : 'Partner With Us'}
            color="bg-gold-accent-color"
            textColor="text-white"
            hoverColor="bg-electric-green-500"
            props="shadow-md hover:shadow-lg"
            isLoading={isLoading}
            onClick={() => navigate('/contact')}
          />
        </motion.div>
      </div>
    </div>
  );
}
