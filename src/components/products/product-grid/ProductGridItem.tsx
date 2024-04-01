"use client";
import { Product } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Props {
  product: Product;
}

export const ProductGridItem = ({ product }: Props) => {
  const [displayImage, setDisplayImage] = useState(product.images[0]);

  return (
    <div className="rounded-md transition-all overflow-hidden fade-in">
      <Link href={`/product/${product.slug}`}>
        <Image
          src={`/products/${displayImage}`}
          alt={product.title}
          width={500}
          height={500}
          className="shadow rounded w-full object-cover"
          onMouseEnter={() => setDisplayImage(product.images[1])}
          onMouseLeave={() => setDisplayImage(product.images[0])}
        />
      </Link>
      <div className="flex flex-col p-4">
        <Link href={`/product/${product.slug}`} className="font-medium text-sm sm:text-base hover:text-gray-500">
          {product.title}
        </Link>
        <span className="font-bold text-sm">${product.price}</span>
      </div>
    </div>
  );
};
