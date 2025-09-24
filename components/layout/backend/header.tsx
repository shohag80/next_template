"use client";

import Link from "next/link";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl: "https://avatars.githubusercontent.com/u/90141002?v=4",
};
const navigation = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Product", href: "/product-setup" },
  { name: "Reports", href: "#" },
  { name: "Users", href: "/users" },
  { name: "Website", href: "/" },
];
const userNavigation = [
  { name: "Your profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

interface Props {
  themeValue: string;
}

export default function Example({ themeValue }: Props) {
  const [theme, setTheme] = useState("light");
  const route = usePathname();

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
  }, []);
  return (
    <>
      <Disclosure as="nav" className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="shrink-0">
                <img
                  alt="Your Company"
                  src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                  className="size-8"
                />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {navigation.map((item) => (
                    <Link
                      href={item.href}
                      className={classNames(
                        item.href == route
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-white/5 hover:text-white",
                        "rounded-md px-3 py-2 text-sm font-medium"
                      )}
                      key={item.name}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div
              className={`${
                theme == "light" ? "bg-gray-200" : "bg-gray-700"
              } relative right-[-200px] w-32 h-8 rounded-full p-1`}
            >
              <input
                type="radio"
                id="light"
                name="switch"
                className="sr-only"
                value="0"
                onClick={() => changeTheme("light")}
                readOnly
              />
              <input
                type="radio"
                id="dark"
                name="switch"
                className="sr-only peer"
                value="1"
                onClick={() => changeTheme("dark")}
                readOnly
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
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                <button
                  type="button"
                  className="relative rounded-full p-1 text-gray-400 hover:text-white focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon aria-hidden="true" className="size-6" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <MenuButton className="relative flex max-w-xs items-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                    <img
                      alt=""
                      src={user.imageUrl}
                      className="size-8 rounded-full outline -outline-offset-1 outline-white/10"
                    />
                  </MenuButton>

                  <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg outline-1 outline-black/5 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                  >
                    {userNavigation.map((item) => (
                      <MenuItem key={item.name}>
                        <a
                          href={item.href}
                          className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                        >
                          {item.name}
                        </a>
                      </MenuItem>
                    ))}
                  </MenuItems>
                </Menu>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              {/* Mobile menu button */}
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon
                  aria-hidden="true"
                  className="block size-6 group-data-open:hidden"
                />
                <XMarkIcon
                  aria-hidden="true"
                  className="hidden size-6 group-data-open:block"
                />
              </DisclosureButton>
            </div>
          </div>
        </div>

        <DisclosurePanel className="md:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
            {navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                className={classNames(
                  item.href == route
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-white/5 hover:text-white",
                  "block rounded-md px-3 py-2 text-base font-medium"
                )}
              >
                {item.name}
              </DisclosureButton>
            ))}
          </div>
          <div className="border-t border-white/10 pt-4 pb-3">
            <div className="flex items-center px-5">
              <div className="shrink-0">
                <img
                  alt=""
                  src={user.imageUrl}
                  className="size-10 rounded-full outline -outline-offset-1 outline-white/10"
                />
              </div>
              <div className="ml-3">
                <div className="text-base/5 font-medium text-white">
                  {user.name}
                </div>
                <div className="text-sm font-medium text-gray-400">
                  {user.email}
                </div>
              </div>
              <button
                type="button"
                className="relative ml-auto shrink-0 rounded-full p-1 text-gray-400 hover:text-white focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500"
              >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">View notifications</span>
                <BellIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-3 space-y-1 px-2">
              {userNavigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-white/5 hover:text-white"
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </div>
        </DisclosurePanel>
      </Disclosure>
    </>
  );
}
