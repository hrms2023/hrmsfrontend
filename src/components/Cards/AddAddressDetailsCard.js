'use client'
import { PlusIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/navigation';
import React from 'react'

const AddAddressDetailsCard = () => {
    const router = useRouter();
  return (
    <div>
         <div>
            <div onClick={()=> router.push('/addAddress')} className="max-w-sm p-3 mb-5 border rounded-lg shadow bg-[#f2f2f2] border-[#f2f2f2]">
                <div className='flex flex-row text-center items-center justify-center'>
                    <PlusIcon className='h-4 w-4 text-[#C4302B] hover:cursor-pointer' />
                    <a className="m-1 text-[12px] underline hover:cursor-pointer tracking-tight text-gray-900">Add Address</a>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default AddAddressDetailsCard