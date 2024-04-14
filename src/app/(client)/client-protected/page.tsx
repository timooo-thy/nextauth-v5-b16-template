"use client";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";

import React, { useEffect, useState } from "react";

export default function ClientSide() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/signin");
    }
    if (session?.user?.email) setEmail(session?.user?.email);
  }, [status, router, session]);

  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-10">
      <h1>This is a client side protected route!</h1>
      <p>User email: {status === "loading" ? "Loading..." : email}</p>
      <Button onClick={() => signOut({ callbackUrl: "/" })}>Sign out</Button>
    </main>
  );
}
