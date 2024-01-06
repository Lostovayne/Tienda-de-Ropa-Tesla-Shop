import { TopMenu } from "@/components";

export const metadata = {
    title: "SEO Title",
    description: "SEO Title",
};
export default function ShopLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="min-h-screen">
            <TopMenu />
            {children}
        </main>
    );
}
