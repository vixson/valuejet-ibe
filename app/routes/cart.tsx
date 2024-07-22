
import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData} from "@remix-run/react";
import {
  addToCart,
  getShoppingCart,
  removeFromCart,
} from "~/models/cart.server";
import { requireUserId } from "~/session.server";
import GrandTotalRow from "~/components/Cart/GrandTotalRaw";
import { Card} from "flowbite-react";
import { RiMastercardFill } from "react-icons/ri";
import { BiLogoVisa } from "react-icons/bi";
import type { CartItem } from "@prisma/client";
import { Header } from "~/components/Header";
import { CartItemRow } from "~/components/Cart/CartItemRow";

type LoaderData = {
  cart: Awaited<ReturnType<typeof getShoppingCart>>;
};

export const loader: LoaderFunction = async ({ request }) => {
  const requiredUserId = await requireUserId(request);
  const cart = await getShoppingCart(requiredUserId);
  return json({ cart });
};




export const action: ActionFunction = async ({ request }) => {
  const requiredUserId = await requireUserId(request);
  const formData = await request.formData();
  const action = formData.get("action");
  switch (action) {
    case "increaseQuantity":
    case "decreaseQuantity": {
      const productId = formData.get("productId");
      const quantity = action === "increaseQuantity" ? 1 : -1;
      await addToCart(requiredUserId, String(productId), quantity);
      break;
    }
    case "removeFromCart": {
      const productId = formData.get("productId");
      await removeFromCart(requiredUserId, String(productId));
      break;
    }
    default: {
      throw new Response("Bad Request", { status: 400 });
    }
  }
  return json({ success: true });
};

export default function Cart(){

  const { cart } = useLoaderData<LoaderData>();

  const totalItemCount =
    cart?.cartItems.reduce((acc, item) => acc + item.quantity, 0) ?? 0;
  const grandTotal =
    cart?.cartItems.reduce(
      (acc: number, item: CartItem) => acc + Number(item.totalPrice),
      0
    ) ?? 0;

  return <div>
    <Header totalItemCount={totalItemCount}/>
  <div className="flex flex-row ">
      <div className="basis-2/3">
        <div>
          <div className="flex flex-col mx-10 gap-5">
            {cart?.cartItems.map((cartItem) => (
              <CartItemRow key={cartItem.id} cartItem={cartItem} />))}
              <GrandTotalRow
            totalItemCount={totalItemCount}
            grandTotal={grandTotal}
          />
          </div>
        </div>
      </div>
     
     
      <div className="basis-1/3 mx-3">
      <Card className="flex text-slate-200 place-content-center	  flex-row ....">
        <p className="mx-auto text-2xl mb-14">Card Details</p>
        <div className="justify-center ...">
          <p className="place-self-center ...">Select Card Type</p>
          <div className="flex flex-row justify-evenly ...">
              <RiMastercardFill className="text-5xl"/>
              <BiLogoVisa className="text-5xl"/>
          </div>
        <div className="relative z-0 w-full mb-5 group">
      <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="floating_email" 
      className="peer-focus:font-medium absolute text-sm text-gray-300 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Card Number</label>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
              <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label 
              htmlFor="floating_first_name" 
              className="peer-focus:font-medium absolute text-sm text-gray-300 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Expiry Date</label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
              <input type="text" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">CVV</label>
          </div>
        </div>
        </div>
      </Card>
      </div>
  </div>
</div>
}

// function fCartItemRow({
//   cartItem,
// }: {
//   cartItem: CartItem & { product: Product };
// }){
//   const fetcher = useFetcher();
//   const product = cartItem.product;
//   return ( <Banner>
//     <div className="rounded-xl font-roboto flex text-slate-700 w-full justify-between border-b border-gray-200 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-700">
//       <div className="mx-auto flex items-center">
//         <div className="flex items-center text-sm gap-16 font-normal">
//           <img className="w-16 h-16 rounded-full" src={cartItem.product.thumbnail} alt=""/>
//           <div className="flex text-slate-200 flex-col ...">
//               <p className=" font-bold">{cartItem.product.name}</p>
//               <p className="text-xs font-light place-self-center text-ellipsis ...">{cartItem.product.description}</p>
//           </div>
//           <p className="font-semibold text-slate-200">₦{product.price.toString()} each</p>

//           <div className="flex flex-row text-slate-200 space-x-3 ...">
//               <p className="font-bold my-auto text-2xl">{cartItem.quantity}</p>
//               <div className="flex flex-col ...">
//               <fetcher.Form method="post">
//                 <input type="hidden" name="productId" value={cartItem.product.id} />
//                   <button
//                     name="action"
//                     value="increaseQuantity"
//                     className="pt-1 text-slate-400  disabled:text-gray-200"
//                   >
//                     <FaPlusCircle className="fill-slate-400 text-2xl hover:fill-slate-300"/>
//                   </button>
//               </fetcher.Form>
//               <fetcher.Form method="post">
//                 <input type="hidden" name="productId" value={product.id} />
//                   <button
//                     name="action"
//                     value="decreaseQuantity"
//                     className="pt-1 text-gray-400  disabled:text-gray-200"
//                     disabled={cartItem.quantity < 1}

//                   >
//                 <FaMinusCircle className="fill-slate-400 text-2xl hover:fill-slate-300"/>
//                 </button>
//               </fetcher.Form>
//             </div>
//           </div>
//           <span className="[&_p]:inline text-slate-200 font-semibold">
//           ₦{cartItem.totalPrice.toString()}
//           </span>
//         </div>
//       </div>
//       <fetcher.Form method="post" className="my-auto">
//               <input type="hidden" name="productId" value={product.id} />
//               <button
//                 className="inline-flex items-center"
//                 name="action"
//                 value="removeFromCart"
//               >
//           <TrashIcon className="h-6 w-6 fill-gray-600 hover:fill-slate-300" />{" "}
//         </button>
//         </fetcher.Form>
//     </div>
//   </Banner>)
// }
