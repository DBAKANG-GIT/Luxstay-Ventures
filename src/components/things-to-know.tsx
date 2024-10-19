'use client'

import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const ThingsToKnow: React.FC = () => (
  <div className="space-y-4">
    <h3 className="text-xl font-semibold">Things to know</h3>
    <Tabs defaultValue="house-rules">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="house-rules">House rules</TabsTrigger>
        <TabsTrigger value="safety">Safety &amp; property</TabsTrigger>
        <TabsTrigger value="cancellation">Cancellation policy</TabsTrigger>
      </TabsList>
      <TabsContent value="house-rules" className="mt-4">
        <ul className="list-disc pl-5 space-y-2">
          <li>Check-in: 3:00 PM - 8:00 PM</li>
          <li>Checkout: 11:00 AM</li>
          <li>No smoking</li>
          <li>No pets</li>
          <li>No parties or events</li>
        </ul>
      </TabsContent>
      <TabsContent value="safety" className="mt-4">
        <ul className="list-disc pl-5 space-y-2">
          <li>Security camera/recording device</li>
          <li>Carbon monoxide alarm</li>
          <li>Smoke alarm</li>
          <li>Must climb stairs - 2nd floor apartment</li>
        </ul>
      </TabsContent>
      <TabsContent value="cancellation" className="mt-4">
        <p>Free cancellation for 48 hours after booking. After that, cancel before 3:00 PM on the day of check-in and get a full refund, minus the service fee.</p>
      </TabsContent>
    </Tabs>
  </div>
)

export default ThingsToKnow