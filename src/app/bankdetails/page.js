"use client";
import Sidebar from "@/components/sidebar/Sidebar";
import React, { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar/Navbar";
import AddBankDetailsCard from "@/components/Cards/AddBankDetailsCard";
import BankDetailsCard from "@/components/Cards/BankDetailsCard";
import BankDetailsForm from "./BankDetailsForm";
import Title from "@/components/Title/Title";
import AccountProfileForm from "../jobdetails/AccountProfileForm";
import SaleryDetails from "../salaryDetails/page";
import Table from "@/components/Table/TableEmployee";

import { useQuery } from "@tanstack/react-query";
import BasicInformationCard from "@/components/Cards/BasicInformationCard";
import JobDetailsCard from "@/components/Cards/JobDetailsCard";
import PersonalDocumentCard from "@/components/Cards/PersonalDocumentCard";
import LastEmployeeDetailsCard from "@/components/Cards/LastEmployeeDetailsCard";
import AddressDetailsCard from "@/components/Cards/AddressDetailsCard";
import EducationDetailsCard from "@/components/Cards/EducationDetailsCard";

const title = "Bank Details";
const breadCrums = "Home / My Account / Bank Details";

const page = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [artistDetails, setArtistDetails] = useState([]);
  const [singleBankDetails, setSingleBankDetails] = useState({});
 
  const [salary, setSalery] = useState(true)
  const [leave, setLeave] = useState(false)
  const [reinbursemenr, setReinbursement] = useState(false)

  const information = () => {
      setSalery(false)
      setLeave(false)
      setReinbursement(true)
  }
  
  const productReviews = () => {
      setLeave(false)
      setReinbursement(false)
      setSalery(true)
  }
  const polciesInfo = () => {
      setReinbursement(false)
      setSalery(false)
      setLeave(true)
  }

  const [basicInfoDetails, setbasicInfoDetails] = useState({});
  const pageName = "Employee";
  const style = "ml-4";
  const artistId = "d595b660-c274-431c-92fe-54ce8494d7d0";
  if (artistId) {
    const { data } = useQuery(["artistBankDetails", artistId], () => [
      {
        id: "77328c9b-0e23-424d-9267-170a50563859",
        artistId: "d595b660-c274-431c-92fe-54ce8494d7d0",
        accountType: "Female",
        bankName: "ICICI",
        beneficiaryName: "Hatima",
        accountNumber: "SBI214423432141532",
        ifscCode: "IFSC1237091",
        uploadCancelCheque:
          "https://artkart-shop.s3.ap-south-1.amazonaws.com/artist/doc/BankDetails/1695383316039blood-drop.png",
        createdOn: "2023-09-22T17:18:44",
        updatedOn: "2023-09-22T17:18:44",
      },
      {
        id: "7d1049df-fed1-4701-8508-e43287b3ca22",
        artistId: "d595b660-c274-431c-92fe-54ce8494d7d0",
        "Full Name": "Savings Account",
        bankName: "ICICI Bank",
        beneficiaryName: "Human",
        accountNumber: "123345213",
        ifscCode: "ASDF42432",
        uploadCancelCheque:
          "https://artkart-shop.s3.ap-south-1.amazonaws.com/artist/doc/BankDetails/1695383316039blood-drop.png",
        createdOn: "2023-09-22T16:39:49",
        updatedOn: "2023-09-22T16:39:49",
      },
    ]);

    console.log(data);
    useEffect(() => {
      setArtistDetails(data);
    }, artistDetails);
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
          className={`flex-1 ml-6 p-1 ${
            isMenuOpen ? "" : "w-full h-full absolute top-20 left-0"
          }`}
        >
          {/* <Title title={title} breadCrums={breadCrums} /> */}
          <div className="flex flex-row items-center justify-center mt-6">
            {/* <AddBankDetailsCard /> */}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-2 px-10">
            {/* {artistDetails?.map((list, id) => {
                            return ( */}

            <BankDetailsCard
              style={""}
              setSingleBankDetails={setSingleBankDetails}
            />
            <BasicInformationCard />
            <JobDetailsCard />
            <PersonalDocumentCard />
            <LastEmployeeDetailsCard />
            <AddressDetailsCard />
            <EducationDetailsCard />
            {/* )
                        })} */}
          </div>

          <div className="mt-5 flex-row ">
          <div className="flex mt-4  border-gray-400 flex-row ml-12 w-1/3 float-right">
                <div onClick={information}   className="border-r border-t border-b border-l border-gray-400 p-3 bg-blue-950">
                    <div className="hover:cursor-pointer font-normal text-[12px] text-white"> Salary Details</div>
                </div>
                <div onClick={productReviews}  className="border-r border-t border-b border-gray-400 p-3">
                    <div className="hover:cursor-pointer font-normal text-[12px] text-gray-900">Leave Details</div>
                </div>
                <div  onClick={polciesInfo}  className="border-r border-t border-b border-gray-400 p-3">
                    <div className="hover:cursor-pointer font-normal text-[12px] text-gray-900">Reinbursement </div>
                </div>
            </div>
          </div>
          <div className="mt-20">


               {salary && (<SaleryDetails reviews={salary} />)}
                {leave && (<SaleryDetails details={leave} />)}
                {reinbursemenr && (<SaleryDetails polcies = {reinbursemenr}/>) }
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
