import { fetchFeaturedProducts } from "@/utils/actions";
import React from "react";

import SectionTitle from "../global/SectionTitle";
import ProductsGrid from "../products/ProductsGrid";

export default async function FeaturedProducts() {
  const products = await fetchFeaturedProducts();
  if (products.length === 0) {
    return (
      <section className="pt-20">
        <SectionTitle text="Featured Products" />
        <ProductsGrid products={products} />
      </section>
    );
  }
  return (
    <section className="pt-20">
      <SectionTitle text="Featured Products" />
      <ProductsGrid products={products} />
    </section>
  );
}
