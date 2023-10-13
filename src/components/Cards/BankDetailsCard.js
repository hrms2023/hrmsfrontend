import { PencilIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import React from "react";

const BankDetailsCard = ({ style, bankDetails, setSingleBankDetails }) => {

  const router = useRouter()

  let lastPart;
  const bankInfoLabes = [
    "Account Type",
    "Bank Name",
    "Beneficiary Name",
    "Account Number",
    "IFSC Code",
    "Cancel Cheque",
  ];
  if (bankDetails) {
    const parts = bankDetails.uploadCancelCheque.split("/");
    lastPart = parts[parts.length - 1];
  }
  const bankInfo = {
    id: "201ce8aa-9799-4e2d-b6a1-ffe629a033b3",
    "employeeID": "564fb1f7-47c9-4f5a-8973-cac94af42815",
    "bankName": "ABC Bank",
    "branchName": "Downtown Branch",
    "beneficiaryName": "John Doe",
    "accountNumber": "1234567890",
    "ifscCode": "ABCD123456",
    "cancelCheque": "No",
    createdOn: "2023-09-22T16:39:49",
    updatedOn: "2023-09-22T16:39:49",
  };

  const navigateToForm= (e) => {
    e.preventDefault()
    router.push(`/artistprofile/${bankInfo.id}/${bankInfo.id}`)
  }
  return (
    <div className="p-3 mt-2">
      <div
        className={`max-w-sm p-3 bg-[#f2f2f2] border-[#f2f2f2] rounded-lg shadow ${style}`}
      >
        <div className="flex flex-row items-center justify-between px-2">
          <a>
            <span className="mb-2 text-[12px] font-roboto tracking-tight text-gray-900 font-style: italic">
              Default Bank Account
            </span>
          </a>
          <PencilIcon
            onClick={(e) => navigateToForm(e)}
            className="h-4 w-4 hover:cursor-pointer"
          />
        </div>
        <div className="flex flex-row">
          <div className="flex flex-col m-1">
            {bankInfoLabes.map((list, index) => (
              <ul key={index} className="text-[12px] font-semibold  p-1.5">
                {`${list} :`}
              </ul>
            ))}
          </div>
          <div className="flex flex-col m-1">
            <ul className="text-[12px] font-roboto font-medium p-1.5">
              {bankInfo.accountType}
            </ul>
            <ul className="text-[12px] font-roboto font-medium p-1.5">
              {bankInfo.bankName}
            </ul>
            <ul className="text-[12px] font-roboto font-medium p-1.5">
              {bankInfo.beneficiaryName}
            </ul>
            <ul className="text-[12px] font-roboto font-medium p-1.5">
              {bankInfo.accountNumber}
            </ul>
            <ul className="text-[12px] font-roboto font-medium p-1.5">
              {bankInfo.ifscCode}
            </ul>
            <ul
              onClick={() => window.open(bankDetails.uploadCancelCheque)}
              className="text-[12px] font-roboto font-medium p-1.5 hover:cursor-pointer"
            >
              {lastPart}
            </ul>
            <span className="text-[12px] font-roboto p-1.5 text-[#279847]">
              View File
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankDetailsCard;
