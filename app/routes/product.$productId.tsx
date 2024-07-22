/* eslint-disable jsx-a11y/alt-text */

import type {ActionFunction, LoaderFunctionArgs } from "@remix-run/node";
import { json, } from "@remix-run/node";
import {useLoaderData, useFetcher} from "@remix-run/react";
import invariant from "tiny-invariant";
import { Header } from "~/components/Header";
import { addToCart } from "~/models/cart.server";
import { getProduct } from "~/models/product.server";
import { getUserId, requireUserId } from "~/session.server";


export const loader = async ({ params, request }: LoaderFunctionArgs) => {
  await requireUserId(request);
  invariant(params.productId, "Product not found");

  const product = await getProduct(params.productId);
  if (!product) {
    throw new Response("Not found", {status: 404});
  }

  return json(product);
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


export default function Product(){
    const product = useLoaderData<typeof loader>();
    const fetcher = useFetcher();

    /** useFetcher and useLoaderData hooks are central to the state management of this app.
     * useFetcher is very convenient when you need to retrieve data without changing navigation state
     * 
     */

    return (<>
    <Header/>
    <div className="font-sans bg-white dark:bg-slate-900">
        <div className="p-4 lg:max-w-7xl max-w-4xl mx-auto">
            <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-12 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] shadow-slate-200 p-6 rounded-lg">
                <div className="lg:col-span-3 w-full lg:sticky top-0 text-center">

                    <div className="px-4 py-10 rounded-lg shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] shadow-slate-200 relative">
                        <img src={product.thumbnail} alt="Product" className="w-3/4 rounded object-cover mx-auto" />
                        <button type="button" className="absolute top-4 right-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" fill="#ccc" className="mr-1 hover:fill-[#333]" viewBox="0 0 64 64">
                                <path d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z" data-original="#000000"></path>
                            </svg>
                        </button>
                    </div>

                    <div className="mt-6 flex flex-wrap justify-center gap-6 mx-auto">
                        
                        
                    </div>
                </div>

                <div className="lg:col-span-2">
                    <h2 className="text-2xl font-extrabold text-slate-200">{product.name}| Laptop</h2>

                    <div className="flex space-x-2 mt-4">
                        <svg className="w-5 fill-blue-600" viewBox="0 0 14 13" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                        </svg>
                        <svg className="w-5 fill-blue-600" viewBox="0 0 14 13" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                        </svg>
                        <svg className="w-5 fill-blue-600" viewBox="0 0 14 13" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                        </svg>
                        <svg className="w-5 fill-blue-600" viewBox="0 0 14 13" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                        </svg>
                        <svg className="w-5 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                        </svg>
                        <h4 className="text-slate-200 text-base">500 Reviews</h4>
                    </div>

                    <div className="flex flex-wrap gap-4 mt-8">
                        <p className="text-slate-200 text-3xl font-bold">₦{product.price}</p>
                        <p className="text-slate-200 text-base"><strike>₦{Math.floor(parseInt(product.price) + (parseInt(product.price) * 0.1)) }</strike> <span className="text-sm ml-1">Tax included</span></p>
                    </div>

                    <div className="mt-8">
                        <h3 className="text-xl font-bold text-slate-200">Choose a Color</h3>
                        <div className="flex flex-wrap gap-3 mt-4">
                            <button type="button" className="w-10 h-10 bg-black border-2 border-white hover:border-gray-800 rounded-full shrink-0 transition-all"></button>
                            <button type="button" className="w-10 h-10 bg-gray-300 border-2 border-white hover:border-gray-800 rounded-full shrink-0 transition-all"></button>
                            <button type="button" className="w-10 h-10 bg-gray-100 border-2 border-white hover:border-gray-800 rounded-full shrink-0 transition-all"></button>
                            <button type="button" className="w-10 h-10 bg-blue-400 border-2 border-white hover:border-gray-800 rounded-full shrink-0 transition-all"></button>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-4 mt-8">
                    
                        <button type="button" className="min-w-[200px] px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded">Buy now</button>
                    <fetcher.Form method="post">
                        <input type="hidden" name="productId" value={product.id} />
                        <button 
                         name="action"
                         value="addToCart"
                         className="min-w-[200px] px-4 py-2.5 border border-blue-600 bg-transparent hover:bg-gray-50 text-slate-200 hover:text-slate-900 text-sm font-semibold rounded">Add to cart</button>
                    </fetcher.Form>
                    </div>
                </div>
            </div>

            <div className="  mt-16 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] shadow-slate-200 p-6">
                <h3 className="text-xl font-bold text-slate-200 mb-3">Product information</h3>
                <p className="text-sm text-slate-200">{product.description}</p>
              
            </div>

            <div className="mt-16 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] shadow-slate-200 p-6">
                <h3 className="text-xl font-bold text-slate-200">Reviews(10)</h3>
                <div className="grid md:grid-cols-2 gap-12 mt-4">
                    <div className="space-y-3">
                        <div className="flex items-center">
                            <p className="text-sm text-slate-200 font-bold">5.0</p>
                            <svg className="w-5 fill-blue-600 ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <div className="bg-gray-400 rounded w-full h-2 ml-3">
                                <div className="w-2/3 h-full rounded bg-blue-600"></div>
                            </div>
                            <p className="text-sm text-slate-200 font-bold ml-3">66%</p>
                        </div>

                        <div className="flex items-center">
                            <p className="text-sm text-slate-200 font-bold">4.0</p>
                            <svg className="w-5 fill-blue-600 ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <div className="bg-gray-400 rounded w-full h-2 ml-3">
                                <div className="w-1/3 h-full rounded bg-blue-600"></div>
                            </div>
                            <p className="text-sm text-slate-200 font-bold ml-3">33%</p>
                        </div>

                        <div className="flex items-center">
                            <p className="text-sm text-slate-200 font-bold">3.0</p>
                            <svg className="w-5 fill-blue-600 ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <div className="bg-gray-400 rounded w-full h-2 ml-3">
                                <div className="w-1/6 h-full rounded bg-blue-600"></div>
                            </div>
                            <p className="text-sm text-slate-200 font-bold ml-3">16%</p>
                        </div>

                        <div className="flex items-center">
                            <p className="text-sm text-slate-200 font-bold">2.0</p>
                            <svg className="w-5 fill-blue-600 ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <div className="bg-gray-400 rounded w-full h-2 ml-3">
                                <div className="w-1/12 h-full rounded bg-blue-600"></div>
                            </div>
                            <p className="text-sm text-slate-200 font-bold ml-3">8%</p>
                        </div>

                        <div className="flex items-center">
                            <p className="text-sm text-slate-200 font-bold">1.0</p>
                            <svg className="w-5 fill-blue-600 ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <div className="bg-gray-400 rounded w-full h-2 ml-3">
                                <div className="w-[6%] h-full rounded bg-blue-600"></div>
                            </div>
                            <p className="text-sm text-slate-200 font-bold ml-3">6%</p>
                        </div>
                    </div>

                    <div>
                        <div className="flex items-start">
                            <img src="https://readymadeui.com/team-2.webp" className="w-12 h-12 rounded-full border-2 border-white" />
                            <div className="ml-3">
                                <h4 className="text-sm font-bold text-slate-200">John Doe</h4>
                                <div className="flex space-x-1 mt-1">
                                    <svg className="w-4 fill-blue-600" viewBox="0 0 14 13" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                    <svg className="w-4 fill-blue-600" viewBox="0 0 14 13" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                    <svg className="w-4 fill-blue-600" viewBox="0 0 14 13" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                    <svg className="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                    <svg className="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                    <p className="text-xs !ml-2 font-semibold text-slate-200">2 mins ago</p>
                                </div>
                                <p className="text-sm mt-4 text-slate-200">Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>

                        <button type="button" className="w-full mt-10 px-4 py-2.5 bg-transparent hover:bg-gray-50 border border-blue-600 text-slate-200 font-bold rounded">Read all reviews</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>)
}