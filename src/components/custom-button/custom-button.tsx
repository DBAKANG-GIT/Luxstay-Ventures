import { ReactElement } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

type CustomButtonProps = {
  text: string;
  icon?: ReactElement;
  color: string;
  textColor: string;
  hoverColor: string;
  href: string;
  props?: string;
  variant?:
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'link'
    | null;
  type?: 'button' | 'submit' | 'reset'; // Added type prop
};

export default function CustomButton({
  text,
  icon,
  color,
  textColor,
  hoverColor,
  href,
  props,
  variant,
  type = 'button', // Default type is 'button'
}: CustomButtonProps) {
  return (
    <Button
      className={`${color} ${textColor} px-4 py-2 hover:${hoverColor} transition-all duration-300 ease-in-out ${props}`}
      variant={variant || null}
      type={type} // Pass the type prop to the Button component
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
