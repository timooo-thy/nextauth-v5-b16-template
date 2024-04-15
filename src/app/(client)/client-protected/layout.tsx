import React from "react";
import { SessionProvider } from "next-auth/react";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <SessionProvider>{children}</SessionProvider>
    </div>
  );
}
