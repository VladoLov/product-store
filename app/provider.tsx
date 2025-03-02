"use client";
import ThemeProvider from "./theme-provider";
import { Toaster } from "@/components/ui/toaster";

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Toaster />
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </>
  );
}
