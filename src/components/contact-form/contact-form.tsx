'use client';

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import Link from 'next/link';
import CustomButton from '../custom-button/custom-button';
import { ArrowUpRight } from 'lucide-react';
import ServiceBadge from '../custom-servicebadge/service-badge';

export function ContactFormComponent() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
    agreePolicy: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, agreePolicy: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-6 lg:p-8">
      <div className="lg:flex lg:space-x-12">
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <h1 className="text-3xl font-bold mb-4">How can we help?</h1>
          <p className="text-gray-500 text-sm mb-4">
            We are constantly working to raise the bar on our services. If you
            have any questions or concerns about your experience, please let us
            know. Our support concierges are available 24/7.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="lg:w-1/2 space-y-4">
          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="flex-1 mb-4 md:mb-0">
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                First name *
              </label>
              <Input
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First name"
                required
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Last name *
              </label>
              <Input
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last name"
                required
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email *
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Subject *
            </label>
            <Input
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="How can we help you?"
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Message *
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Go ahead, we're listening..."
              rows={4}
              required
            />
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="agreePolicy"
              checked={formData.agreePolicy}
              onCheckedChange={handleCheckboxChange}
            />
            <label htmlFor="agreePolicy" className="text-sm text-gray-500">
              You agree to our friendly{' '}
              <Link
                href="#"
                className="text-primary text-gray-500 hover:underline"
              >
                privacy policy
              </Link>
              .
            </label>
          </div>

          <div className="flex justify-center sm:justify-start">
            <CustomButton
              type="submit"
              text="Submit"
              props="bg-[#C59948] w-full text-white px-6"
              href="/success"
              textColor="text-white"
              hoverColor="hover:bg-[#B48838]"
              color="bg-[#C59948]"
              icon={<ArrowUpRight />}
            />
          </div>
        </form>
      </div>
      <div className="hidden text-center mt-8">
        <ServiceBadge text="Get In Touch" />
      </div>
      <div className="mt-12 lg:text-left">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <p className="text-gray-600">
          <a href="tel:+447840052351" className="hover:underline">
            +44 (0) 7840052351
          </a>
        </p>
        <p className="text-gray-600">
          <a href="mailto:info@luxstayventures.com" className="hover:underline">
            info@luxstayventures.com
          </a>
        </p>
      </div>
    </div>
  );
}
