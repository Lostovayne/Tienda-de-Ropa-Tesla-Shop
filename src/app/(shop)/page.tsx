import { getPaginateProductsWithImages } from "@/actions";
import { ProductGrid, Title } from "@/components";

export default async function Home() {
    const { products } = await getPaginateProductsWithImages();
    console.log(products);
    return (
        <>
            <Title title="Tienda" subtitle="Todos los productos" />
            <ProductGrid products={products} />
        </>
    );
}
