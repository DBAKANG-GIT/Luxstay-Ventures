// custom-button.tsx
import { ReactElement, MouseEventHandler } from 'react';
import { useRouter } from 'next/navigation'; // or next/router in Next.js <13.4
import { Button } from '@/components/ui/button';

type CustomButtonProps = {
  text: string;
  icon?: ReactElement;
  color: string;
  textColor: string;
  hoverColor: string;
  props?: string;
  variant?:
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'link'
    | null;
  type?: 'button' | 'submit' | 'reset';
  isLoading?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  href?: string;
};

export default function CustomButton({
  text,
  icon,
  color,
  textColor,
  hoverColor,
  props,
  variant,
  type = 'button',
  isLoading = false,
  onClick,
  href,
}: CustomButtonProps) {
  return (
    <Button
      className={`${color} ${textColor} px-4 py-2 hover:${hoverColor} transition-all duration-300 ease-in-out ${props}`}
      variant={variant || undefined}
      type={type}
      isLoading={isLoading}
      onClick={onClick}
    >
      {/* Just show text + icon; remove <Link> */}
      <span className="flex items-center justify-center">
        {text}
        {icon && <span className="ml-2">{icon}</span>}
      </span>
    </Button>
  );
}
