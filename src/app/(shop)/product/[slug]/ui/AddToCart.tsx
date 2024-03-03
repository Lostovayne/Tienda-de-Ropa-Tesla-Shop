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
    console.log({ size, quantity,product});
    // TODO: Add to cart
  
  };

  return (
    <>
      {posted && !size && (
        <span className="bg-red-100 px-4 py-2 font-medium text-red-800 text-sm fade-in">
          Debe de seleccionar una talla
        </span>
      )}

      {/* Selector de Tallas */}
      <SizeSelector selectedSize={size} availableSizes={product.sizes} onSizeChanged={setSize} />
      {/* Selector de Cantidad */}
      <QuantitySelector quantity={quantity} onQuantityChanged={setQuantity} />
      {/* Button */}
      <button className="my-5 btn-primary" onClick={addToCart}>
        Agregar al carrito
      </button>
    </>
  );
};
export default AddToCart;
