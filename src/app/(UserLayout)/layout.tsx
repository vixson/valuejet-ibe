"use client";
import Header from "@/components/layout/header";
import { selectUser } from "@/store/authSlice";
import { redirect } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";

function UserLayout({ children }: React.PropsWithChildren) {
  const user = useSelector(selectUser);
  if (!user) {
    redirect("/login");
  }
  return (
    <>
      <Header />
      <main className="py-28 px-16 min-h-screen flex items-center justify-center">
        {children}
      </main>
    </>
  );
}

export default UserLayout;
