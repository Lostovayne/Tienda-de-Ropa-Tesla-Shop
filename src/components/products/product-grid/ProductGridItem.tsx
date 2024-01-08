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
        <div className="rounded-md overflow-hidden transition-all fade-in">
            <Link href={`/product/${product.slug}`}>
                <Image
                    src={`/products/${displayImage}`}
                    alt={product.title}
                    width={500}
                    height={500}
                    className="w-full object-cover rounded shadow"
                    onMouseEnter={() => setDisplayImage(product.images[1])}
                    onMouseLeave={() => setDisplayImage(product.images[0])}
                />
            </Link>
            <div className="p-4 flex flex-col">
                <Link
                    href={`/product/${product.slug}`}
                    className="text-sm sm:text-base font-medium hover:text-gray-500"
                >
                    {product.title}
                </Link>
                <span className="text-sm font-bold">${product.price}</span>
            </div>
        </div>
    );
};
