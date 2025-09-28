"use client";

import { useEffect, useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import url from "@/app/_route/route";
import Image from "next/image";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Product", href: url.f_product },
  { name: "Features", href: url.f_feature },
  { name: "Dashboard", href: url.b_dashboard },
];

interface Props {
  themeValue: string;
}

export default function Header({ themeValue }: Props) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  const changeTheme = (type: "light" | "dark") => {
    if (type == "light") {
      setTheme(type);
      cookieStore.set("theme", type);
    } else {
      setTheme(type);
      cookieStore.set("theme", type);
    }
    location.reload();
  };

  useEffect(() => {
    if(themeValue){
      setTheme(themeValue == "light" ? "light" : "dark");
      if (themeValue === "light") {
        const checkBox = document.getElementById(
          "light"
        ) as HTMLInputElement | null;
        if (checkBox) {
          checkBox.checked = true;
        }
      } else {
        const checkBox = document.getElementById(
          "dark"
        ) as HTMLInputElement | null;
        if (checkBox) {
          checkBox.checked = true;
        }
      }
    }
  }, [themeValue]);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image
              alt="logo"
              src="/assets/logo/mark.svg"
              width={120}
              height={120}
              className="h-8 w-auto"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm/6 font-semibold text-gray-900"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-5">
          <div
            className={`${
              theme == "light" ? "bg-gray-200" : "bg-gray-800"
            } relative w-32 h-8 rounded-full p-1`}
          >
            <input
              type="radio"
              id="light"
              name="switch"
              className="sr-only"
              value="0"
              onClick={() => changeTheme("light")}
            />
            <input
              type="radio"
              id="dark"
              name="switch"
              className="sr-only peer"
              value="1"
              onClick={() => changeTheme("dark")}
            />
            <div
              className={`${
                theme == "light" ? "bg-gray-50" : "bg-gray-600"
              } absolute top-1 w-1/2 h-6 rounded-full shadow transition-transform duration-200 ease-in-out
             peer-checked:translate-x-14`}
            ></div>

            <div
              className={`${
                theme == "light" ? "text-black" : "text-white"
              } relative grid grid-cols-2 h-full text-sm font-medium`}
            >
              <label
                htmlFor="light"
                className="flex items-center justify-center cursor-pointer select-none"
              >
                <svg viewBox="0 0 28 28" height="25px" fill="none">
                  <circle
                    cx="14"
                    cy="14"
                    r="3.5"
                    stroke="currentColor"
                  ></circle>
                  <path
                    d="M14 8.5V6.5"
                    stroke="currentColor"
                    stroke-linecap="round"
                  ></path>
                  <path
                    d="M17.889 10.1115L19.3032 8.69727"
                    stroke="currentColor"
                    stroke-linecap="round"
                  ></path>
                  <path
                    d="M19.5 14L21.5 14"
                    stroke="currentColor"
                    stroke-linecap="round"
                  ></path>
                  <path
                    d="M17.889 17.8885L19.3032 19.3027"
                    stroke="currentColor"
                    stroke-linecap="round"
                  ></path>
                  <path
                    d="M14 21.5V19.5"
                    stroke="currentColor"
                    stroke-linecap="round"
                  ></path>
                  <path
                    d="M8.69663 19.3029L10.1108 17.8887"
                    stroke="currentColor"
                    stroke-linecap="round"
                  ></path>
                  <path
                    d="M6.5 14L8.5 14"
                    stroke="currentColor"
                    stroke-linecap="round"
                  ></path>
                  <path
                    d="M8.69663 8.69711L10.1108 10.1113"
                    stroke="currentColor"
                    stroke-linecap="round"
                  ></path>
                </svg>
              </label>
              <label
                htmlFor="dark"
                className="flex items-center justify-center cursor-pointer select-none"
              >
                <svg height="25px" viewBox="0 0 28 28" fill="none">
                  <path
                    d="M10.5 9.99914C10.5 14.1413 13.8579 17.4991 18 17.4991C19.0332 17.4991 20.0176 17.2902 20.9132 16.9123C19.7761 19.6075 17.109 21.4991 14 21.4991C9.85786 21.4991 6.5 18.1413 6.5 13.9991C6.5 10.8902 8.39167 8.22304 11.0868 7.08594C10.7089 7.98159 10.5 8.96597 10.5 9.99914Z"
                    stroke="currentColor"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M16.3561 6.50754L16.5 5.5L16.6439 6.50754C16.7068 6.94752 17.0525 7.29321 17.4925 7.35607L18.5 7.5L17.4925 7.64393C17.0525 7.70679 16.7068 8.05248 16.6439 8.49246L16.5 9.5L16.3561 8.49246C16.2932 8.05248 15.9475 7.70679 15.5075 7.64393L14.5 7.5L15.5075 7.35607C15.9475 7.29321 16.2932 6.94752 16.3561 6.50754Z"
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M20.3561 11.5075L20.5 10.5L20.6439 11.5075C20.7068 11.9475 21.0525 12.2932 21.4925 12.3561L22.5 12.5L21.4925 12.6439C21.0525 12.7068 20.7068 13.0525 20.6439 13.4925L20.5 14.5L20.3561 13.4925C20.2932 13.0525 19.9475 12.7068 19.5075 12.6439L18.5 12.5L19.5075 12.3561C19.9475 12.2932 20.2932 11.9475 20.3561 11.5075Z"
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </label>
            </div>
          </div>

          <a href="#" className="text-sm/6 font-semibold text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image
              height={120}
            width={120}
                alt=""
                src="/assets/logo/mark.svg"
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
      <hr className="border-gray-300" />
    </header>
  );
}
