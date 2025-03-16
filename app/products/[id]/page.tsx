import BreadCrumbs from "@/components/single-product/BreadCrumbs";
import { fetchSingleProduct } from "@/utils/actions";
import Image from "next/image";
import { formatCurrency } from "@/utils/format";
import FavoriteToggleButton from "@/components/products/FavoriteToggleButton";
import AddToCart from "@/components/single-product/AddToCart";
import ProductRating from "@/components/single-product/ProductRating";
import ShareButton from "@/components/single-product/ShareButton";
import ProductReviews from "@/components/reviews/ProductReviews";
import SubmitReview from "@/components/reviews/SubmitReview";

export default async function SingleProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await fetchSingleProduct(id);
  if (!product) {
    return <div>Product not found</div>;
  }
  const { name, price, description, image, company } = product;
  const dollarAmount = formatCurrency(price);
  return (
    <section>
      <BreadCrumbs name={product.name} />
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        {/* Image */}
        <div className="relative h-full">
          <Image
            src={image}
            alt={name}
            fill
            priority
            className="w-full rounded object-cover"
            sizes="(max-width:768px) 100vw, (max-width:1028px) 50vw, 33vw"
          />
        </div>
        {/* Product Info */}
        <div>
          <div className="flex gap-x-8 items-center">
            <h1 className="capitalize text-3xl font-bold">{name}</h1>
            <div className="flex items-center gap-x-2">
              <FavoriteToggleButton productId={product.id} />
              <ShareButton productId={product.id} name={product.name} />
              {/** potential problem with value in productId, can be id or product.id */}
            </div>
          </div>
          <ProductRating productId={product.id} />
          <h4 className="text-xl mt-2">{company}</h4>
          <p className="mt-3 text-md bg-muted inline-block p-2 rounded">
            {dollarAmount}
          </p>
          <p className="mt-6 leading-8 text-muted-foreground">{description}</p>
          <AddToCart productId={product.id} />
        </div>
        {/* Image */}
      </div>
      <ProductReviews productId={product.id} />
      <SubmitReview productId={product.id} />
    </section>
  );
}
