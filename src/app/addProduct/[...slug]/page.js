"use client";
import Sidebar from "@/components/sidebar/Sidebar";
import React, { useState } from "react";
import { Navbar } from "@/components/Navbar/Navbar";
import Title from "@/components/Title/Title";
import AddProductForm from "../AddProductForm";

const title = "Add Product";
const breadCrums = "Home / My Account / Add Product";
const page = ({ params }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const pageName = "Profile";
  return (
    <div className="">
      <Navbar
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        pageName={pageName}
      />
      <div className="flex">
        {isMenuOpen && <Sidebar isMenuOpen={isMenuOpen} />}
        <div className="border-l-2 text-gray-300"></div>
        <div
          className={`flex-1 ml-6 p-1 ${
            isMenuOpen ? "" : "w-full h-full absolute  left-0"
          }`}
        >
          <Title title={title} breadCrums={breadCrums} />
          <AddProductForm paramsId={params.slug[0]} />
        </div>
      </div>
    </div>
  );
};

export default page;
