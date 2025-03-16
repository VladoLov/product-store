import {
  fetchAdminProductsDetails,
  updateProductAction,
  updateProductImageAction,
} from "@/utils/actions";

import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import PriceInput from "@/components/form/Price";
import TextAreaInput from "@/components/form/TextAreaInput";
import { SubmitButton } from "@/components/form/Button";
import Checkbox from "@/components/form/Checkbox";
import ImageInputContainer from "@/components/form/ImageInputContainer";

export default async function EditProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const { id } = resolvedParams;
  const product = await fetchAdminProductsDetails(id);
  const { name, company, description, featured, price } = product;
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">Update Product</h1>
      <div className="border p-8 rounded">
        {/** Image input container */}
        <ImageInputContainer
          action={updateProductImageAction}
          name={name}
          image={product.image}
          text="update product image"
        />
        <input type="hidden" name="id" value={id} />
        <input type="hidden" name="url" value={product.image} />
        {/** Form container */}
        <FormContainer action={updateProductAction}>
          <div className="grid gap-4 md:grid-col-2 my-4">
            <input type="hidden" name="id" value={id} />
            <FormInput
              type="text"
              name="name"
              label="product name"
              defaultValue={name}
            />
            <FormInput
              type="text"
              name="company"
              label="company"
              defaultValue={name}
            />
            <PriceInput defaultValue={price} />
          </div>
          <TextAreaInput
            name="description"
            labelText="product description"
            defaultValue={description}
          />
          <div className="mt-6">
            <Checkbox
              name="featured"
              label="featured"
              defaultChecked={featured}
            />
          </div>
          <SubmitButton text="update product" className="mt-8" />
        </FormContainer>
      </div>
    </section>
  );
}
