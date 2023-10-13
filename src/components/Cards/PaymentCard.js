import { ChevronRightIcon } from '@heroicons/react/24/solid'
import React from 'react'

const PaymentCard = ({title, subTitle, icons}) => {
    return (
        <div>
            <div className='flex flex-col w-full item-center justify-center px-7 hover:cursor-pointer'>
                <div className='bg-gray-50 flex flex-row items-center justify-between shadow-lg border rounded-lg px-3 mb-5'>
                    <div className='flex flex-row items-center'>
                        <img src={icons} className='h-6 w-6' />
                        <div className='flex flex-col p-4 space-y-1'>
                            <a className='text-gray-900 text-[16px] font-semibold '>{title}</a>
                            <a className='text-gray-500 text-[12px] font-medium'>{subTitle}</a>
                        </div>
                    </div>
                    <div>
                        <ChevronRightIcon className='h-4 w-4' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentCard