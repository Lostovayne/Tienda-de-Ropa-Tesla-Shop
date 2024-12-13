import { Provider } from '@/components';
import { inter } from '@/config/fonts';
import { cn } from '@/lib/twMerge';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    template: '%s - Tesla Shop | Ropa y Accesorios Oficiales',
    default: 'Tesla Shop | Ropa y Accesorios Oficiales de Tesla',
  },
  description:
    'Descubre la colección oficial de ropa y accesorios de Tesla. Moda sostenible y de alta calidad inspirada en la innovación y el diseño de Tesla.',
  keywords: ['Tesla', 'ropa', 'accesorios', 'moda sostenible', 'innovación', 'diseño', 'tienda oficial'],
  authors: [{ name: 'Tesla, Inc.' }],
  creator: 'Tesla, Inc.',
  publisher: 'Tesla Shop',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Tesla Shop | Ropa y Accesorios Oficiales',
    description:
      'Explora la colección exclusiva de ropa y accesorios de Tesla. Estilo y tecnología unidos en cada prenda.',
    url: 'https://shop.tesla.com',
    siteName: 'Tesla Shop',
    images: [
      {
        url: 'https://tu-dominio.com/og-image.jpg', // Reemplaza con la URL real de tu imagen
        width: 1200,
        height: 630,
        alt: 'Tesla Shop Colección',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tesla Shop | Ropa y Accesorios Oficiales',
    description:
      'Viste el futuro con la colección oficial de Tesla. Moda que combina estilo y sostenibilidad.',
    images: ['https://tu-dominio.com/twitter-image.jpg'], // Reemplaza con la URL real de tu imagen
    creator: '@TeslaShop',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'tu-codigo-de-verificacion-de-google',
    yandex: 'tu-codigo-de-verificacion-de-yandex',
    yahoo: 'tu-codigo-de-verificacion-de-yahoo',
    other: {
      me: ['tu-email@ejemplo.com', 'https://tu-sitio-personal.com'],
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='es'>
      <body
        className={cn(
          'bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]',
          inter.className
        )}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
