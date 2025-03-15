import React from "react";
import { faker } from "@faker-js/faker";
import FormInput from "@/components/form/FormInput";
import FormContainer from "@/components/form/FormContainer";
import { createProductAction } from "@/utils/actions";
import PriceInput from "@/components/form/Price";
import ImageInput from "@/components/form/ImageInput";
import TextAreaInput from "@/components/form/TextAreaInput";
import Checkbox from "@/components/form/Checkbox";
import { SubmitButton } from "@/components/form/Button";

/* const createProductAction = async (formData: FormData) => {
  "use server";
  const name = formData.get("name") as string;
  console.log(name);
}; */

export default function CreateProductPage() {
  const name = faker.commerce.productName();
  const company = faker.company.name();
  const description = faker.lorem.paragraph({ min: 10, max: 12 });
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">create product</h1>
      <div className="border p-8 rounded-md">
        {/*  <form action={createProductAction}>
          <FormInput
            type="text"
            name="name"
            label="product name"
            defaultValue={name}
          />
          <Button type="submit" size="lg">
            Submit
          </Button>
        </form> */}
        {/** On the top is hardcoded example, but bottom we will use our components */}
        <FormContainer action={createProductAction}>
          <div className="grid gap-4 md:grid-cols-2 my-4">
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
              defaultValue={company}
            />
            <PriceInput />
            <ImageInput />
          </div>
          <TextAreaInput
            name="description"
            labelText="product description"
            defaultValue={description}
          />
          <div className="mt-6">
            <Checkbox name="feature" label="featured" />
          </div>
          <SubmitButton text="create product " className="mt-8" />
        </FormContainer>
      </div>
    </section>
  );
}
