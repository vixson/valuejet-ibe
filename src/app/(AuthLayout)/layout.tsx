"use client";
import { selectUser } from "@/store/authSlice";
import { redirect } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";

const AuthLayout = ({ children }: React.PropsWithChildren) => {
  const user = useSelector(selectUser);
  if (user) {
    redirect("/");
  }
  return (
    <div className="min-h-screen flex flex-col items-center bg-primary-foreground justify-center  md:bg-gray-300">
      {children}
    </div>
  );
};

export default AuthLayout;
