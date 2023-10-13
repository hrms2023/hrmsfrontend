"use client";
import Sidebar from "@/components/sidebar/Sidebar";
import React, { useEffect, useMemo, useState } from "react";
import { Navbar } from "@/components/Navbar/Navbar";

import Title from "@/components/Title/Title";
import { fetchArtistBankDetails, getArtistArtById } from "@/api/api";
import { useQuery } from "@tanstack/react-query";
import Table, {
  AvatarCell,
  SelectColumnFilter,
  StatusPill,
} from "@/components/Table/Table";
import { useRouter } from "next/navigation";
import { PencilIcon } from "@heroicons/react/24/solid";

const getData = () => {
  const data = [
    {
      orderNumber: "07/17/2023 05:00 PM Shippder",
      email: "028-3987323-2911111",
      product: "Artist Paint Leanoardo Di",
      unitSold: "1",
      refunds: "0",
      sales: "1000",
      promo: "0.00",
      sellableReturns: "0%",
      amazonFees: "100",
      grossProfit: "213",
      imgUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
    {
      orderNumber: "07/17/2023 05:00 PM Shippder",
      email: "028-3987323-2911111",
      product: "Artist Paint Leanoardo Di",
      unitSold: "1",
      refunds: "0",
      sales: "1000",
      promo: "0.00",
      sellableReturns: "0%",
      amazonFees: "100",
      grossProfit: "213",
      imgUrl:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
    {
      orderNumber: "07/17/2023 05:00 PM Shippder",
      email: "028-3987323-2911111",
      product: "Artist Paint Leanoardo Di",
      unitSold: "1",
      refunds: "0",
      sales: "1000",
      promo: "0.00",
      sellableReturns: "0%",
      amazonFees: "100",
      grossProfit: "213",
      imgUrl:
        "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
    {
      orderNumber: "07/17/2023 05:00 PM Shippder",
      email: "028-3987323-2911111",
      product: "Artist Paint Leanoardo Di",
      unitSold: "1",
      refunds: "0",
      sales: "1000",
      promo: "0.00",
      sellableReturns: "0%",
      amazonFees: "100",
      grossProfit: "213",
      imgUrl:
        "https://images.unsplash.com/photo-1498551172505-8ee7ad69f235?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
    {
      orderNumber: "07/17/2023 05:00 PM Shippder",
      email: "028-3987323-2911111",
      product: "Artist Paint Leanoardo Di",
      unitSold: "1",
      refunds: "0",
      sales: "1000",
      promo: "0.00",
      sellableReturns: "0%",
      amazonFees: "100",
      grossProfit: "213",
      imgUrl:
        "https://images.unsplash.com/photo-1532417344469-368f9ae6d187?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
    {
      orderNumber: "07/17/2023 05:00 PM Shippder",
      email: "028-3987323-2911111",
      product: "Artist Paint Leanoardo Di",
      unitSold: "1",
      refunds: "0",
      sales: "1000",
      promo: "0.00",
      sellableReturns: "0%",
      amazonFees: "100",
      grossProfit: "213",
      imgUrl:
        "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
  ];
  return [...data, ...data, ...data];
};
const title = "Product List";
const breadCrums = "Home / My Account / Product List";

const page = () => {
  const paramsID = "d595b660-c274-431c-92fe-54ce8494d7d0";
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const pageName = "Product List";
  const router = useRouter()

  const columns = useMemo(
    () => [
      {
        Header: "Order Number",

        accessor: "orderNumber",
        Cell: AvatarCell,
        imgAccessor: "imgUrl",
        emailAccessor: "email",
      },
      {
        Header: "Title",
        accessor: "artTitle",
      },
      {
        Header: "SKU",
        accessor: "artSKU",
        // Cell: ,
      },
      {
        Header: "price in ₹",
        accessor: "localRegularPrice",
      },
      {
        Header: "price in $",
        accessor: "foreignRegularPrice",
      },
      {
        Header: "HSN",
        accessor: "localHSNCode",
      },
      {
        Header: "Start Date",
        accessor: "localSaleStartDate",
      },
      {
        Header: "End Date",
        accessor: "localSaleEndDate",
      },
      {
        Header: "Actions",
        Cell: ({ row }) => (
          <span className='font-roboto flex flex-row text-white text-center text-[12px] bg-[#ce3434] p-2 hover:cursor-pointer' onClick={(value) => handleEdit(row.original)}>
            <PencilIcon className="h-4 w-4 mr-5" />
            <p className="">Edit</p>
          </span>
          //   <button onClick={(e) => handleSubmit(e)} className=>Save</button>
        ),
      },
    ],
    []
  );
  const { data: artistArtById } = useQuery(["artistArtId", paramsID], () =>
    getArtistArtById(paramsID)
  );
  console.log(artistArtById);
  const data = useMemo(() => artistArtById?.data || []);

  const handleEdit = (value) => {
    console.log(value.id);
    router.push(`/addProduct/${value.id}`)
  }

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
          className={`flex-1 ml-6 p-1 ${isMenuOpen ? "" : "w-full h-full absolute top-20 left-0"
            }`}
        >
          <Title title={title} breadCrums={breadCrums} />

          <main className="max-w-5xl sm:px-6 lg:px-2 pt-4">
            <div className="mt-6">
              <Table columns={columns} data={data} />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default page;
