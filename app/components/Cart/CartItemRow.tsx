import { CartItem, Product } from "@prisma/client";
import { useFetcher } from "@remix-run/react";
import { TrashIcon } from "@heroicons/react/24/outline";
import { Banner } from "flowbite-react";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";

export function CartItemRow({
  cartItem,
}: {
  cartItem: CartItem & { product: Product };
}){
  const fetcher = useFetcher();
  const product = cartItem.product;

  return (  <Banner>
    <div className="rounded-xl font-roboto flex text-slate-700 w-full justify-between border-b border-gray-200 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-700">
      <div className="mx-auto flex items-center">
        <div className="flex items-center text-sm gap-16 font-normal">
          <img className="w-16 h-16 rounded-full" src={cartItem.product.thumbnail} alt=""/>
          <div className="flex text-slate-200 flex-col ...">
              <p className=" font-bold">{cartItem.product.name}</p>
              <p className="text-xs font-light place-self-center text-ellipsis ...">{cartItem.product.description}</p>
          </div>
          <p className="font-semibold text-slate-200">₦{product.price.toString()} each</p>

          <div className="flex flex-row text-slate-200 space-x-3 ...">
              <p className="font-bold my-auto text-2xl">{cartItem.quantity}</p>
              <div className="flex flex-col ...">
              <fetcher.Form method="post">
                <input type="hidden" name="productId" value={cartItem.product.id} />
                  <button
                    name="action"
                    value="increaseQuantity"
                    className="pt-1 text-slate-400  disabled:text-gray-200"
                  >
                    <FaPlusCircle className="fill-slate-400 text-2xl hover:fill-slate-300"/>
                  </button>
              </fetcher.Form>
              <fetcher.Form method="post">
                <input type="hidden" name="productId" value={product.id} />
                  <button
                    name="action"
                    value="decreaseQuantity"
                    className="pt-1 text-gray-400  disabled:text-gray-200"
                    disabled={cartItem.quantity < 1}

                  >
                <FaMinusCircle className="fill-slate-400 text-2xl hover:fill-slate-300"/>
                </button>
              </fetcher.Form>
            </div>
          </div>
          <span className="[&_p]:inline text-slate-200 font-semibold">
          ₦{cartItem.totalPrice.toString()}
          </span>
        </div>
      </div>
      <fetcher.Form method="post" className="my-auto">
              <input type="hidden" name="productId" value={product.id} />
              <button
                className="inline-flex items-center"
                name="action"
                value="removeFromCart"
              >
          <TrashIcon className="h-6 w-6 fill-gray-600 hover:fill-slate-300" />{" "}
        </button>
        </fetcher.Form>
    </div>
  </Banner>)
}


// export default function CartItemRow({
//     cartItem,
//   }: {
//     cartItem: CartItem & { product: Product };
//   }) {
//     const fetcher = useFetcher();
//     const product = cartItem.product;
//     return (
//       <div className="flex max-h-32 items-start gap-4">
//         <img
//           className="max-w-32 max-h-32 w-32 basis-32"
//           src={product.thumbnail!}
//           alt=""
//         />
//         <div className="basis-64">
//           <p className="text-xl font-bold">{product.name}</p>
//           <p className="text-gray-600">{product.description}</p>
//         </div>
//         <div className="flex basis-24 flex-col items-center gap-1 text-xl text-gray-900">
//           <div className="flex gap-1">
//             <fetcher.Form method="post">
//               <input type="hidden" name="productId" value={product.id} />
//               <button
//                 name="action"
//                 value="decreaseQuantity"
//                 className="pt-1 text-gray-400  disabled:text-gray-200"
//                 disabled={cartItem.quantity === 0}
//               >
//                 <MinusCircleIcon className="h-5 w-5" />
//               </button>
//             </fetcher.Form>
//             {cartItem.quantity}
//             <fetcher.Form method="post">
//               <input type="hidden" name="productId" value={product.id} />
//               <button 
//               name="action" 
//               value="increaseQuantity" 
//               className="pt-1">
//                 <PlusCircleIcon className="h-5 w-5 text-gray-400" />
//               </button>
//             </fetcher.Form>
//           </div>
//           <div className="mt-2">
//             <fetcher.Form method="post">
//               <input type="hidden" name="productId" value={product.id} />
//               <button
//                 className="inline-flex items-center"
//                 name="action"
//                 value="removeFromCart"
//               >
//                 <TrashIcon className="h-6 w-6 text-gray-400" />{" "}
//                 <span className="text-sm text-gray-500">Remove</span>
//               </button>
//             </fetcher.Form>
//           </div>
//         </div>
//         <p className="basis-32 text-right text-xl text-gray-900">
//           ${product.price.toString()} each
//         </p>
//         <p className="basis-24 text-right text-xl font-bold text-gray-900">
//           ${cartItem.totalPrice.toString()}
//         </p>
//       </div>
//     );
//   }
  