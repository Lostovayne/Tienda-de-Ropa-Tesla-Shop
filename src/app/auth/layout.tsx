export const metadata = {
    title: "SEO Title",
    description: "SEO Title",
};
export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-slate-200">
            <h1>Hello Root and MetaData</h1>
        </div>
    );
}
