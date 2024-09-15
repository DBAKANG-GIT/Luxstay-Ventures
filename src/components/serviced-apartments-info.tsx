interface ServicedApartmentsInfoProps {
  title: string;
  content: string;
}

export function ServicedApartmentsInfo({
  title,
  content,
}: ServicedApartmentsInfoProps) {
  return (
    <div className="bg-white p-6 sm:p-8 md:p-10 lg:p-12 mx-auto container">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-gray-800 sm:text-start">
        {title}
      </h1>
      <div className="text-gray-700 space-y-4 text-sm sm:text-base md:text-lg">
        {content &&
          content
            .split('\n\n')
            .map((paragraph, index) => <p key={index}>{paragraph}</p>)}
      </div>
    </div>
  );
}
