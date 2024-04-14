"use client";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";

import React, { useEffect } from "react";

export default function ClientSide() {
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/signin");
    }
  }, [status, router]);

  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-10">
      <h1>This is a client side protected route!</h1>
      <p>User email: {session?.user?.email}</p>
      <Button onClick={() => signOut({ callbackUrl: "/" })}>Sign out</Button>
    </main>
  );
}
