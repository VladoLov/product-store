import ProductsContainer from "@/components/products/ProductsContainer";
import React from "react";

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ layout?: string; search?: string }>;
}) {
  // Await the searchParams Promise before accessing its properties
  const params = await searchParams;
  const layout = params.layout || "grid";
  const search = params.search || "";

  return <ProductsContainer layout={layout} search={search} />;
}
