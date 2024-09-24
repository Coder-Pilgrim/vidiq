import StreamVideoProvider from "@/providers/StreamClientProvider";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "VidiQ",
  description:
    "VidiQ is an real time video conferencing application built with Next.js,React, TypeScript, Stream and Tailwind CSS.",
  icons: {
    icon: "/icons/logo.svg",
  },
};
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return <StreamVideoProvider>{children}</StreamVideoProvider>;
};

export default RootLayout;
