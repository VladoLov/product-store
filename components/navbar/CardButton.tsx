import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { LucideShoppingCart } from "lucide-react";
import { fetchCartItems } from "@/utils/actions";

export default async function CardButton() {
  /// temp
  const numItemsInCart = await fetchCartItems();
  return (
    <Button
      asChild
      variant="outline"
      size="icon"
      className="flex justify-center items-center relative"
    >
      <Link href="/cart">
        <LucideShoppingCart size={24} />
        <span className="absolute -top-3 -right-3 bg-primary text-white rounded-full h-6 w-6 flex items-center justify-center text-xs">
          {numItemsInCart}
        </span>
      </Link>
    </Button>
  );
}
