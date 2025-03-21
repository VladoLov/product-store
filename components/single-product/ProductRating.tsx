import { fetchProductRating } from "@/utils/actions";
import React from "react";
import { FaStar } from "react-icons/fa";

export default async function ProductRating({
  productId,
}: {
  productId: string;
}) {
  /*  const rating = 4.2;
  const count = 25; */
  const { count, rating } = await fetchProductRating(productId);

  const className = `flex gap-1 items-center text-md mt-1 mb-4`;
  const constValue = `(${count}) reviews`;
  return (
    <span className={className}>
      <FaStar className="w-3 h-3" />
      {rating} {constValue}
    </span>
  );
}
