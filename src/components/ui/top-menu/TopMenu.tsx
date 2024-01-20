import { titleFont } from "@/config/fonts";
import Link from "next/link";

import { IoSearchOutline, IoCartOutline } from "react-icons/io5";
import { ButtonMenu } from "@/components/ui/top-menu/button-menu";
import { cn } from "@/lib/twMerge";

export const TopMenu = () => {
    return (
        <nav className="flex w-full items-center justify-between px-5 pt-5">
            <div>
                <Link href="/">
                    <span className={`${titleFont.className} antialiased font-bold 2xl:text-2xl`}>Tesla</span>
                    <span className={cn(titleFont.className, "font-semibold text-gray-700 2xl:text-2xl")}>
                        {" "}
                        | Shop
                    </span>
                </Link>
            </div>

            {/* Center Menu */}

            <div className="hidden sm:flex">
                <Link
                    className="3xl:text-xl m-2 block w-24 rounded-md p-2 text-center text-lg font-medium transition-all hover:bg-gray-100"
                    href="/gender/men"
                >
                    Hombres
                </Link>
                <Link
                    className="3xl:text-xl m-2 block w-24 rounded-md p-2 text-center text-lg font-medium transition-all hover:bg-gray-100"
                    href="/gender/women"
                >
                    Mujeres
                </Link>
                <Link
                    className="3xl:text-xl m-2 block w-24 rounded-md p-2 text-center text-lg font-medium transition-all hover:bg-gray-100"
                    href="/gender/kid"
                >
                    Niños
                </Link>
            </div>

            {/* Search, Cart, Menu */}

            <div className="flex items-center gap-3">
                <Link href="/search" className="mr-1">
                    <IoSearchOutline className="h-5 w-5 xl:h-6 xl:w-6" />
                </Link>
                <Link href="/cart">
                    <div className="relative">
                        <span className="absolute -right-2 -top-1 rounded-full bg-red-500 px-1 text-xs font-bold text-white">
                            3
                        </span>
                        <IoCartOutline className="h-5 w-5 xl:h-6 xl:w-6" />
                    </div>
                </Link>

                {/* Menu */}
                <ButtonMenu />
            </div>
        </nav>
    );
};
