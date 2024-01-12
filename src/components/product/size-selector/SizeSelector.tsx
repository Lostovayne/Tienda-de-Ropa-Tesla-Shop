import type { Size } from "@/interfaces";
import { cn } from "@/lib/twMerge";

interface Props {
    selectedSize: Size;
    availableSizes: Size[];
}

export const SizeSelector = ({ selectedSize, availableSizes }: Props) => {
    return (
        <div className="my-5 ">
            <h3 className="font-bold mb-4 ">Tallas disponibles</h3>

            <div className="flex gap-2">
                {availableSizes.map((size) => (
                    <button
                        key={size}
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
