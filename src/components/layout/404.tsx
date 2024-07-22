"use client";
import React from "react";
import Header from "./header";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Footer from "./Footer";

const FourOhFour = () => {
  const router = useRouter();
  return (
    <div className="text-center px-6 py-24 sm:py-32 lg:px-8">
      <p className="text-base font-semibold text-red-600">404</p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        Page not found
      </h1>
      <p className="mt-6 text-base leading-7 text-gray-600">
        Sorry, we couldn’t find the page you’re looking for.
      </p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <Button
          onClick={() => router.back()}
          className="px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          Go back
        </Button>
        <Link href="/" className="text-sm font-semibold text-gray-900">
          Home
        </Link>
      </div>
    </div>
  );
};

export default FourOhFour;
