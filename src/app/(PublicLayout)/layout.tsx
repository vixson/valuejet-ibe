import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/header";
import React from "react";

const PublicLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <Header />
      <main className="min-h-full h-full">{children}</main>
      <Footer />
    </>
  );
};

export default PublicLayout;
