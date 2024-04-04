"use client";

import { IoAddOutline, IoRemoveOutline } from "react-icons/io5";

interface Props {
  quantity: number;
  onQuantityChanged: (value: number) => void;
}

export const QuantitySelector = ({ quantity, onQuantityChanged }: Props) => {
  const onValueChanged = (value: number) => {
    if (quantity + value < 1) {
      return;
    }

    if (quantity + value > 10) {
      return;
    }
    onQuantityChanged(quantity + value);
  };

  return (
    <div>
      <div className="flex items-center">
        <button
          className="border-gray-200 p-2 border rounded-xl text-gray-700"
          onClick={() => onValueChanged(-1)}
        >
          <IoRemoveOutline size={20} />
        </button>

        <span className="bg-gray-200/55 mx-3 px-5 py-1 w-20 text-center">{quantity}</span>

        <button
          className="border-gray-200 p-2 border rounded-xl text-gray-700"
          onClick={() => onValueChanged(+1)}
        >
          <IoAddOutline size={20} />
        </button>
      </div>
    </div>
  );
};
