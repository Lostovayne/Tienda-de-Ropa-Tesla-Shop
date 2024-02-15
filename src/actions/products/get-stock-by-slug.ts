"use server";
import prisma from "@/lib/prisma";

export const getStockMySlug = async ({ slug }: { slug: string }): Promise<number> => {
    try {
        // await sleep();
        const stock = await prisma.product.findFirst({
            where: { slug },
            select: { inStock: true },
        });

        return stock?.inStock || 0;
    } catch (error) {
        return 0;
    }
};
