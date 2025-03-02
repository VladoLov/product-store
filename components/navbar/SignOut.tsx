"use client";
import React from "react";
import { useToast } from "@/hooks/use-toast";
import { SignOutButton } from "@clerk/nextjs";
import Link from "next/link";

export default function SignOut() {
  const { toast } = useToast();
  const handleLogout = () => {
    toast({ description: "You have been logged out" });
  };
  return (
    <SignOutButton>
      <Link href="/" className="w-full text-left" onClick={handleLogout}>
        Logout
      </Link>
    </SignOutButton>
  );
}
