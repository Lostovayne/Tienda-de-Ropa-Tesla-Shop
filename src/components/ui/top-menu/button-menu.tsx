"use client";

import { useUiStore } from "@/store";

export const ButtonMenu = () => {
    const openSideMenu = useUiStore((state) => state.openSideMenu);

    return (
        <button
            onClick={openSideMenu}
            className=" p-2 font-medium rounded-md transition-all hover:bg-gray-100"
        >
            Menú
        </button>
    );
};
