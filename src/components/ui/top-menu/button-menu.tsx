"use client";

import { useUiStore } from "@/store";

export const ButtonMenu = () => {
    const openSideMenu = useUiStore((state) => state.openSideMenu);

    return (
        <button
            type="button"
            onClick={openSideMenu}
            className="rounded-md p-2 font-medium transition-all hover:bg-gray-100"
        >
            Menu
        </button>
    );
};
