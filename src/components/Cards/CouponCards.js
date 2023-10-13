'use client'
import React, { useState } from 'react'

const CouponCards = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(true);
    return (
        <div>
            <div className='flex flex-col w-full item-center justify-center px-7'>
                <div className='bg-gray-50 flex flex-col justify-between shadow-lg border rounded-lg px-3 mb-5'>

                    <div className='flex flex-col p-4 space-y-2'>
                        <a className='text-gray-900 text-[16px] font-semibold '>ARTFEST300</a>
                        <a className='text-[#c4302b] text-[12px] font-medium hover:cursor-pointer'>Shop for ₹1299 more to apply.</a>
                        <ul className="list-disc list-inside mt-2">
                            <li className='text-[12px] font-semibold text-gray-500 mt-1'>Rs. 300 off on minimum purchase of ₹4999.</li>
                            <li className='text-[12px] font-semibold text-gray-500 mt-1'>Offer valid till 30th September 2023 | 11:59 PM</li>
                            <li className='text-[12px] font-semibold text-gray-500 mt-1'>Offer valid 2 times per user during this period.</li>
                        </ul>
                    </div>
                    <div className='border-b text-gray-500 w-full'></div>
                    <div className='flex items-center justify-center p-2 hover:cursor-pointer hover:bg-slate-100'>
                    <p className='text-[16px] font-light text-gray-500'>TAP TO APPLY</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CouponCards