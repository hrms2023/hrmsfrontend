import { PlusIcon } from '@heroicons/react/24/outline'
import React from 'react'

const AddBankDetailsCard = () => {
    return (
        <div>
            <div className="max-w-sm p-3 border rounded-lg shadow bg-[#f2f2f2] border-[#f2f2f2]">
                <div className='flex flex-row text-center items-center justify-center'>
                    <PlusIcon className='h-4 w-4 text-[#C4302B] hover:cursor-pointer' />
                    <h5 className="m-1 text-[12px] underline hover:cursor-pointer tracking-tight text-gray-900">Add another bank account</h5>
                </div>
                
            </div>
        </div>
    )
}

export default AddBankDetailsCard