"use client"
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
import { Session } from "next-auth/core/types";
import Navbar from "@/components/navigation/Navbar";

interface IProps {
  children: ReactNode;
  session: Session;
}

export default function RootLayout({ children, session}: IProps) {
  return (
    <html lang="en" data-theme="emerald">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <SessionProvider session={session}>
          <Navbar />
          {children}
          </SessionProvider>
      </body>
    </html>
  );
}
