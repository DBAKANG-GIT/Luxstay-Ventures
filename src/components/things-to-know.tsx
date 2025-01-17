'use client';

import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

const ThingsToKnow: React.FC = () => (
  <div className="space-y-4">
    <h3 className="text-xl font-semibold">Things to know</h3>
    <Tabs defaultValue="house-rules">
      {/* Top-level tabs */}
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="house-rules">House rules</TabsTrigger>
        <TabsTrigger value="safety">Safety &amp; property</TabsTrigger>
        <TabsTrigger value="cancellation">Cancellation policy</TabsTrigger>
      </TabsList>

      {/* House Rules */}
      <TabsContent value="house-rules" className="mt-4">
        <ul className="list-disc pl-5 space-y-2">
          <li>Check-in: 3:00 PM - 11:00 PM</li>
          <li>Checkout: 11:00 AM</li>
          <li>No smoking</li>
          <li>No pets</li>
          <li>No parties or events</li>
        </ul>
      </TabsContent>

      {/* Safety & Property */}
      <TabsContent value="safety" className="mt-4">
        <ul className="list-disc pl-5 space-y-2">
          <li>Security camera/recording device</li>
          <li>Carbon monoxide alarm</li>
          <li>Smoke alarm</li>
          <li>Must climb stairs</li>
        </ul>
      </TabsContent>

      {/* Cancellation Policy */}
      <TabsContent value="cancellation" className="mt-4">
        <Tabs defaultValue="fullPaymentPolicy">
          <TabsList>
            <TabsTrigger value="fullPaymentPolicy">
              Full Payment Policy
            </TabsTrigger>
            <TabsTrigger value="depositPolicy">Deposit Policy</TabsTrigger>
          </TabsList>

          {/* FULL PAYMENT MODEL */}
          <TabsContent value="fullPaymentPolicy" className="mt-4">
            <h3>Full Payment at Booking</h3>
            <p>
              We charge the <strong>total amount</strong> of your reservation at
              the time of booking. Please review the cancellation policy below.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Free Cancellation (48 hours after booking):</strong> You
                may cancel within 48 hours of making the booking for a
                <strong> full refund</strong>.
              </li>
              <li>
                <strong>Up to 14 Days Before Check-In:</strong> If you cancel at
                least 14 days before your check-in date, you’ll receive a
                <strong> 100% refund</strong> of the total amount paid.
              </li>
              <li>
                <strong>7–13 Days Before Check-In:</strong> If you cancel
                between 7 and 13 days before check-in, you’ll receive a
                <strong> 50% refund</strong>.
              </li>
              <li>
                <strong>Less Than 7 Days Before Check-In:</strong> If you cancel
                fewer than 7 days before check-in, <strong>no refund</strong>{' '}
                will be issued.
              </li>
              <li>
                <strong>No-Shows:</strong> If you do not arrive on your
                scheduled check-in date without notifying us,{' '}
                <strong>no refund</strong> will be issued.
              </li>
            </ul>
            <p className="mt-2">
              <em>
                <strong>Note (UK):</strong> Holiday accommodation bookings for
                specific dates are generally exempt from the standard 14-day
                “cooling-off” period under the UK Consumer Contracts
                Regulations. However, we strive to offer a fair and transparent
                policy in line with the Consumer Rights Act 2015.
              </em>
            </p>
          </TabsContent>

          {/* DEPOSIT MODEL */}
          <TabsContent value="depositPolicy" className="mt-4">
            <h3>Deposit Model</h3>
            <p>
              We charge a <strong>deposit</strong> at the time of booking, with
              the balance due closer to your check-in date.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Deposit Amount:</strong> 25% of the total reservation
                cost is charged when you book. This deposit secures your stay.
              </li>
              <li>
                <strong>Balance Payment:</strong> The remaining 75% is charged
                <strong> 14 days</strong> before check-in.
              </li>
              <li>
                <strong>Free Cancellation (48 hours after booking):</strong>{' '}
                Cancel within 48 hours of making the booking for a
                <strong> full refund of your deposit</strong>.
              </li>
              <li>
                <strong>
                  Before Balance Is Paid (More Than 14 Days Before Check-In):
                </strong>
                You may cancel and receive a{' '}
                <strong>100% refund of your deposit</strong>.
              </li>
              <li>
                <strong>
                  Before Balance Is Paid (7–13 Days Before Check-In):
                </strong>
                Cancel 7–13 days before check-in to receive a
                <strong> 50% refund of your deposit</strong>.
              </li>
              <li>
                <strong>
                  After Balance Is Paid (Less Than 7 Days Before Check-In):
                </strong>
                Once the remaining balance is charged,{' '}
                <strong>no refund</strong> of the deposit or balance will be
                issued if you cancel.
              </li>
              <li>
                <strong>No-Shows:</strong> If you do not arrive on your
                scheduled check-in date without notifying us,{' '}
                <strong>no refund</strong> will be issued.
              </li>
            </ul>
            <p className="mt-2">
              <em>
                <strong>Note (UK):</strong> In the UK, holiday accommodation for
                specific dates is typically exempt from the 14-day cooling-off
                period. Our deposit policy is designed to be fair and
                transparent, in line with the Consumer Rights Act 2015.
              </em>
            </p>
          </TabsContent>
        </Tabs>
      </TabsContent>
    </Tabs>
  </div>
);

export default ThingsToKnow;
