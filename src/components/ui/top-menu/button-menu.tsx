"use client";

import { useUiStore } from "@/store";

export const ButtonMenu = () => {
    const openSideMenu = useUiStore((state) => state.openSideMenu);
    

    return (
        <button
            type="button"
            onClick={openSideMenu}
            className="hover:bg-gray-100 p-2 rounded-md font-medium transition-all"
        >
            Menu
        </button>
    );
};
