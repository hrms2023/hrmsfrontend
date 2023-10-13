'use client'
import { PencilIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { useRouter } from "next/navigation";

const EducationDetailsCard = ({ style, bankDetails, setSingleBankDetails }) => {
    const router = useRouter()

    let lastPart;
    const bankInfoLabes = [
        "    degreeType",
        "        stream",
        "graduationYear",
        "universityName",
        "    rollNumber",
        "     marksheet",
    ];

    const EducationInfo = {
        "id": "a083bf92-e3fd-4982-b5c3-c23d4652da90",
        "employeeId": "564fb1f7-47c9-4f5a-8973-cac94af42815",
        "degreeType": "Product Engineering",
        "stream": "IT",
        "universityName": "Example University",
        "rollNumber": "123456",
        "marksheet": "64445454SSSS",
        "graduationYear": 2021
    }

    const navigateToForm = (e) => {
        e.preventDefault()
        router.push(`educationDetails/${EducationInfo.id}/${EducationInfo.id}`)
    }
    if (bankDetails) {
        const parts = bankDetails.uploadCancelCheque.split('/');
        lastPart = parts[parts.length - 1];
    }

    return (
        <div className='p-3 mt-2'>
            <div className={`max-w-sm p-3 bg-[#f2f2f2] border-[#f2f2f2] rounded-lg shadow ${style}`}>
                <div className='flex flex-row items-center justify-between px-2'>
                    <a >
                        <span className="mb-2 text-[12px] font-roboto tracking-tight text-gray-900 font-style: italic">Default Education Details</span>
                    </a>
                    <PencilIcon onClick={(e) => navigateToForm(e)} className='h-4 w-4 hover:cursor-pointer' />
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
                            {EducationInfo.degreeType}
                        </ul>
                        <ul className='text-[12px] font-roboto font-medium p-1.5'>
                            {EducationInfo.stream}
                        </ul>
                        <ul className='text-[12px] font-roboto font-medium p-1.5'>
                            {EducationInfo.universityName}
                        </ul>
                        <ul className='text-[12px] font-roboto font-medium p-1.5'>
                            {EducationInfo.rollNumber}
                        </ul>
                        <ul className='text-[12px] font-roboto font-medium p-1.5'>
                            {EducationInfo.graduationYear}
                        </ul>
                        <ul className='text-[12px] font-roboto font-medium p-1.5'>
                            {EducationInfo.marksheet}
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

export default EducationDetailsCard