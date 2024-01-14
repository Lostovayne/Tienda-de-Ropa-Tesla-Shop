import { redirect } from "next/navigation";

export const metadata = {
    title: "SEO Title",
    description: "SEO Title",
};
export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex justify-center">
            <div className="w-full sm:w-[350px] px-10">{children}</div>
        </div>
    );
}
