'use client';

import { useDiscountPopup } from "@/hooks/useDiscountPopup";
import DiscountPopup from "@/components/DiscountPopup";

export default function DiscountPopupWrapper() {
  const { isOpen, closePopup } = useDiscountPopup();

  return <DiscountPopup isOpen={isOpen} onClose={closePopup} />;
} 