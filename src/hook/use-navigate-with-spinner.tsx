'use client';

import React from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function useNavigateWithSpinner() {
  const router = useRouter();
  const pathname = usePathname();
  const [isLoading, setIsLoading] = React.useState(false);

  function navigate(path: string) {
    // If we’re already on path, don’t do anything
    if (pathname === path) {
      return;
    }
    setIsLoading(true);
    router.push(path);
  }

  // Whenever the pathname changes, reset
  React.useEffect(() => {
    setIsLoading(false);
  }, [pathname]);

  return { isLoading, navigate };
}
