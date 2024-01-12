"use client";

import { useState } from "react";
import { IoAddOutline, IoRemoveCircleOutline, IoRemoveOutline } from "react-icons/io5";

interface Props {
    quantity: number;
}

export const QuantitySelector = ({ quantity }: Props) => {
    const [count, setCount] = useState(quantity);

    const onQuantityChange = (value: number) => {
        if (count + value < 1) {
            return;
        }

        if (count + value > 10) {
            return;
        }
        setCount(count + value);
    };

    return (
        <div>
            <div className="flex items-center">
                <button
                    className="border text-gray-700 border-gray-200 p-2 rounded-xl"
                    onClick={() => onQuantityChange(-1)}
                >
                    <IoRemoveOutline size={20} />
                </button>

                <span className="w-20 mx-3 px-5 bg-gray-200/55 py-1 text-center">{count}</span>

                <button
                    className="border text-gray-700 border-gray-200 p-2 rounded-xl"
                    onClick={() => onQuantityChange(+1)}
                >
                    <IoAddOutline size={20} />
                </button>
            </div>
        </div>
    );
};
