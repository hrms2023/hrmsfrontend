'use client'
import { PencilIcon } from '@heroicons/react/24/outline'
import React from 'react'

const PersonalDocumentCard = ({ style, bankDetails, setSingleBankDetails }) => {
    let lastPart;
    const bankInfoLabes = [
        "Employee ID",
        "Joining Date",
        "Designation",
        "Job Offered",
        "Probation Period",
    ]
    if (bankDetails) {
        const parts = bankDetails.uploadCancelCheque.split('/');
        lastPart = parts[parts.length - 1];
    }

    return (
        <div className='p-3 mt-2'>
            <div className={`max-w-sm p-3 bg-[#f2f2f2] border-[#f2f2f2] rounded-lg shadow ${style}`}>
                <div className='flex flex-row items-center justify-between px-2'>
                    <a >
                        <span className="mb-2 text-[12px] font-roboto tracking-tight text-gray-900 font-style: italic">Default Bank Account</span>
                    </a>
                    <PencilIcon onClick={() => setSingleBankDetails(bankDetails)} className='h-4 w-4 hover:cursor-pointer' />
                </div>
                <div className='flex flex-row'>
                    <div className='flex flex-col m-1'>
                        {bankInfoLabes.map((list, index) => (
                            <ul key={index} className='text-[12px] font-semibold  p-1.5'>
                                {`${list} :`}
                            </ul>
                        ))}
                    </div>
                    <div className='flex flex-col m-1'>
                        <ul className='text-[12px] font-roboto font-medium p-1.5'>
                            {"bankDetails.accountType"}
                        </ul>
                        <ul className='text-[12px] font-roboto font-medium p-1.5'>
                            {"bankDetails.bankName"}
                        </ul>
                        <ul className='text-[12px] font-roboto font-medium p-1.5'>
                            {"bankDetails.beneficiaryName"}
                        </ul>
                        <ul className='text-[12px] font-roboto font-medium p-1.5'>
                            {"bankDetails.accountNumber"}
                        </ul>
                        <ul className='text-[12px] font-roboto font-medium p-1.5'>
                            {"bankDetails.ifscCode"}
                        </ul>
                        <ul onClick={() => window.open(bankDetails.uploadCancelCheque)} className='text-[12px] font-roboto font-medium p-1.5 hover:cursor-pointer'>
                            {lastPart}
                        </ul>
                        <span className='text-[12px] font-roboto p-1.5 text-[#279847]'>View File</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PersonalDocumentCard