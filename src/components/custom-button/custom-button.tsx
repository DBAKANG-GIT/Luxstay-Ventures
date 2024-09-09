import { ReactElement } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

type CustomButtonProps = {
  text: string;
  icon?: ReactElement;
  href: string;
  props?: string;
};

export default function CustomButton({
  text,
  icon,
  href,
  props,
}: CustomButtonProps) {
  return (
    <Button
      className={`bg-gold-accent-color text-white px-4 py-2 hover:bg-opacity-90 transition-all duration-300 ease-in-out hover:bg-electric-green-500 ${props}`}
      variant="outline"
    >
      <Link href={href}>
        <span className="flex items-center justify-center">
          {text}
          {icon && <span className="ml-2">{icon}</span>}
        </span>
      </Link>
    </Button>
  );
}
