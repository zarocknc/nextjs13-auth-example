import "./globals.css";
import { getSession, SessionProvider } from "next-auth/react";
import Navbar from "@/components/navigation/Navbar";
import AuthSessionPrider from "@/components/AuthLayoutParser";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="emerald">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <AuthSessionPrider>
          <Navbar />
          {children}
        </AuthSessionPrider>
      </body>
    </html>
  );
}
