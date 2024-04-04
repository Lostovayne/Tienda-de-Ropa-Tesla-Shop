"use client";

import { QuantitySelector } from "@/components";
import { useCartStore } from "@/store";
import Image from "next/image";
import Link from "next/link";

export const ProductsInCart = () => {
  const updateProductQuantity = useCartStore((state) => state.updateProductQuantity);
  const productsInCart = useCartStore((state) => state.cart);
  const removeProduct = useCartStore((state) => state.removeProduct);
  return (
    <>
      {productsInCart.map((product) => (
        <div key={`${product.slug}-${product.size} `} className="flex mb-5 xl:mb-3">
          <Image
            src={`/products/${product.image}`}
            alt={product.title}
            width={100}
            height={100}
            className="mr-5 border rounded-xl w-[100px] h-[100px] object-fill"
          />
          <div>
            <Link className="hover:underline hover:cursor-pointer" href={`/product/${product.slug}`}>
              <p>
                {product.size} - {product.title}
              </p>
            </Link>
            <p>${product.price}</p>
            <QuantitySelector
              quantity={product.quantity}
              onQuantityChanged={(quantity) => updateProductQuantity(product, quantity)}
            />
            <button className="underline" onClick={() => removeProduct(product)}>
              Remover
            </button>
          </div>
        </div>
      ))}
    </>
  );
};
