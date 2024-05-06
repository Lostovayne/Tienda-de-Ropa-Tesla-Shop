import { auth } from "@/auth.config";
import { redirect } from "next/navigation";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if (session?.user) {
    redirect("/");
  }

  return (
    <div className="flex justify-center">
      <div className="px-10 w-full sm:w-[350px]">{children}</div>
    </div>
  );
}
