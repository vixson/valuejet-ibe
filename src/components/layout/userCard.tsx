"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useAuth } from "@/contexts/auth";
import { logout } from "@/store/authSlice";
import { useAppDispatch } from "@/store/store";
import Link from "next/link";
import { TbDashboard, TbLogout } from "react-icons/tb";

const UserCard = () => {
  const dispatch = useAppDispatch();
  const AUTHROUTE = [
    { href: "/dashboard", label: "Dashboard", icon: TbDashboard },
    {
      href: "#",
      label: "Logout",
      icon: TbLogout,
      action: () => {
        dispatch(logout());
      },
    },
  ];
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="h-10 w-10 hover:ring-4 user cursor-pointer relative ring-blue-700/30 rounded-full bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80')]"></div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {/* <div className="drop-down  w-48 overflow-hidden bg-white rounded-md shadow absolute top-12 right-3"> */}
        <DropdownMenuGroup>
          {AUTHROUTE.map((route, index) => {
            const Icon = route.icon;
            return (
              <Link href={route.href} passHref key={index}>
                <DropdownMenuItem className="font-bold" onClick={route.action}>
                  <Icon size={20} className="mr-3" />
                  {route.label}
                </DropdownMenuItem>
              </Link>
            );
          })}
        </DropdownMenuGroup>

        {/* </div> */}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserCard;
