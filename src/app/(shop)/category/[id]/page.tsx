import { notFound } from "next/navigation";

interface Props {
    params: {
        id: string;
    };
}

const data = {
    women: "women",
    men: "men",
    kids: "kids",
};

export default function CategoryPage({ params: { id } }: Props) {
    if (!data[id as keyof typeof data]) return notFound();

    return (
        <div>
            <h1>{id}</h1>
        </div>
    );
}
