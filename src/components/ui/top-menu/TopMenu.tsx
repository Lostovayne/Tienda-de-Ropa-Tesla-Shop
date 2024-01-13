import { titleFont } from "@/config/fonts";
import Link from "next/link";

import { IoSearchOutline, IoCartOutline } from "react-icons/io5";
import { ButtonMenu } from "@/components/ui/top-menu/button-menu";

export const TopMenu = () => {
    return (
        <nav className="flex px-5 justify-between items-center w-full pt-2">
            <div>
                <Link href="/">
                    <span className={`${titleFont.className} antialiased font-bold`}>Tesla</span>
                    <span className="text-gray-600 font-medium"> | Shop</span>
                </Link>
            </div>

            {/* Center Menu */}

            <div className="hidden sm:block">
                <Link
                    className="m-2 p-2 rounded-md font-medium transition-all hover:bg-gray-100"
                    href="/category/men"
                >
                    Hombres
                </Link>
                <Link
                    className="m-2 p-2 rounded-md font-medium transition-all hover:bg-gray-100"
                    href="/category/women"
                >
                    Mujeres
                </Link>
                <Link
                    className="m-2 p-2 rounded-md font-medium transition-all hover:bg-gray-100"
                    href="/category/kid"
                >
                    Niños
                </Link>
            </div>

            {/* Search, Cart, Menu */}

            <div className="flex items-center gap-3">
                <Link href="/search" className="mr-1">
                    <IoSearchOutline className="w-5 h-5 xl:h-6 xl:w-6" />
                </Link>
                <Link href="/cart">
                    <div className="relative">
                        <span className="absolute -top-1 bg-red-500 text-white rounded-full px-1 -right-2 text-xs font-bold ">
                            3
                        </span>
                        <IoCartOutline className="w-5 h-5 xl:h-6 xl:w-6" />
                    </div>
                </Link>

                {/* Menu */}
                <ButtonMenu />
            </div>
        </nav>
    );
};
