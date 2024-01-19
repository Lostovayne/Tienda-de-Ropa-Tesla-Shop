"use server";

import prisma from "@/lib/prisma";

// Paginacion manual

interface PaginationOption {
    page?: number;
    take?: number;
}

export const getPaginateProductsWithImages = async ({ page = 1, take = 12 }: PaginationOption) => {
    if (isNaN(Number(page))) page = 1;
    if (page < 1) page = 1;

    try {
        // 1. Obtener los productos usando paginacion con prisma
        const products = await prisma.product.findMany({
            take: take,
            skip: (page - 1) * take,
            include: {
                ProductImage: {
                    take: 2,
                    select: {
                        url: true,
                    },
                },
            },
        });

        // 2. Obtener el numero de paginas
        // todo:
        const totalCount = await prisma.product.count({});
        const totalPages = Math.ceil(totalCount / take);
        return {
            currentPage: page,
            totalPage: totalPages,
            products: products.map((product) => ({
                ...product,
                images: product.ProductImage.map((image) => image.url),
            })),
        };
    } catch (error) {
        throw new Error("Error al obtener los productos");
    }
};
