import Stepper from '@/components/Stepper/Stepper'
import { PhoneArrowDownLeftIcon } from '@heroicons/react/24/outline'
import React from 'react'

const OrderDetailsPage = () => {
    const steps = {
        stepOne: true,
        stepTwo: true,
        stepThree: false,
        stepFour: false
    }
    return (
        <div className='px-12 mt-6'>
            <div className='bg-gray-50 w-full flex flex-row justify-between shadow-lg border rounded-lg p-5 mb-5 '>
                <div className='flex flex-col'>
                    <a className='text-[12px] font-roboto font-semibold'>Delviery Address: </a>
                    <a className='text-[12px] font-roboto mt-2'>Kunal Sarkar</a>
                    <a className='text-[12px] font-roboto'>Shaw Residency, 21 Haridevpur New Road, Haridevpur,</a>
                    <a className='text-[12px] font-roboto'>Kolkata, West Bengal - 700082</a>
                    <div className='flex flex-row mt-3'>
                        <a className='text-[12px] font-roboto font-semibold'>Mobile No: </a>
                        <a className='text-[12px] font-roboto'>+9198461270845</a>
                    </div>
                    <div className='flex flex-row mt-2'>
                        <a className='text-[12px] font-roboto font-semibold'>Alt Mobile: </a>
                        <a className='text-[12px] font-roboto'>+9198461270845</a>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <a className='text-[12px] font-roboto font-semibold'>Payment Method: </a>
                    <a className='text-[12px] font-roboto mt-2'>Artkart Wallet </a>
                    <div className='flex flex-col mt-8'>
                        <a className='text-[12px] font-roboto font-semibold'>Order Number: </a>
                        <a className='text-[12px] font-roboto'>202425000000056</a>
                    </div>
                </div>

                <div className='flex flex-col'>
                    <a className='text-[12px] font-roboto font-semibold'>Payment Summary: </a>
                    <div className='flex flex-row items-center text-center justify-between'>
                        <a className='text-[12px] font-roboto mr-2 mt-2'>Order Subtotal</a>
                        <a className='text-[12px] font-roboto mt-2'>₹81,886</a>
                    </div>
                    <div className='flex flex-row items-center text-center justify-between'>
                        <a className='text-[12px] font-roboto mt-1'>Add: Shipping Charges</a>
                        <a className='text-[12px] font-roboto mt-1'>₹600</a>
                    </div>
                    <div className='flex flex-row items-center text-center justify-between'>
                        <a className='text-[12px] font-roboto font-semibold mr-2 mt-1'>Total</a>
                        <a className='text-[12px] font-roboto font-semibold mt-1'>₹82,486</a>
                    </div>
                    <div className='flex flex-row items-center text-center justify-between'>
                        <a className='text-[12px] font-roboto mr-2 mt-1'>Less: Coupon Promotion</a>
                        <a className='text-[12px] font-roboto mt-1'>₹3,300</a>
                    </div>

                    <div className='flex flex-row items-center text-center justify-between'>
                        <a className='text-[12px] text-[#ce3434] font-roboto mr-2 mt-1'>Total Price</a>
                        <a className='text-[12px] text-[#ce3434] font-roboto mt-1'>₹85,786</a>
                    </div>
                    <button className='flex items-center justify-evenly text-center flex-row bg-[#ce3434] p-2 mt-2 hover:cursor-pointer'>
                        <p className='font-roboto text-white text-[12px]'>Download invoice</p>
                    </button>
                </div>
            </div>
            <div className='bg-gray-50 flex flex-col border shadow-lg rounded-lg'>
                <div className=' w-full  flex flex-row justify-between  p-5'>
                    <div className='flex flex-row'>
                    <div className='w-44'>
                        <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-72 md:rounded-none md:rounded-l-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt="" />
                        </div>
                        <div className='flex flex-col ml-4'>
                            <a className='text-gray-900 text-[16px] font-semibold mb-2'>Gate over</a>
                            <div className='flex flex-row text-center items-center'>
                                <a className='text-gray-900  mb-1 text-[12px] font-normal underline hover:cursor-pointer'>Somnath Sarkar,</a>
                                <a className='text-gray-500  mb-1 text-[12px] font-normal px-1'>India</a>
                            </div>
                            <a className='text-gray-500  mb-1 font-normal text-[12px]'>Prints, Lithography</a>
                            <a className='text-gray-500  mb-1 font-normal text-[12px]'>50.8 × 66.04 cm</a>
                            <a className='font-semibold text-[#ce3434] text-[16px]'>₹40,000</a>
                        </div>
                    </div>

                    <div className='flex flex-col justify-evenly'>
                        <button className='flex items-center justify-evenly text-center flex-row mb-1 p-3 hover:cursor-pointer'>
                            <PhoneArrowDownLeftIcon className='h-4 w-4 text-gray-500' />
                            <p className='font-roboto text-[12px] text-gray-500'>Product Support</p>
                        </button>
                        <button className='flex items-center justify-evenly text-center flex-row  bg-[#ce3434] p-3 hover:cursor-pointer'>
                            <p className='font-roboto text-[12px] text-white'>Rate & Review</p>
                        </button>
                        <button className='flex items-center justify-evenly text-center mt-3 flex-row bg-black h-10 p-3 hover:cursor-pointer'>
                            <p className='font-roboto text-[12px] text-white'>Return/Refund Status</p>
                        </button>
                    </div>
                </div>
                <div className='px-32 mb-2'>
                    <Stepper steps = {steps} />
                </div>
            </div>
            <div className='bg-gray-50 flex flex-col border shadow-lg mt-5 rounded-lg'>
                <div className=' w-full flex flex-row justify-between  p-5'>
                    <div className='flex flex-row'>
                    <div className='w-44'>
                        <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-72 md:rounded-none md:rounded-l-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt="" />
                        </div>
                        <div className='flex flex-col ml-4'>
                            <a className='text-gray-900 text-[16px] font-semibold mb-2'>Gate over</a>
                            <div className='flex flex-row text-center items-center'>
                                <a className='text-gray-900  mb-1 text-[12px] font-normal underline hover:cursor-pointer'>Somnath Sarkar,</a>
                                <a className='text-gray-500  mb-1 text-[12px] font-normal px-1'>India</a>
                            </div>
                            <a className='text-gray-500  mb-1 font-normal text-[12px]'>Prints, Lithography</a>
                        </div>
                    </div>

                    <div className='flex flex-col justify-evenly'>
                        <button className='flex items-center justify-evenly text-center flex-row  p-3 hover:cursor-pointer'>
                            <PhoneArrowDownLeftIcon className='h-4 w-4 text-gray-500' />
                            <p className='font-roboto text-[12px] ml-1 text-gray-500'>Product Support</p>
                        </button>
                    </div>
                </div>
                <div className='px-32 mb-2'>
                    <Stepper steps = {steps} />
                </div>
            </div>

        </div>
    )
}

export default OrderDetailsPage