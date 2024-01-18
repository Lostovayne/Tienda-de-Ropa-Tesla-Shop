import { ProductGrid, Title } from "@/components";
import { Category } from "@/interfaces/product.interface";
import { initialData } from "@/seed/seed";

interface Props {
    params: {
        id: Category;
    };
}

const products = initialData.products;

export default function CategoryPage({ params: { id } }: Props) {
    const label: Record<Category, string> = {
        men: "para Hombres",
        women: "para Mujeres",
        kid: "para niños",
        unisex: "para Todos",
    };

    // if (id === "kids") {
    //     notFound();
    // }

    const productsFilters = products.filter((product) => product.gender === id);

    return (
        <>
            <Title title={`Articulos ${label[id]}`} subtitle={`Todos los productos de ${label[id]}`} />
            <ProductGrid products={productsFilters} />
        </>
    );
}
