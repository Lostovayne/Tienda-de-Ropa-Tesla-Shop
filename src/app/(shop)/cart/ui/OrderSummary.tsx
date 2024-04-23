"use client";

import { useCartStore } from "@/store";
import { currencyFormat } from "@/utils/currencyFormat";
import { useEffect, useState } from "react";

export const OrderSummary = () => {
  const [loaded, setLoaded] = useState(false);
  const { itemsInCart, subTotal, tax, total } = useCartStore((state) => state.getSummaryInformation());

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <div className="grid grid-cols-2">
      <span className="font-medium text-base">No. Productos</span>
      <span className="text-right font-medium text-base">
        {itemsInCart === 1 ? "1 Artículo" : `${itemsInCart} Artículos`}
      </span>

      <span className="font-medium text-base">Subtotal</span>
      <span className="text-right font-medium text-base">{currencyFormat(subTotal)}</span>

      <span className="text-base">Impuestos (15%) </span>
      <span className="text-right font-medium text-base">{currencyFormat(tax)}</span>

      <span className="mt-5 text-xl">Total:</span>
      <span className="text-right mt-5 font-medium text-xl">{currencyFormat(total)}</span>
    </div>
  );
};
