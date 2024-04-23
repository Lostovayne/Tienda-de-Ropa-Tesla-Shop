"use client";

import { titleFont } from "@/config/fonts";
import Link from "next/link";

import { IoSearchOutline, IoCartOutline } from "react-icons/io5";
import { ButtonMenu } from "@/components/ui/top-menu/button-menu";
import { cn } from "@/lib/twMerge";
import { useCartStore } from "@/store";
import { useEffect, useState } from "react";

export const TopMenu = () => {
  const totalItemsInCart = useCartStore((state) => state.getTotalItems());
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <nav className="flex justify-between items-center px-5 pt-5 w-full">
      <div>
        <Link href="/">
          <span className={`${titleFont.className} antialiased font-bold 2xl:text-2xl`}>Tesla</span>
          <span className={cn(titleFont.className, "font-semibold text-gray-700 2xl:text-2xl")}> | Shop</span>
        </Link>
      </div>

      {/* Center Menu */}

      <div className="sm:flex hidden">
        <Link
          className="block hover:bg-gray-100 m-2 p-2 rounded-md w-24 font-medium text-center text-lg 3xl:text-xl transition-all"
          href="/gender/men"
        >
          Hombres
        </Link>
        <Link
          className="block hover:bg-gray-100 m-2 p-2 rounded-md w-24 font-medium text-center text-lg 3xl:text-xl transition-all"
          href="/gender/women"
        >
          Mujeres
        </Link>
        <Link
          className="block hover:bg-gray-100 m-2 p-2 rounded-md w-24 font-medium text-center text-lg 3xl:text-xl transition-all"
          href="/gender/kid"
        >
          Niños
        </Link>
      </div>

      {/* Search, Cart, Menu */}

      <div className="flex items-center gap-3">
        <Link href="/search" className="mr-1">
          <IoSearchOutline className="w-5 xl:w-6 h-5 xl:h-6" />
        </Link>
        <Link href={totalItemsInCart === 0 ? "/empty" : "/cart"}>
          <div className="relative">
            {loaded && totalItemsInCart > 0 && (
              <span className="-top-1 -right-2 absolute bg-red-500 px-1 rounded-full font-bold text-white text-xs">
                {totalItemsInCart}
              </span>
            )}
            <IoCartOutline className="w-5 xl:w-6 h-5 xl:h-6" />
          </div>
        </Link>

        {/* Menu */}
        <ButtonMenu />
      </div>
    </nav>
  );
};
