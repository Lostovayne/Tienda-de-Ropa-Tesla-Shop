import { ProductSlideshow, StockLabel } from "@/components";
import { titleFont } from "@/config/fonts";
import { cn } from "@/lib/twMerge";
import { notFound } from "next/navigation";
// import { initialData } from "../../../../seed/seed";
import { getProductBySlug } from "@/actions/products/get-product-by-slug";
import { Metadata, ResolvingMetadata } from "next";
import AddToCart from "./ui/AddToCart";
interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata(props: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const params = await props.params;
  // read route params
  const slug = params.slug;

  // fetch data
  const product = await getProductBySlug(slug);

  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || [];

  return {
    title: product?.title,
    description: product?.description,
    openGraph: {
      title: product?.title,
      description: product?.description,
      images: [`/products/${product?.images[1]}`],
    },
  };
}

export default async function ProductPage(props: Props) {
  const params = await props.params;
  const { slug } = params;
  const product = await getProductBySlug(slug);

  if (!product) {
   notFound();
  }

  return (
    <section className="gap-3 grid grid-cols-1 xl:grid-cols-3 mt-5 mb-20">
      {/* Slideshow */}

      <div className="col-span-1 xl:col-span-2">
        <ProductSlideshow title={product.title} images={product.images} className="mx-auto max-w-2xl" />
      </div>

      {/* Detalles */}

      <div className="col-span-1 xl:mt-12 px-5">
        <StockLabel slug={product.slug} />
        <h1 className={cn("text-xl font-bold antialiased", titleFont.className)}>{product.title}</h1>
        <p className="mb-5 font-semibold text-lg">${product.price}</p>
        <AddToCart product={product!} />
        {/* Descripcion */}
        <h3 className="font-bold text-sm">Descripción</h3>
        <p className="font-normal text-base">{product.description}</p>
      </div>
    </section>
  );
}
