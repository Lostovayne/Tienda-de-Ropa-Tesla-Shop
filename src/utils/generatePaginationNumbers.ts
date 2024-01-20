// [ 1,2,3,4,5,]
export const generatePaginationNumbers = (currentPage: number, totalPages: number) => {
    // Si el numero total de paginas es 7 o menos
    // Mostramos todas las paginas sin puntos ...

    if (totalPages <= 7) {
        return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    // Si la pagina actual está entre las primeras 3 paginas
    // mostrar las 3 primeras, puntos suspensimos y las 2 ultimas

    if (currentPage <= 3) {
        return [1, 2, 3, "...", totalPages - 1, totalPages]; // => [1,2,3,...,6,7]
    }

    // Si la pagina actual está entre las ultimas 3 paginas
    // mostrar las primeras 2 , puntos suspensivos , las ultimas 3 paginas

    if (currentPage >= totalPages - 2) {
        return [1, 2, "...", totalPages - 2, totalPages - 1, totalPages]; // => [1,2,...,5,6,7]
    }

    // si la pagina actual está en otro lugar medio
    // mostrar la primera pagina, puntos suspensivos, la pagina actual, puntos suspensivos y la ultima pagina

    return [1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages];
};
