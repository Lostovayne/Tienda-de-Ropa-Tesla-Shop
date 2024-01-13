import { notFound } from "next/navigation";
import { initialData } from "../../../../seed/seed";
import { cn } from "@/lib/twMerge";
import { titleFont } from "@/config/fonts";
import { ProductSlideshow, QuantitySelector, SizeSelector } from "@/components";
interface Props {
    params: {
        slug: string;
    };
}

export default function ProductPage({ params }: Props) {
    const { slug } = params;
    const product = initialData.products.find((product) => product.slug === slug);

    if (!product) {
        notFound();
    }

    return (
        <section className="mt-5 mb-20 grid grid-cols-1 xl:grid-cols-3 gap-3">
            {/* Slideshow */}

            <div className="col-span-1 xl:col-span-2 ">
                <ProductSlideshow
                    title={product.title}
                    images={product.images}
                    className="max-w-2xl mx-auto "
                />
            </div>

            {/* Detalles */}

            <div className="col-span-1 px-5 xl:mt-12 ">
                <h1 className={cn("text-xl font-bold antialiased", titleFont.className)}>
                    {product.title}
                </h1>
                <p className="text-lg mb-5 font-semibold">${product.price}</p>

                {/* Selector de Tallas */}
                <SizeSelector selectedSize={product.sizes[0]} availableSizes={product.sizes} />

                {/* Selector de Cantidad */}

                <QuantitySelector quantity={2} />

                {/* Button */}

                <button className="btn-primary my-5  ">Agregar al carrito</button>

                {/* Descripcion */}
                <h3 className="font-bold text-sm">Descripción</h3>
                <p className="font-normal text-base">{product.description}</p>
            </div>
        </section>
    );
}
