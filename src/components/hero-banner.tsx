interface HeroBannerProps {
  text: string;
  imageUrl: string;
}

export default function HeroBanner({ text, imageUrl }: HeroBannerProps) {
  return (
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] flex">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="absolute inset-0 flex">
        <div className="flex-1 opacity-75" style={{ background: '#0A0A0C' }} />
        <div
          className="flex-1 opacity-75"
          style={{
            background:
              'linear-gradient(90deg, #0A0A0C 8.4%, rgba(10, 10, 12, 0.00) 56.4%)',
          }}
        />
      </div>
      <div className="relative flex-1 flex items-center justify-start p-8 sm:p-12 md:p-16 lg:p-24">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold max-w-[80%] sm:max-w-[70%] md:max-w-[60%] lg:max-w-[50%] leading-tight">
          {text}
        </h1>
      </div>
    </div>
  );
}
