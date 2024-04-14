import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-10">
      <h1>
        This is a Auth.js v5 template for Google and Resend providers with Turso
        Prisma db. This is running on edge runtime as well.
      </h1>
      <Button variant="default" className="px-4" asChild>
        <Link href="/signin">Click here to sign in</Link>
      </Button>
    </main>
  );
}
