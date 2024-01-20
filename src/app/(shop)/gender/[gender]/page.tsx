export const revalidate = 60;

import { getPaginateProductsWithImages } from "@/actions";
import { Pagination, ProductGrid, Title } from "@/components";
import { Gender } from "@prisma/client";
import { notFound, redirect } from "next/navigation";

interface Props {
    params: {
        gender: Gender;
    };
    searchParams: {
        page?: string;
    };
}

export default async function CategoryPage({ params: { gender }, searchParams }: Props) {
    const page = searchParams.page ? parseInt(searchParams.page) : 1;

    //* En caso de ingresarse un parametro en la url que no exista, redirigir a la pagina principal

    if (Gender[gender] === undefined) return notFound();

    //* Recibe el page de los SearchParams si no es valido la funcion lo redirecciona al path principal

    const { products, currentPage, totalPage } = await getPaginateProductsWithImages({ page, gender });

    if (products.length === 0) {
        redirect("/");
    }

    const label: Record<Gender, string> = {
        men: "para Hombres",
        women: "para Mujeres",
        kid: "para niños",
        unisex: "para Todos",
    };
    return (
        <>
            <Title title={`Articulos ${label[gender]}`} subtitle={`Todos los productos de ${label[gender]}`} />
            <ProductGrid products={products} />
            <Pagination totalPages={totalPage} />
        </>
    );
}
