"use client";
import React, { useState } from "react";
import {
  MagnifyingGlassIcon,
  UserIcon,
  HeartIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import { logo, logoDropDown, images } from "../app/utils";
import { auth } from "@/firebaseConfig";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
const HomePageCreativeBanner = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropDownValue, setDropDownValue] = useState("");
  const [isDropdownAccountOpen, setIsDropdownAccountOpen] = useState(false);
  const router = useRouter();

  const { data, isLoading } = useQuery({
    queryKey: "categories",
    // retry:10,
    queryFn: () =>
      fetch("http://localhost:8090/api/admin/category")
        .then((res) => res.json())
        .then((data) => {
          return data;
        }),
  });

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const accountToggleDropdown = () => {
    setIsDropdownAccountOpen(!isDropdownAccountOpen);
  };
  const toLogin = () => {
    router.push('/login')
  }
  const toLoginCorporate = () => {
    router.push('/loginCorporate')
  }
  return (
    <div>
      <div className="flex flex-row mx-auto p-4 w-full shadow-lg  justify-between px-10">
        <div className="">
          <div className="flex flex-row mx-auto mr-4 w-full justify-center">
            <div className="items-center flex flex-row md:hidden">
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </div>
            <button
              id="dropdownDefaultButton"
              onClick={toggleDropdown}
              className="text-white bg-[#ce3434] hidden sm:block hover:bg-[#ce3434] font-medium text-[12px] px-5 py-2.5 text-center items-center"
              type="button"
            >
              {dropDownValue === "" ? "Shop by Category" : dropDownValue}
            </button>
            {isDropdownOpen && (
              <div
                id="dropdown"
                className="mt-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 z-10  absolute"
              >
                <ul className="py-2 text-[12px] text-gray-700 dark:text-gray-200">
                  {Array.isArray(data?.data) ? (
                    data?.data.map((items, id) => (
                      <li className="flex flex-row text-center">
                        <img src={items.image} className="h-5 w-5 m-2" />
                        <a
                          onClick={() => setDropDownValue(items.title)}
                          href="#"
                          className="block px-4 py-2 font-roboto font-medium text-[12px] text-black dark:hover:bg-gray-200 "
                        >
                          {items.title}
                        </a>
                      </li>
                    ))
                  ) : (
                    null
                  )}

                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="">
          <img
            src="./creative-Inn.png"
            width={250}
            height={400}
            className=""
            alt="Picture of the author"
          />
        </div>
        <div className="flex flex-row">
          <MagnifyingGlassIcon className="h-5 w-5 hover:cursor-pointer m-2" />
          <UserIcon
            onClick={accountToggleDropdown}
            className="h-5 w-5 hover:cursor-pointer m-2 "
          />
          {isDropdownAccountOpen && (
            <div
              id="dropdown"
              className="mt-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 z-10  absolute"
            >
              <ul className="py-2 w-full text-[12px] text-gray-700 dark:text-gray-200">
                <li className="flex flex-row text-center">
                  <a
                    href="#"
                    onClick={toLogin}
                    className="block px-4 py-2 w-full font-roboto font-medium text-[12px] text-black dark:hover:bg-gray-200 ">
                    Login to Personal
                  </a>
                </li>
                <li className="flex flex-row text-center">
                  <a
                    href="#"
                    onClick={toLoginCorporate}
                    className="block px-4 py-2 w-full font-roboto font-medium text-[12px] text-black dark:hover:bg-gray-200 "
                  >
                    Login to Corporate
                  </a>
                </li>
              </ul>
            </div>
          )}
          <HeartIcon className="h-5 w-5 hover:cursor-pointer m-2 hidden sm:block" />
          <ShoppingBagIcon className="h-5 w-5 hover:cursor-pointer m-2 hidden sm:block" />
        </div>
      </div>
    </div>
  );
};

export default HomePageCreativeBanner;
