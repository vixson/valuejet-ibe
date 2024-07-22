import FourOhFour from "@/components/layout/404";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/header";

const NotFound = () => {
  return (
    <>
      <Header />
      <main className="grid min-h-full place-items-center bg-white">
        <FourOhFour />
      </main>
      <Footer />
    </>
  );
};

export default NotFound;
