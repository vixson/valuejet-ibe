import { SmallLogo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
import { TiUserAdd } from "react-icons/ti";
import LoginForm from "./LoginForm";

const page = () => {
  return (
    <div className="flex flex-col bg-primary-foreground md:shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
      <div className="w-full flex items-center justify-center mb-4">
        <Link href="/" passHref>
          <SmallLogo />
        </Link>
      </div>
      <div className="font-medium self-center text-xl sm:text-2xl uppercase text-primary mb-2">
        Login To Your Account
      </div>
      {/* <button className="relative mt-6 border rounded-md py-2 text-sm text-gray-800 bg-gray-100 hover:bg-gray-200">
          <span className="absolute left-0 top-0 flex items-center justify-center h-full w-10 text-blue-500">
            <i className="fab fa-facebook-f"></i>
          </span>
          <FaGoogle className="relative" />
          <span>Login with Facebook</span>
        </button> */}
      <Button className="bg-gray-100 text-primary hover:text-primary-foreground">
        <FaGoogle className="mr-2" size={18} />
        <span>Login With Google</span>
      </Button>
      <div className="relative mt-10 h-px bg-gray-300">
        <div className="absolute left-0 top-0 flex justify-center w-full -mt-2">
          <span className="bg-white px-4 text-xs text-gray-500 uppercase">
            Or Login With Email
          </span>
        </div>
      </div>
      <div className="mt-10">
        <LoginForm />
      </div>
      <div className="flex justify-center items-center mt-6">
        <Link
          href="#"
          className="inline-flex items-center font-bold hover:text-blue-700 text-xs text-center"
        >
          <TiUserAdd size={20} />
          <span className="ml-2">You don&apos;t have an account?</span>
        </Link>
      </div>
      <div className="mt-5">
        <div>
          <span className="font-bold mr-2">Email:</span> johndoe@gmail.com
        </div>
        <div>
          <span className="font-bold mr-2">Password:</span>
          password
        </div>
      </div>
    </div>
  );
};

export default page;
