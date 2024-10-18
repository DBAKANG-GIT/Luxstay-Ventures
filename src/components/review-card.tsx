'use client'

import React from 'react'

interface ReviewCardProps {
  name: string
  date: string
  content: string
}

const ReviewCard: React.FC<ReviewCardProps> = ({ name, date, content }) => (
  <div className="border-b border-gray-200 py-4">
    <div className="flex items-center gap-2 mb-2">
      <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
      <div>
        <h4 className="font-semibold">{name}</h4>
        <p className="text-sm text-gray-600">{date}</p>
      </div>
    </div>
    <p className="text-gray-700">{content}</p>
  </div>
)

export default ReviewCard