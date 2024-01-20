import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/config/fonts";
import { cn } from "@/lib/twMerge";

export const metadata: Metadata = {
    title: "Tesla | Shop",
    description: "Tienda de ropa online",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="es">
            <body
                className={cn(
                    "bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]",
                    inter.className
                )}
            >
                {children}
            </body>
        </html>
    );
}
