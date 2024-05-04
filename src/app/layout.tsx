import { inter } from "@/config/fonts";
import { cn } from "@/lib/twMerge";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s - Tesla | Shop",
    default: "Tesla Shop",
  },
  description: "Tienda de ropa online",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="hydrated" >
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
