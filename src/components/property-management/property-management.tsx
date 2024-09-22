'use client';

import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export function PropertyManagementComponent() {
  const [activeTab, setActiveTab] = useState('landlords');

  const content = {
    landlords: {
      title:
        'Guaranteed Rent, No Voids – Long-Term Stability Without the Hassle',
      description:
        "In response to the new Renters' Rights Bill, we provide landlords with long-term, guaranteed rent while removing the complexities of estate management. With our serviced accommodation model, you get guaranteed payments for 3-5 years, no voids, and zero callout costs.",
      mainFeature: {
        title: 'Comprehensive Property Care & Maintenance',
        description:
          "Our dedicated team manages your property with the highest standards, handling all maintenance and callouts so you don't have to, ensuring your investment remains in excellent condition for the long term.",
      },
      benefits: [
        {
          title: 'Guaranteed Rent for 3-5 Years',
          description:
            'Enjoy steady, guaranteed income for up to 5 years, eliminating the risk of void periods and financial uncertainty.',
        },
        {
          title: 'No Estate Management Fees or Callouts',
          description:
            'We cover all property management, including tenant issues and repairs, meaning you save on costly estate management fees and emergency callouts.',
        },
        {
          title: 'Adapt to New Legislation',
          description:
            "Our serviced accommodation model helps you avoid the regulatory challenges of the Renters' Rights Bill, such as eviction restrictions and rent control, offering greater control and flexibility.",
        },
        {
          title: 'Trusted Nationwide',
          description:
            'Join thousands of landlords who trust our services for long-term stability, high-quality care, and increased profitability.',
        },
      ],
      faqs: [
        {
          question: 'How does guaranteed rent work?',
          answer:
            'We offer guaranteed rent payments, regardless of occupancy, for 3-5 years, so you get stable income without tenant-related risks.',
        },
        {
          question: 'What services are included in the management fee?',
          answer:
            'Our fee covers everything: tenant sourcing, rent collection, property maintenance, legal compliance, and more – without additional estate management fees or unexpected callout costs.',
        },
        {
          question:
            'How does serviced accommodation differ from traditional letting?',
          answer:
            'With serviced accommodation, you get short-term stays, but we guarantee your rent for up to 5 years, ensuring no voids, fewer regulations, and hassle-free property management.',
        },
        {
          question: 'What happens if my property needs repairs?',
          answer:
            'Our team handles all maintenance and repairs, meaning you don’t have to worry about callout fees or finding contractors.',
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
          title: 'Long-Term Guaranteed Rent for Clients',
          description:
            'Help your clients secure guaranteed income for 3-5 years, with no voids or tenancy-related uncertainties.',
        },
        {
          title: 'No Estate Management Headaches',
          description:
            'Our model eliminates estate management fees and unexpected costs, providing clients with a streamlined, profitable option.',
        },
        {
          title: 'Increased Revenue Opportunities',
          description:
            'Serviced accommodation properties typically offer higher yields and faster turnovers, boosting your revenue while keeping clients happy.',
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

  return (
    <div className="min-h-screen bg-gray-100">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="w-full fixed top-0 z-10 bg-white shadow-md">
          <TabsTrigger value="landlords" className="w-1/2">
            For Landlords
          </TabsTrigger>
          <TabsTrigger value="agents" className="w-1/2">
            For Letting Agents
          </TabsTrigger>
        </TabsList>
        {['landlords', 'agents'].map((tab) => (
          <TabsContent key={tab} value={tab} className="mt-16">
            <div className="bg-gray-800 text-white py-20 px-4 text-center">
              <h1 className="text-4xl font-bold mb-4">{content[tab].title}</h1>
              <p className="max-w-2xl mx-auto">{content[tab].description}</p>
            </div>

            <div className="max-w-6xl mx-auto mt-12 px-4">
              <div className="bg-white rounded-lg shadow-md p-6 mb-12 flex items-center">
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold mb-2">
                    {content[tab].mainFeature.title}
                  </h2>
                  <p>{content[tab].mainFeature.description}</p>
                </div>
                <div className="w-1/3 ml-6">
                  <div className="bg-gray-200 h-48 rounded-lg"></div>
                </div>
              </div>

              <h2 className="text-2xl font-semibold mb-6">
                {tab === 'landlords'
                  ? 'Why partner with us?'
                  : 'Why Work With Us?'}
              </h2>
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {content[tab].benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-md p-6"
                  >
                    <h3 className="text-xl font-semibold mb-2">
                      {benefit.title}
                    </h3>
                    <p>{benefit.description}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-semibold mb-6">
                Frequently asked questions
              </h2>
              <div className="bg-white rounded-lg shadow-md p-6 mb-12">
                <Accordion type="single" collapsible>
                  {content[tab].faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger>{faq.question}</AccordionTrigger>
                      <AccordionContent>{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              <div className="bg-gray-200 rounded-lg p-8 text-center">
                <h2 className="text-2xl font-semibold mb-4">
                  {tab === 'landlords'
                    ? 'Still have questions?'
                    : 'Partner With Us'}
                </h2>
                <p className="mb-4">
                  {tab === 'landlords'
                    ? 'Get in touch with our team to learn more about our services and how we can help you.'
                    : "Interested in working with us? Let's discuss how we can grow together."}
                </p>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  {tab === 'landlords' ? 'Contact Us' : 'Get Started'}
                </button>
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
