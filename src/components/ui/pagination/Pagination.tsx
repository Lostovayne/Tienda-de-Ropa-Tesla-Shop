"use client";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

interface Props {
    totalPages: number;
}

export const Pagination = ({ totalPages }: Props) => {
    // Pagination usando los hooks
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const currentPage = Number(searchParams?.get("page")) ?? 1;

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
        <div className="flex justify-center text-center mt-10 mb-32 ">
            <nav aria-label="Page navigation example">
                <ul className="flex list-style-none items-center">
                    <li className="page-item">
                        <Link
                            className="page-link relative block py-3 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300  text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                            href={createPageUrl(currentPage - 1)}
                            // aria-disabled="true"
                        >
                            <IoChevronBackOutline />
                        </Link>
                    </li>
                    <li className="page-item">
                        <Link
                            className="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300  text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                            href="#"
                        >
                            1
                        </Link>
                    </li>
                    <li className="page-item active">
                        <Link
                            className="page-link relative block py-1.5 px-3 rounded border-0 bg-blue-600 outline-none transition-all duration-300  text-white hover:text-white hover:bg-blue-600 shadow-md focus:shadow-md"
                            href="#"
                        >
                            2 <span className="visually-hidden"></span>
                        </Link>
                    </li>
                    <li className="page-item">
                        <Link
                            className="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300  text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                            href="#"
                        >
                            3
                        </Link>
                    </li>
                    <li className="page-item">
                        <Link
                            className="page-link relative block py-3 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300  text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
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
