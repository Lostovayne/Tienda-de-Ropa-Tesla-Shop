import { auth } from "@/auth.config";
import { Title } from "@/components";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  const session = await auth();
  console.log({ session });
  if (!session?.user) return redirect("/");

  return (
    <div>
      <Title title="Perfil" />
      <pre>{JSON.stringify(session!.user, null, 2)}</pre>
      <h3>Email: {session?.user?.email}</h3>
    </div>
  );
}
