"use client";
import { SmallLogo } from "@/components/logo";
import { cn } from "@/lib/utils";
import { selectUser } from "@/store/authSlice";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { useSelector } from "react-redux";
import { Button } from "../ui/button";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet";
import UserCard from "./userCard";

const Header = () => {
  const user = useSelector(selectUser);

  const routes = [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/about",
      label: "About",
    },
  ];
  return (
    <nav
      className={cn(
        "flex items-center justify-between bg-transparent px-3 sm:px-12 py-6 w-full z-20"
      )}
    >
      <div>
        <Link href={"/"} passHref>
          <SmallLogo />
        </Link>
      </div>
      <ul
        id="drawer"
        role="menu"
        className="sm:gap-8 transition-left ease-[cubic-bezier(0.4, 0.0, 0.2, 1)] delay-150  sm:flex  flex flex-col cursor-pointer absolute min-h-screen -left-48 sm:static w-48 top-0 bg-white sm:shadow-none shadow-xl sm:bg-transparent sm:flex-row sm:w-auto sm:min-h-0 dark:bg-slate-900  "
      >
        {routes.map((route, index) => (
          <li
            key={index}
            className="font-medium text-sm p-3 hover:bg-slate-300 dark:hover:bg-slate-800 sm:p-0 sm:hover:bg-transparent"
          >
            <Link
              href={route.href}
              className="dark:text-white font-semibold hover:text-secondary"
            >
              {route.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex gap-3 items-center">
        {user ? (
          <UserCard />
        ) : (
          <Link href="/login" className="font-bold">
            Login
          </Link>
        )}

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="sm:hidden cursor-pointer"
            >
              <CiMenuFries size={20} />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <Link href="#" className="mr-6 hidden lg:flex" prefetch={false}>
              <SmallLogo />
            </Link>
            <div className="grid gap-2 py-6">
              {routes.map((route, index) => (
                <SheetClose asChild key={index}>
                  <Link
                    href={route.href}
                    className="dark:text-white font-semibold hover:text-secondary"
                  >
                    {route.label}
                  </Link>
                </SheetClose>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Header;
