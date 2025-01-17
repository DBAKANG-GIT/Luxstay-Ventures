// app/book/[property]/page.tsx
import { notFound } from 'next/navigation';
import PropertyListing from '@/components/luxury-apartment-listing';
import { properties } from '@/data/properties';

export default function PropertyPage({
  params,
}: {
  params: { property: string };
}) {
  const { property } = params;
  const propertyData = properties.find((p) => p.id === property);

  if (!propertyData) {
    notFound(); // Renders the Next.js 404 page
  }

  return <PropertyListing data={propertyData} />;
}
