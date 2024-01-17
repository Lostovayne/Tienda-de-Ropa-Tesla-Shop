import { initialData } from "./seed";
import prisma from "../lib/prisma";

async function main() {
    // Borrar Registros previos
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

    // crear un Mapa

    const categoriesMap = categoriesDb.reduce((map, category) => {
        map[category.name.toLocaleLowerCase()] = category.id;
        return map;
    }, {} as Record<string, string>); // el primer string seria el texto y el segundo es el id

    console.log(categoriesMap);

    console.log("Seed ejecutado correctamente");
}

(() => {
    if (process.env.NODE_ENV !== "production") {
        main();
    }
})();