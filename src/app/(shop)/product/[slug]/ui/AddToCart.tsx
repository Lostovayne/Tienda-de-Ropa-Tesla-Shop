"use client";

import { QuantitySelector, SizeSelector } from "@/components";
import { Product, Size } from "@/interfaces";
import { useState } from "react";

interface Props {
  product: Product;
}

const AddToCart = ({ product }: Props) => {
  const [size, setSize] = useState<Size | undefined>();
  const [quantity, setQuantity] = useState(1);
  const [posted, setPosted] = useState(false);

  const addToCart = () => {
    setPosted(true);
    console.log({
      size,
      quantity,
    });
  };

  return (
    <>
      {posted && !size && (
        <span className="text-red-800 py-2 font-medium text-sm px-4 bg-red-100 fade-in">
          Debe de seleccionar una talla
        </span>
      )}

      {/* Selector de Tallas */}
      <SizeSelector selectedSize={size} availableSizes={product.sizes} onSizeChanged={setSize} />
      {/* Selector de Cantidad */}
      <QuantitySelector quantity={quantity} onQuantityChanged={setQuantity} />
      {/* Button */}
      <button className="btn-primary my-5" onClick={addToCart}>
        Agregar al carrito
      </button>
    </>
  );
};
export default AddToCart;
