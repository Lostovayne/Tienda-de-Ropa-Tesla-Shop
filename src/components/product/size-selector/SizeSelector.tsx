"use client";
import type { Size } from "@/interfaces";
import { cn } from "@/lib/twMerge";
import { useEffect } from "react";

interface Props {
  selectedSize: Size | undefined;
  availableSizes: Size[];
  onSizeChanged: (size: Size) => void;
}

export const SizeSelector = ({ selectedSize, availableSizes, onSizeChanged }: Props) => {
  useEffect(() => {
    if (!selectedSize) {
      onSizeChanged(availableSizes[0]);
    }
  }, [availableSizes, onSizeChanged, selectedSize]);

  return (
    <div className="my-5">
      <h3 className="mb-4 font-bold">Tallas disponibles</h3>

      <div className="flex gap-2">
        {availableSizes.map((size) => (
          <button
            key={size}
            onClick={() => onSizeChanged(size)}
            type="button"
            className={cn(
              "border border-gray-200 text-sm font-medium p-4 rounded-md w-8 h-8 flex items-center justify-center",
              {
                "bg-gray-300/70": size === selectedSize,
              }
            )}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};
