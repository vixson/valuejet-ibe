import type { ActionFunction, LoaderFunction, LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Header } from "~/components/Header";
import { ProductCard } from "~/components/ProductCard";
import { addToCart } from "~/models/cart.server";
import type { Product } from "~/models/product.server";
import { getAllProducts } from "~/models/product.server";
import { getUserId } from "~/session.server";

type LoaderData = {
  products: Product[];
};
export const loader: LoaderFunction = async ({ request}: LoaderFunctionArgs) => {
  const products = await getAllProducts();
  return json({ products });
};

export const action: ActionFunction = async ({ request }) => {
  const userId = await getUserId(request);
  const formData = await request.formData();
  const action = formData.get("action");
  switch (action) {
    case "addToCart": {
      const productId = formData.get("productId");
      await addToCart(userId, String(productId));
      break;
    }
    default: {
      throw new Response("Bad Request", { status: 400 });
    }
  }
  return json({ success: true });
};

export default function Product() {
  const { products } = useLoaderData<LoaderData>();
  return (
  <>
      <Header />
      <div className="mx-3">
        <div className="grid md:grid-cols-5 gap-5 justify-center flex-auto ...">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
  </>
  
  );
}
