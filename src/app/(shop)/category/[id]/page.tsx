import { getPaginateProductsWithImages } from "@/actions";
import { ProductGrid, Title } from "@/components";
import { Category } from "@/interfaces/product.interface";

interface Props {
    params: {
        id: Category;
    };
}

export default async function CategoryPage({ params }: Props) {
    const { id } = params;
    const { products } = await getPaginateProductsWithImages({});
    // console.log(products);
    const label: Record<Category, string> = {
        men: "para Hombres",
        women: "para Mujeres",
        kid: "para niños",
        unisex: "para Todos",
    };

    // if (id === "kids") {
    //     notFound();
    // }

    // const productosFiltrados = products.filter((product) => {
    //     return product.gender === id;
    // });
    return (
        <>
            <Title title={`Articulos ${label[id]}`} subtitle={`Todos los productos de ${label[id]}`} />
            {/* <ProductGrid products={productsFilters} /> */}
        </>
    );
}
