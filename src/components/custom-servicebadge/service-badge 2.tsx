import React from 'react';

type ServiceBadgeProps = {
  text: string;
};

const ServiceBadge: React.FC<ServiceBadgeProps> = ({ text }) => (
  <div className="inline-block border bg-gold text-custom-gold px-4 py-2 text-sm mb-4">
    {text}
  </div>
);

export default ServiceBadge;
