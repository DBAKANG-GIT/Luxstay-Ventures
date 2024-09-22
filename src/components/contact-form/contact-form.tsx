'use client';

import { FC } from 'react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import CustomButton from '../custom-button/custom-button';
import { sendEmail } from '../../../app/utils/send-email';

export type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
  agreePolicy: boolean;
};

const ContactFormComponent: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  async function onSubmit(data: FormData) {
    if (!data.agreePolicy) {
      alert('You must agree to the privacy policy.');
      return;
    }

    sendEmail(data);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-6xl mx-auto p-4 md:p-6 lg:p-8"
    >
      <div className="lg:flex lg:space-x-12">
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <h1 className="text-3xl font-bold mb-4">How can we help?</h1>
          <p className="text-gray-500 text-sm mb-4">
            We are constantly working to raise the bar on our services. If you
            have any questions or concerns about your experience, please let us
            know. Our support concierges are available 24/7.
          </p>
        </div>

        <div className="lg:w-1/2 space-y-4">
          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="flex-1 mb-4 md:mb-0">
              <label
                htmlFor="firstName"
                className="mb-3 block text-base font-medium text-black"
              >
                First name *
              </label>
              <input
                id="firstName"
                placeholder="First name"
                className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
                {...register('firstName', { required: true })}
              />
              {errors.firstName && (
                <span className="text-red-500">First name is required</span>
              )}
            </div>
            <div className="flex-1">
              <label
                htmlFor="lastName"
                className="mb-3 block text-base font-medium text-black"
              >
                Last name *
              </label>
              <input
                id="lastName"
                placeholder="Last name"
                className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
                {...register('lastName', { required: true })}
              />
              {errors.lastName && (
                <span className="text-red-500">Last name is required</span>
              )}
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="mb-3 block text-base font-medium text-black"
            >
              Email *
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
              {...register('email', { required: true })}
            />
            {errors.email && (
              <span className="text-red-500">Email is required</span>
            )}
          </div>
          <div>
            <label
              htmlFor="subject"
              className="mb-3 block text-base font-medium text-black"
            >
              Subject *
            </label>
            <input
              id="subject"
              placeholder="How can we help you?"
              className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
              {...register('subject', { required: true })}
            />
            {errors.subject && (
              <span className="text-red-500">Subject is required</span>
            )}
          </div>
          <div>
            <label
              htmlFor="message"
              className="mb-3 block text-base font-medium text-black"
            >
              Message *
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="Go ahead, we're listening..."
              className="w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
              {...register('message', { required: true })}
            ></textarea>
            {errors.message && (
              <span className="text-red-500">Message is required</span>
            )}
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="agreePolicy"
              className="h-4 w-4 text-purple-500 focus:ring-purple-400 border-gray-300 rounded"
              {...register('agreePolicy', { required: true })}
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
            {errors.agreePolicy && (
              <span className="text-red-500">
                You must agree to the privacy policy
              </span>
            )}
          </div>

          <div className="flex justify-center sm:justify-start">
            <CustomButton
              href=""
              type="submit"
              text="Submit"
              props="bg-[#C59948] w-full text-white px-6"
              textColor="text-white"
              hoverColor="hover:bg-[#B48838]"
              color="bg-[#C59948]"
              icon={<ArrowUpRight />}
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactFormComponent;
