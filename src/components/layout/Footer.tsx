import Link from "next/link";
import React from "react";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { IoIosPhonePortrait } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Logo, SmallLogo } from "../logo";

const Footer = () => {
  const useFulLinks = [
    "Home",
    "About",
    "Charter",
    "Contact Us",
    "Terms & Conditions",
    "Cookie Policy",
    "Privacy",
  ];

  const Help = [
    "Travel Updates & More",
    "Special Assistance",
    "Frequestly Asked Questions",
    "Careers",
  ];
  const constactUs = [
    {
      icon: FaMapMarkerAlt,
      label: "31 Ladoke Akintola Street, Ikeja GRA, Lagos, Nigeria",
    },
    {
      icon: IoIosPhonePortrait,
      label: "0201 448 2998",
    },
    {
      icon: IoIosPhonePortrait,
      label: "+234 912 595 0403",
    },
    {
      icon: IoIosPhonePortrait,

      label: "+234 915 382 3424",
    },
    {
      icon: IoIosPhonePortrait,
      label: "+234 704 710 8136",
    },
    {
      icon: IoIosPhonePortrait,
      label: "+234 912 595 0403 Whatsapp only",
    },
  ];
  return (
    <footer
      className="bg-primary text-secondary"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Logo />
            <p className="text-sm leading-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              molestias inventore, fugit error magni unde illum.
            </p>
            <div className="flex space-x-6">
              <Link href="#" className="hover:text-gray-500">
                <span className="sr-only">Facebook</span>
                <FaFacebook size={22} />
              </Link>

              <Link href="#" className="hover:text-blue-4 hover:text-gray-500">
                <span className="sr-only">X</span>
                <FaXTwitter size={22} />
              </Link>
              <Link href="#" className="hover:text-gray-500">
                <span className="sr-only">Youtube</span>
                <FaYoutube size={22} />
              </Link>
            </div>
          </div>
          <div className="mt-16 md:grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="grid grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-md font-semibold leading-6 text-secondary">
                  Useful Links
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {useFulLinks.map((link, index) => (
                    <li key={index}>
                      <Link
                        href="#"
                        className="text-sm leading-6 text-gray-300 hover:text-gray-500"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-0">
                <h3 className="text-sm font-semibold leading-6">Help</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {Help.map((route, index) => (
                    <li key={index}>
                      <Link
                        href="#"
                        className="text-md leading-6 text-gray-300 hover:text-gray-500"
                      >
                        {route}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-10 md:mt-0 md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-md font-semibold leading-6">Contact Us</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {constactUs.map((route, index) => {
                    const Icon = route.icon;
                    return (
                      <li key={index}>
                        <a
                          href="#"
                          className="text-sm items-center flex leading-6 text-gray-300 hover:text-gray-500"
                        >
                          <Icon size={30} className="mr-2" />
                          {route.label}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-300/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5">
            &copy; {new Date().getFullYear()} ValueJet. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
