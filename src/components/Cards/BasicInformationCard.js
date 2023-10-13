import { PencilIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import React from "react";

const BasicInformationCard = ({ style, bankDetails, setSingleBankDetails }) => {

    const router = useRouter()

    let lastPart;
    const bankInfoLabes = [
        "Profile Picutre",
        "Full Name",
        "Mobile Number",
        "Email",
        "Email",
        "Date of Birth",
        "Gender",
        "anniversary date",
    ];
    if (bankDetails) {
        const parts = bankDetails.uploadCancelCheque.split("/");
        lastPart = parts[parts.length - 1];
    }
    const bankInfo = {
        id: "3f65676a-5e08-4cfc-932c-eefcab3905b9",
        "EmployeeId": "564fb1f7-47c9-4f5a-8973-cac94af42815",
        "firstName": "John",
        "lastName": "Doe",
        "dob": "1990-01-15",
        "gender": "Male",
        "workEmail": "john.doe@example.com",
        "HomeEmail": "john.home@example.com",
        "anniversaryDate": "2022-07-20"
    }

    const navigateToForm = (e) => {
        e.preventDefault()
        router.push(`/basicinformation/${bankInfo.id}/${bankInfo.id}`)
    }
    return (
        <div className="p-3 mt-2">
            <div
                className={`max-w-sm p-3 bg-[#f2f2f2] border-[#f2f2f2] rounded-lg shadow ${style}`}
            >
                <div className="flex flex-row items-center justify-between px-2">
                    <a>
                        <span className="mb-2 text-[12px] font-roboto tracking-tight text-gray-900 font-style: italic">
                            Default Basic basickInfo
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

export default BasicInformationCard;
