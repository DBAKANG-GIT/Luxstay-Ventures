'use client';
import { Card, CardContent } from '@/components/ui/card';
import CustomButton from '../custom-button/custom-button';
import { ArrowUpRight } from 'lucide-react';
import imageSrc from '@/public/images/staybackdrop.jpeg';

export function ResponsiveStayCard() {
  return (
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), url('${imageSrc.src}')`,
        }}
      />
      <div className="relative h-full flex items-center justify-center p-4 sm:p-6 md:p-8">
        <Card className="w-full max-w-md bg-white/90 backdrop-blur-sm">
          <CardContent className="p-6 sm:p-8 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#333333]">
              Come stay with us!
            </h2>
            <p className="text-sm sm:text-base text-[#6C6C6C]">
              We believe you should have the comfort of your home wherever you
              go.
            </p>
            <div className="flex justify-center sm:justify-start">
              <CustomButton
                text="Learn more"
                props="bg-[#C59948] text-white px-6"
                href="/about"
                textColor="text-white"
                hoverColor="hover:bg-[#B48838]"
                color="bg-[#C59948]"
                icon={<ArrowUpRight />}
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
