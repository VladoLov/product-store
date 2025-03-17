import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

export default function Rating({ rating }: { rating: number }) {
  // rating = 2
  // 1 <=2 => true
  // 2 <=2 => true
  const stars = Array.from({ length: 5 }, (_, index) => index + 1 <= rating);

  return (
    <div className="flex items-center gap-x-1">
      {stars.map((isFilled, index) => {
        const className = `w-3 h-3 ${
          isFilled ? "text-primary" : "text-gray-400"
        }`;
        return isFilled ? (
          <FaStar className={className} key={index} />
        ) : (
          <FaRegStar className={className} key={index} />
        );
      })}
    </div>
  );
}
