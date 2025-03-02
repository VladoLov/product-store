import React from "react";
import { LucideUser2 } from "lucide-react";
import { currentUser } from "@clerk/nextjs/server";

export default async function UserIcon() {
  /* const { userId } = auth();
   */
  const user = await currentUser();

  const profileImage = user?.imageUrl;

  if (profileImage) {
    return (
      <img
        src={profileImage}
        alt="Profile Image"
        className="w-6 h-6 rounded-full object-cover"
      />
    );
  }
  return (
    <LucideUser2 className="w-6 h-6 bg-primary rounded-full text-white">
      UserIcon
    </LucideUser2>
  );
}
