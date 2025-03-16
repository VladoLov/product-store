import React from "react";
import { Button } from "../ui/button";
import { FaHeart } from "react-icons/fa";
import { auth } from "@clerk/nextjs/server";
import { CardSignInButton } from "../form/Button";
import { fetchFavoriteId } from "@/utils/actions";
import FavoriteToggleForm from "./FavoriteToggleForm";

export default async function FavoriteToggleButton({
  productId,
}: {
  productId: string;
}) {
  const { userId } = await auth();
  if (!userId) {
    return <CardSignInButton />;
  }
  const favoriteId = await fetchFavoriteId({ productId });
  return <FavoriteToggleForm favoriteId={favoriteId} productId={productId} />;
}
