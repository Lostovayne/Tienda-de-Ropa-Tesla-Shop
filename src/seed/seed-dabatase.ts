import { initialData } from "./seed";
import prisma from "../lib/prisma";
import { countries } from "./seed-countries";

async function main() {
  await Promise.all([
    await prisma.user.deleteMany(),
    await prisma.productImage.deleteMany(),
    await prisma.product.deleteMany(),
    await prisma.category.deleteMany(),
    await prisma.country.deleteMany(),
  ]);

  const { categories, products, users } = initialData;

  await prisma.user.createMany({
    data: users,
  });

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

  await prisma.country.createMany({
    data: countries,
  });

  console.log("Seed ejecutado correctamente");
}

(() => {
  if (process.env.NODE_ENV !== "production") {
    main();
  }
})();

// update
