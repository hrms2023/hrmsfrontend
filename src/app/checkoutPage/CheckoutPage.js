import React from 'react'
import { TrashIcon } from '@heroicons/react/24/outline'
import { ChevronRightIcon, CreditCardIcon, MapPinIcon, ReceiptPercentIcon } from '@heroicons/react/24/solid'
const CheckoutPage = () => {
    return (
        <div>
            <div className='flex flex-row justify-between mt-2 px-12'>
                <div className='flex flex-col w-[68%] item-center mt-5'>
                    <div className='bg-gray-50 w-full flex flex-row justify-between shadow-lg border rounded-lg p-5 mb-5'>

                        <div className='flex flex-row items-center'>
                            <div className='flex flex-col'>
                                <div className='flex flex-row text-center items-center mb-2'>
                                    <MapPinIcon className="h-4 w-4 text-gray-900" />
                                    <a className='text-gray-900 text-[16px] font-semibold ml-2'>Address</a>
                                </div>
                                <div className='flex flex-row text-center items-center mb-2 ml-4'>
                                    <a className='text-gray-500 text-[12px] font-semibold ml-2'>Kunal Sarkar</a>
                                    <a className='text-gray-500 text-[12px] font-normal italic ml-2'> {`(Default)`} </a>
                                </div>
                                <div className='flex flex-row text-center items-center mb-1 ml-6'>
                                    <a className='text-gray-500 text-[12px] font-normal '>Shaw Residency, 21 Haridevpur Road, Haridevpu,</a>
                                </div>
                                <div className='flex flex-row text-center items-center ml-6'>
                                    <a className='text-gray-500 text-[12px] font-normal mr-2'>Kolkata, West Bengal 700082</a>
                                </div>
                                <div className='flex flex-row text-center items-center ml-6 mt-1'>
                                    <a className='text-gray-500 text-[12px] font-normal mr-2'>Mobile No. +916465184465</a>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <ChevronRightIcon className='h-4 w-4 text-gray-700' />
                        </div>
                    </div>
                    <div className='bg-gray-50 w-full flex flex-col justify-between shadow-lg border rounded-lg p-5 mb-5'>
                        <div className='flex flex-row items-center justify-between'>
                            <div className='flex flex-col'>
                                <div className='flex flex-row text-center items-center'>
                                    <ReceiptPercentIcon className="h-4 w-4 text-gray-900" />
                                    <a className='text-gray-900 text-[16px] font-semibold ml-2'>Coupon Applied</a>
                                </div>

                            </div>
                            <ChevronRightIcon className='h-4 w-4 text-gray-700' />
                        </div>
                        <div className='flex flex-row items-center text-center justify-between mt-4'>
                            <a className='text-gray-500 text-[12px] ml-6'>ARTFEST30</a>
                            <div className='flex flex-row items-center text-center'>
                                <a className='text-gray-500 text-[12px] mr-2'>₹3000 </a>
                                <TrashIcon className='h-4 w-4 text-[#ce3434] hover:cursor-pointer' />
                            </div>
                        </div>
                    </div>
                    <div className='bg-gray-50 w-full flex flex-col justify-between shadow-lg border rounded-lg p-5 mb-5'>
                        <div className='flex flex-row items-center justify-between'>
                            <div className='flex flex-col'>
                                <div className='flex flex-row text-center items-center'>
                                    <CreditCardIcon className="h-4 w-4 text-gray-900" />
                                    <a className='text-gray-900 text-[16px] font-semibold ml-2'>Payment Method</a>
                                </div>

                            </div>
                            <ChevronRightIcon className='h-4 w-4 text-gray-700' />
                        </div>
                        <div className='flex flex-row items-center text-center justify-between mt-4'>
                            <a className='text-gray-500 text-[12px] ml-6'>Artkart Wallet</a>
                            <div className='flex flex-row items-center text-center'>
                                <a className='text-gray-500 text-[12px] font-semibold mr-1'>Balance:</a>
                                <a className='text-gray-500 text-[12px]'>₹30000</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-gray-50 w-[30%] h-[30%] shadow-lg border rounded-lg p-0 mt-5'>
                    <div className='flex flex-col px-5 p-1'>
                        <div className='flex flex-row items-center text-center justify-between'>
                            <a className='text-[12px] font-roboto mr-2 mt-3'>Cart Total</a>
                            <a className='text-[12px] font-roboto mt-3'>₹81,886</a>
                        </div>
                        <div className='flex flex-row items-center text-center justify-between'>
                            <a className='text-[12px] font-roboto mt-3'>Add: Shipping Charges</a>
                            <a className='text-[12px] font-roboto mt-3'>₹600</a>
                        </div>
                        <div className='flex flex-row items-center text-center justify-between'>
                            <a className='text-[12px] font-roboto font-semibold mr-2 mt-3'>Total</a>
                            <a className='text-[12px] font-roboto font-semibold mt-3'>₹82,486</a>
                        </div>
                        <div className='flex flex-row items-center text-center justify-between'>
                            <a className='text-[12px] font-roboto mr-2 mt-3'>Less: Coupon Promotion</a>
                            <a className='text-[12px] font-roboto mt-3'>₹3,300</a>
                        </div>

                        <div className='flex flex-row items-center text-center justify-between'>
                            <a className='text-[12px] font-semibold text-[#ce3434] font-roboto mr-2 mt-3'>Total Price</a>
                            <a className='text-[12px] font-semibold text-[#ce3434] font-roboto mt-3'>₹85,786</a>
                        </div>
                        <button className='flex items-center justify-evenly text-center flex-row bg-black p-2 mt-3 mb-1 hover:cursor-pointer'>
                            <p className='font-roboto text-white text-sm'>Pay Now</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckoutPage