import { initialData } from "./seed";
import prisma from "../lib/prisma";

async function main() {
    // Borrar Registros previos

    //  await prisma.productImage.deleteMany();
    //  await prisma.product.deleteMany();
    //  await prisma.category.deleteMany();
    await Promise.all([
        await prisma.productImage.deleteMany(),
        await prisma.product.deleteMany(),
        await prisma.category.deleteMany(),
    ]);

    const { categories, products } = initialData;

    const categoriesData = categories.map((category) => {
        return {
            name: category,
        };
    });

    await prisma.category.createMany({
        data: categoriesData,
    });

    // Tomar los ID de las categorias de la BD
    const categoriesDb = await prisma.category.findMany();

    // crear un Mapa para el id de la categoria
    const categoriesMap = categoriesDb.reduce((map, category) => {
        map[category.name.toLocaleLowerCase()] = category.id;
        return map;
    }, {} as Record<string, string>); // el primer string seria el texto y el segundo es el id

    // Insertar Productos {
    const { images, type, ...product1 } = products[0];
    // await prisma.product.create({
    //     data: {
    //         ...product1,
    //         categoryId: categoriesMap[type],
    //     },
    // });

    products.forEach(async (product) => {
        const { images, type, ...rest } = product;
        const dbProduct = await prisma.product.create({
            data: {
                ...rest,
                categoryId: categoriesMap[type],
            },
        });

        // Insertar Images
        const imagesData = images.map((image) => {
            return {
                url: image,
                productId: dbProduct.id,
            };
        });

        await prisma.productImage.createMany({
            data: imagesData,
        });
    });

    console.log("Seed ejecutado correctamente");
}

(() => {
    if (process.env.NODE_ENV !== "production") {
        main();
    }
})();
