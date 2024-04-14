import React from "react";
import { SessionProvider } from "next-auth/react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <SessionProvider>{children}</SessionProvider>
    </div>
  );
}
