'use client';

import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function PrivacyNoticeComponent() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const Section = ({
    title,
    children,
  }: {
    title: string;
    children: React.ReactNode;
  }) => (
    <div className="border-b border-gray-200 pb-4">
      <button
        className="flex justify-between items-center w-full text-left py-2"
        onClick={() => toggleSection(title)}
      >
        <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
        {activeSection === title ? (
          <ChevronUpIcon className="h-5 w-5 text-gray-500" />
        ) : (
          <ChevronDownIcon className="h-5 w-5 text-gray-500" />
        )}
      </button>
      {activeSection === title && (
        <div className="mt-4 text-gray-700 space-y-2">{children}</div>
      )}
    </div>
  );

  return (
    <div className="bg-white min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Luxstay Ventures Customer Privacy Notice
        </h1>
        <p className="text-sm text-custom-gold mb-8">
          Current as of September 2024
        </p>

        <div className="mb-8">
          <Button asChild>
            <a
              href="docs/privacy-notice.pdf"
              download="privacy-notice.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Privacy Notice (PDF)
            </a>
          </Button>
        </div>

        <div className="space-y-6">
          <Section title="Contact details">
            <p>Post: 483 Green Lanes, LONDON, N13 4BS, GB</p>
            <p>Email: info@luxstayventures.com</p>
          </Section>

          <Section title="What information we collect, use, and why">
            <h3 className="font-semibold mb-2">
              For providing and improving products and services:
            </h3>
            <ul className="list-disc pl-5 mb-4">
              <li>Names and contact details</li>
              <li>Addresses</li>
              <li>Gender</li>
              <li>Payment details</li>
              <li>Transaction data</li>
              <li>Usage data</li>
              <li>Special requests, preferences for room setup</li>
            </ul>

            <h3 className="font-semibold mb-2">
              For operation of client or customer accounts:
            </h3>
            <ul className="list-disc pl-5 mb-4">
              <li>Names and contact details</li>
              <li>Addresses</li>
              <li>Purchase or service history</li>
              <li>Account information</li>
              <li>Information used for security purposes</li>
              <li>Marketing preferences</li>
              <li>Technical data</li>
            </ul>

            <h3 className="font-semibold mb-2">
              For information updates or marketing purposes:
            </h3>
            <ul className="list-disc pl-5 mb-4">
              <li>Names and contact details</li>
              <li>Addresses</li>
              <li>Profile information</li>
              <li>Marketing preferences</li>
              <li>Purchase or account history</li>
              <li>Website and app user journey information</li>
              <li>IP addresses</li>
            </ul>

            <h3 className="font-semibold mb-2">
              To comply with legal requirements:
            </h3>
            <ul className="list-disc pl-5 mb-4">
              <li>Name</li>
              <li>Contact information</li>
              <li>Identification documents</li>
              <li>Client account information</li>
              <li>
                Any other personal information required to comply with legal
                obligations
              </li>
            </ul>

            <h3 className="font-semibold mb-2">To protect client welfare:</h3>
            <ul className="list-disc pl-5 mb-4">
              <li>Names and contact information</li>
              <li>Client account information</li>
              <li>Emergency contact details</li>
              <li>Health information</li>
            </ul>

            <h3 className="font-semibold mb-2">
              For dealing with queries, complaints or claims:
            </h3>
            <ul className="list-disc pl-5">
              <li>Names and contact details</li>
              <li>Address</li>
              <li>Payment details</li>
              <li>Account information</li>
              <li>Purchase or service history</li>
              <li>Photographs</li>
              <li>Customer or client accounts and records</li>
              <li>Information relating to health and safety</li>
              <li>Correspondence</li>
            </ul>
          </Section>

          <Section title="Lawful bases and data protection rights">
            <p className="mb-4">
              Our lawful bases for collecting and using your personal
              information include:
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li>Contract</li>
              <li>Legitimate interests</li>
              <li>Legal obligation</li>
              <li>Vital interests</li>
            </ul>
            <p className="mb-4">Your data protection rights include:</p>
            <ul className="list-disc pl-5 mb-4">
              <li>Right of access</li>
              <li>Right to rectification</li>
              <li>Right to erasure</li>
              <li>Right to restriction of processing</li>
              <li>Right to object to processing</li>
              <li>Right to data portability</li>
              <li>Right to withdraw consent</li>
            </ul>
            <p>
              To make a data protection rights request, please contact us using
              the contact details at the top of this privacy notice.
            </p>
          </Section>

          <Section title="Where we get personal information from">
            <ul className="list-disc pl-5">
              <li>Directly from you</li>
              <li>Suppliers and service providers</li>
            </ul>
          </Section>

          <Section title="How long we keep information">
            <h3 className="font-semibold mb-2">
              Luxstay Ventures Retention Policy
            </h3>

            <h4 className="font-semibold mb-2">Purpose</h4>
            <p>
              This retention policy outlines how Luxstay Ventures manages
              personal information collected from clients, employees, and other
              stakeholders. The policy ensures compliance with data protection
              regulations and promotes transparency.
            </p>

            <h4 className="font-semibold mb-2">Retention Schedule</h4>

            <h5 className="font-semibold mb-2">Booking Information</h5>
            <ul className="list-disc pl-5 mb-4">
              <li>
                <strong>Types of Information:</strong> Names, contact details,
                payment information, stay history.
              </li>
              <li>
                <strong>Retention Period:</strong> 6 years after the last
                booking.
              </li>
              <li>
                <strong>Reason:</strong> Compliance with tax regulations and to
                resolve any potential disputes.
              </li>
            </ul>

            <h5 className="font-semibold mb-2">
              Customer Feedback and Complaints
            </h5>
            <ul className="list-disc pl-5 mb-4">
              <li>
                <strong>Types of Information:</strong> Survey responses,
                complaints records.
              </li>
              <li>
                <strong>Retention Period:</strong> 2 years.
              </li>
              <li>
                <strong>Reason:</strong> To improve service quality and monitor
                ongoing issues.
              </li>
            </ul>

            <h5 className="font-semibold mb-2">Marketing Data</h5>
            <ul className="list-disc pl-5 mb-4">
              <li>
                <strong>Types of Information:</strong> Email addresses for
                newsletters, promotional materials.
              </li>
              <li>
                <strong>Retention Period:</strong> Until consent is withdrawn or
                2 years from the last engagement.
              </li>
              <li>
                <strong>Reason:</strong> To maintain accurate marketing lists
                and comply with data protection regulations.
              </li>
            </ul>

            <h5 className="font-semibold mb-2">CCTV Footage</h5>
            <ul className="list-disc pl-5 mb-4">
              <li>
                <strong>Types of Information:</strong> Video recordings for
                security purposes.
              </li>
              <li>
                <strong>Retention Period:</strong> 30 days.
              </li>
              <li>
                <strong>Reason:</strong> For security and safety compliance.
              </li>
            </ul>

            <h5 className="font-semibold mb-2">Contractual Agreements</h5>
            <ul className="list-disc pl-5 mb-4">
              <li>
                <strong>Types of Information:</strong> Terms of service, rental
                agreements.
              </li>
              <li>
                <strong>Retention Period:</strong> 6 years after the contract
                ends.
              </li>
              <li>
                <strong>Reason:</strong> To address any legal claims that may
                arise.
              </li>
            </ul>

            <h5 className="font-semibold mb-2">Legal Documents</h5>
            <ul className="list-disc pl-5 mb-4">
              <li>
                <strong>Types of Information:</strong> Incident reports, legal
                claims.
              </li>
              <li>
                <strong>Retention Period:</strong> 6 years after resolution.
              </li>
              <li>
                <strong>Reason:</strong> Compliance with legal obligations.
              </li>
            </ul>

            <h5 className="font-semibold mb-2">
              Employee Information (if applicable)
            </h5>
            <ul className="list-disc pl-5 mb-4">
              <li>
                <strong>Types of Information:</strong> Personal details, payroll
                information.
              </li>
              <li>
                <strong>Retention Period:</strong> 6 years after employment
                ends.
              </li>
              <li>
                <strong>Reason:</strong> Compliance with employment law and
                potential disputes.
              </li>
            </ul>

            <h4 className="font-semibold mb-2">Review and Deletion</h4>
            <p>
              Luxstay Ventures will regularly review its retention schedule to
              ensure compliance with legal requirements. Personal information
              that is no longer necessary will be securely deleted or
              anonymized.
            </p>

            <h4 className="font-semibold mb-2">Data Security</h4>
            <p>
              All retained information will be stored securely, with access
              limited to authorized personnel only. Appropriate technical and
              organizational measures will be implemented to protect personal
              data.
            </p>

            <h4 className="font-semibold mb-2">Policy Review</h4>
            <p>
              This retention policy will be reviewed annually or as necessary to
              accommodate changes in legal requirements or business practices.
            </p>
          </Section>

          <Section title="Who we share information with">
            <ul className="list-disc pl-5">
              <li>Insurance companies, brokers or other intermediaries</li>
              <li>Professional or legal advisors</li>
              <li>Regulatory authorities</li>
              <li>
                Organisations we&apos;re legally obliged to share personal
                information with
              </li>
            </ul>
          </Section>

          <Section title="How to complain">
            <p className="mb-4">
              If you have any concerns about our use of your personal data, you
              can make a complaint to us using the contact details at the top of
              this privacy notice.
            </p>
            <p className="mb-4">
              If you remain unhappy with how we&apos;ve used your data after
              raising a complaint with us, you can also complain to the ICO.
            </p>
            <p className="font-semibold">The ICO&apos;s address:</p>
            <p>Information Commissioner&apos;s Office</p>
            <p>Wycliffe House</p>
            <p>Water Lane</p>
            <p>Wilmslow</p>
            <p>Cheshire</p>
            <p>SK9 5AF</p>
            <p className="mt-4">Helpline number: 0303 123 1113</p>
            <p>
              Website:{' '}
              <a
                href="https://www.ico.org.uk/make-a-complaint"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.ico.org.uk/make-a-complaint
              </a>
            </p>
          </Section>
        </div>
      </div>
    </div>
  );
}
