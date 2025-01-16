// app/book/[property]/page.tsx
import { notFound, redirect } from 'next/navigation';
import LuxuryApartmentListing from '@/components/luxury-apartment-listing';

export default function PropertyPage({
  params,
}: {
  params: { property: string };
}) {
  const { property } = params;

  // property could be 'watford-escape' or 'brighton-bliss'
  switch (property) {
    case 'watford-escape':
      return <LuxuryApartmentListing />;

    case 'brighton-bliss':
      // 1) If you have a dedicated Brighton listing component, render it:
      //    return <BrightonListing />;
      //
      // 2) If you just want to redirect to some external link or another internal route:
      //    redirect('https://www.your-brighton-site.com');
      //
      // For example:
      redirect(
        'https://book.luxstayventures.com/listings?city=Brighton+and+Hove'
      ); // or an external link

    default:
      // If the property slug is unknown, you can handle gracefully:
      notFound(); // Renders the Next.js 404 page
  }
}
