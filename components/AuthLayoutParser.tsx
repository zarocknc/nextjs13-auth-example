"use client";

import { SessionProvider } from "next-auth/react";

export interface AuthContextProps {
  children: React.ReactNode;
}

export default function AuthSessionPrider({ children }: AuthContextProps) {
  return <SessionProvider>{children}</SessionProvider>;
}
