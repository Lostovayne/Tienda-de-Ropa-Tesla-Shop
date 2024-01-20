"use client";
import { cn } from "@/lib/twMerge";
import { generatePaginationNumbers } from "@/utils";
import Link from "next/link";
import { redirect, usePathname, useSearchParams } from "next/navigation";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

interface Props {
    totalPages: number;
}

export const Pagination = ({ totalPages }: Props) => {
    // Pagination usando los hooks
    const pathname = usePathname();
    const searchParams = useSearchParams();

    let pageString = searchParams?.get("page") ?? 1;
    const currentPage = isNaN(+pageString) ? 1 : +pageString;

    if (currentPage < 1 || isNaN(+pageString)) {
        redirect(`${pathname}`);
    }

    //* Generacion de los numeros de la paginacion
    const AllPages = generatePaginationNumbers(currentPage, totalPages);

    const createPageUrl = (pageNumber: number | string) => {
        const params = new URLSearchParams(searchParams);

        if (pageNumber === "...") {
            return `${pathname}?${params.toString()}`;
        }

        if (+pageNumber <= 0) {
            return `${pathname}?${params.toString()}`; // si no hay paginas anteriores lo deja en la misma
        }

        if (+pageNumber > totalPages) {
            return `${pathname}?${params.toString()}`; // si no hay mas paginas lo deja en la misma
        }

        params.set("page", pageNumber.toString());
        return `${pathname}?${params.toString()}`;
    };

    return (
        <div className="mb-32 mt-10 flex justify-center text-center">
            <nav aria-label="Page navigation example">
                <ul className="list-style-none flex items-center">
                    <li className="page-item">
                        <Link
                            className="page-link relative block rounded border-0 bg-transparent px-3 py-3 text-gray-800 outline-none transition-all duration-300 hover:bg-gray-200 hover:text-gray-800 focus:shadow-none"
                            href={createPageUrl(currentPage - 1)}
                            // aria-disabled="true"
                        >
                            <IoChevronBackOutline />
                        </Link>
                    </li>

                    {AllPages.map((page, index) => (
                        <li key={page + "-" + index} className="page-item">
                            <Link
                                className={cn(
                                    "page-link relative block rounded border-0 bg-transparent px-3 py-1.5 text-gray-800 outline-none transition-all duration-300 hover:bg-gray-200 hover:text-gray-800 focus:shadow-none",
                                    {
                                        "bg-blue-600 text-white shadow-md hover:bg-blue-600 hover:text-white focus:shadow-md":
                                            page === currentPage,
                                    }
                                )}
                                href={createPageUrl(page)}
                            >
                                {page}
                            </Link>
                        </li>
                    ))}

                    <li className="page-item">
                        <Link
                            className="page-link relative block rounded border-0 bg-transparent px-3 py-3 text-gray-800 outline-none transition-all duration-300 hover:bg-gray-200 hover:text-gray-800 focus:shadow-none"
                            href={createPageUrl(currentPage + 1)}
                        >
                            <IoChevronForwardOutline />
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};
