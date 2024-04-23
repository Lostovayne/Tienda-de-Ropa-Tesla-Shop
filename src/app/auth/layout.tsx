import { redirect } from "next/navigation";


export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex justify-center">
            <div className="px-10 w-full sm:w-[350px]">{children}</div>
        </div>
    );
}
