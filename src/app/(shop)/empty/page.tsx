import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";

export default function EmptyPage() {
    return (
        <div className="flex items-center justify-center h-[800px]">
            <IoCartOutline size={80} className="mx-5" />

            <div className="flex flex-col items-center">
                <h1 className="text-xl font-semibold">Your cart is empty</h1>

                <Link href="/" className="underline">
                    Continue shopping
                </Link>
            </div>
        </div>
    );
}
