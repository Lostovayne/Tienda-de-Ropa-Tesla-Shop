import { titleFont } from "@/config/fonts";
import { cn } from "@/lib/twMerge";

interface Props {
    title: string;
    subtitle?: string;
    className?: string;
}

export const Title = ({ title, subtitle, className }: Props) => {
    return (
        <div className={cn("mt-3", className)}>
            <h1
                className={cn(
                    "antialiased text-2xl sm:text-3xl lg:text-4xl  font-semibold my-10",
                    titleFont.className
                )}
            >
                {title}
            </h1>

            {subtitle && <h3 className=" text-md sm:text-lg lg:text-xl  mb-5 ">{subtitle}</h3>}
        </div>
    );
};
