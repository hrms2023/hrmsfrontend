'use client'
import { PencilIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { useRouter } from "next/navigation";

const AddressDetailsCard = ({ style, bankDetails, setSingleBankDetails }) => {
    let lastPart;
  const router = useRouter()
    const bankInfoLabes = [
        "Permanent Address",
        "Present Address",
        
    ]
    const bankInfo = {
        "id": "8a5a2e51-48ee-4dee-84b4-9eb2788588cb",
        "employeeId": "564fb1f7-47c9-4f5a-8973-cac94af42815",
        "country": "United States",
        "state": "California",
        "city": "Los Angeles",
        "pincode": "90001",
        "addressLine1": "123 Main Street",
        "streetAddress": "Apt 456"
  };

  const preaddress ={
    "id": "91e7b338-af9a-4b2a-87bd-e3a8bfc7acf5",
    "employeeId": "564fb1f7-47c9-4f5a-8973-cac94af42815",
    "country": "United States",
    "state": "Huston",
    "city": "Los Angeles",
    "pincode": "90001",
    "addressLine1": "123 Main Street",
    "streetAddress": "Apt 456"
  }
    if (bankDetails) {
        const parts = bankDetails.uploadCancelCheque.split('/');
        lastPart = parts[parts.length - 1];
    }
    const navigateToForm= (e) => {
        e.preventDefault()
        router.push(`/employeeAddAddress/${bankInfo.id}/${preaddress.id}`)
      }

    return (
        <div className='p-3 mt-2'>
            <div className={`max-w-sm p-3 bg-[#f2f2f2] border-[#f2f2f2] rounded-lg shadow ${style}`}>
                <div className='flex flex-row items-center justify-between px-2'>
                    <a >
                        <span className="mb-2 text-[12px] font-roboto tracking-tight text-gray-900 font-style: italic">Default Bank Account</span>
                    </a>
                    <PencilIcon   onClick={(e) => navigateToForm(e)} className='h-4 w-4 hover:cursor-pointer' />
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
                        {bankInfo.country}<span> {bankInfo.state}  {bankInfo.city} {bankInfo.pincode} {bankInfo.streetAddress}</span>
                        </ul>
                        <ul className='text-[12px] font-roboto font-medium p-1.5'>
                        {preaddress.country}<span> {preaddress.state}  {preaddress.city} {preaddress.pincode} {preaddress.streetAddress}</span>
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

export default AddressDetailsCard