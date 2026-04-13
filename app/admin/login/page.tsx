import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-zinc-950 p-6">
      <Image
        src="/logo-light.png"
        alt="Last Minute Media Deals"
        width={200}
        height={60}
        priority
        className="h-auto w-40"
      />
      <SignIn />
    </main>
  );
}
