"use client";
import { getStockMySlug } from "@/actions/products/get-stock-by-slug";
import { titleFont } from "@/config/fonts";
import { cn } from "@/lib/twMerge";
import { useEffect, useState } from "react";

interface Props {
    slug: string;
}

export const StockLabel = ({ slug }: Props) => {
    const [stock, setStock] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getStock();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getStock = async () => {
        const inStock = await getStockMySlug({ slug });
        setStock(inStock);
        setIsLoading(false);
    };

    return (
        <>
            {isLoading ? (
                <h1
                    className={cn(
                        "text-lg font-bold antialiased bg-gray-50 animate-pulse",
                        titleFont.className
                    )}
                >
                    &nbsp;
                </h1>
            ) : (
                <h1 className={cn("text-lg font-bold antialiased", titleFont.className)}>
                    Stock:{stock}
                </h1>
            )}
        </>
    );
};
