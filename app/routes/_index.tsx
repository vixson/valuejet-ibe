import type { MetaFunction } from "@remix-run/node";
import { Header } from "~/components/Header";
export const meta: MetaFunction = () => {
  return [
    { title: "ValueMall App" },
    { name: "description", content: "Welcome to ValueMall!" },
  ];
};

// THis the root route of the Application. This is the index Component
export default function Index() {
  return (
    <main className="dark:bg-gray-800 bg-white relative overflow-hidden h-screen">
    <Header/>
    <div className="bg-white dark:bg-slate-900 flex relative z-20 items-center overflow-hidden">
        <div className="container mx-auto px-6 flex relative py-16">
            <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
                <span className="w-20 h-2 bg-gray-800 dark:bg-white mb-12">
                </span>
                <h1 className="font-bebas-neue uppercase text-xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-800">
                Discover Endless 
                    <span className="text-5xl sm:text-7xl">
                    Possibilities
                    </span>
                </h1>
                <p className="text-sm sm:text-base text-gray-700 dark:text-white">
                Discover a world of endless possibilities right at your fingertips. Whether you're searching for the latest trends in fashion, upgrading your tech essentials, or finding the perfect gift, we're here to make your shopping experience effortless and enjoyable. </p>
                <div className="flex mt-8">
                    <a href="/products" className="uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400">
                        Find Products
                    </a>
                    <a href="register" className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500 dark:text-white hover:bg-pink-500 hover:text-white text-md">
                        Register
                    </a>
                </div>
            </div>
            <div className="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
                <img alt="" src="https://www.tailwind-kit.com/images/object/10.png" className="max-w-xs md:max-w-sm m-auto"/>
            </div>
        </div>
    </div>
</main>
  )
}
