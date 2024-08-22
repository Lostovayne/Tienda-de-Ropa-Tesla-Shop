import { auth } from "@/auth.config";
import { redirect } from "next/navigation";

export default async function CheckoutLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();

  if (!session?.user) {
    redirect("/auth/login?redirectTo=/checkout/address");
  }

  return <main className="mx-auto min-h-screen max-w-[1400px]">{children}</main>;
}
