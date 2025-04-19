import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export const useDiscountPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Only show popup on home page and products page
    const allowedPaths = ['/', '/products'];
    if (!allowedPaths.includes(pathname)) {
      return;
    }

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, [pathname]);

  const closePopup = () => {
    setIsOpen(false);
  };

  return {
    isOpen,
    closePopup,
  };
}; 