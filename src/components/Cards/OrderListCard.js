import React from 'react'

const OrderListCard = () => {
    return (
        <div className='mt-10'>
            <div className='flex flex-col item-center justify-center px-3'>
                {/* Retrun Order Section */}
                <div className='border border-gray-300 mb-5 rounded-lg'>
                    <div className='bg-gray-200 w-full flex flex-col justify-between shadow-lg rounded-lg p-4'>

                        <div className='flex flex-row items-center text-center justify-between'>
                            <div className=''>
                                <a className='text-gray-900 text-[12px] font-semibold'>Order Status: </a>
                                <a className='text-[#ce3434] text-[12px] px-1'>Order Returned</a>

                            </div>
                            <div className=''>
                                <a className='text-gray-900 text-[12px] font-semibold'>Total Amount: </a>
                                <a className='text-gray-900 text-[12px] px-1'>₹40,000</a>
                            </div>
                            <div className=''>
                                <a className='text-gray-900 text-[12px] font-semibold'>Order Number: </a>
                                <a className='text-[#ce3434] text-[12px] px-1 underline hover:cursor-pointer'>View Order Details</a>
                            </div>
                        </div>
                        <div className='flex flex-row items-center text-center justify-between'>
                            <div className='flex flex-row text-center item-center'>
                                <a className='text-gray-900 text-[12px] font-semibold'>Date: </a>
                                <a className='text-gray-900 text-[12px] px-1'>02 September 2023</a>
                            </div>
                            <div className='flex flex-row text-center item-center'>
                                <a className='text-gray-900 text-[12px] font-semibold'>Date: </a>
                                <a className='text-gray-900 text-[12px] px-1'>02 September 2023</a>
                            </div>
                        </div>
                    </div>
                    <div className='bg-gray-50 w-full flex flex-row justify-between shadow-lg border rounded-lg p-5'>

                        <div className='flex flex-row'>
                            <div className='w-44'>
                                <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-72 md:rounded-none md:rounded-l-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt="" />
                            </div>
                            <div className='flex flex-col ml-4'>
                                <a className='text-gray-900 text-[16px] font-semibold mb-2'>Gate over</a>
                                <div className='flex flex-row text-center items-center'>
                                    <a className='text-gray-900 text-[12px] mb-1 font-normal underline hover:cursor-pointer'>Somnath Sarkar,</a>
                                    <a className='text-gray-500 text-[12px] mb-1 font-normal px-1'>India</a>
                                </div>
                                <a className='text-gray-500 text-[12px] mb-1 font-normal '>Prints, Lithography</a>
                                <a className='text-gray-500 text-[12px] mb-1 font-normal '>50.8 × 66.04 cm</a>
                                <a className='text-[16px] font-semibold text-[#ce3434]'>₹40,000</a>
                            </div>
                        </div>
                        <div className='flex flex-col justify-evenly'>
                            <button className='flex items-center justify-evenly text-center flex-row  bg-[#ce3434] p-3 hover:cursor-pointer'>

                                <p className='font-roboto text-[12px] text-white'>Rate & Review</p>
                            </button>
                            <button className='flex items-center justify-evenly text-center flex-row bg-black h-10 p-3 hover:cursor-pointer'>

                                <p className='font-roboto text-[12px] text-white'>Return/Refund Status</p>
                            </button>

                        </div>
                    </div>
                </div>
                {/* Order delivered in the same date */}
                <div className='border border-gray-300 mb-5 rounded-lg'>
                    <div className='bg-gray-200 w-full flex flex-col justify-between shadow rounded-lg p-4'>

                        <div className='flex flex-row items-center text-center justify-between'>
                            <div className=''>
                                <a className='text-gray-900 text-[12px] font-semibold'>Order Status: </a>
                                <a className='text-[#279847] text-[12px] px-1'>Order Delivered</a>

                            </div>
                            <div className=''>
                                <a className='text-gray-900 text-[12px] font-semibold'>Total Amount: </a>
                                <a className='text-gray-900 text-[12px] px-1'>₹85,000</a>
                            </div>
                            <div className=''>
                                <a className='text-gray-900 text-[12px] font-semibold'>Order Number: </a>
                                <a className='text-[#ce3434] text-[12px] px-1 underline hover:cursor-pointer'>View Order Details</a>
                            </div>
                        </div>
                        <div className='flex flex-row items-center text-center justify-between'>
                            <div className='flex flex-row text-center item-center'>
                                <a className='text-gray-900 text-[12px] font-semibold'>Date: </a>
                                <a className='text-gray-900 text-[12px] px-1'>02 September 2023</a>
                            </div>
                            <div className='flex flex-row text-center item-center'>
                                <a className='text-gray-900 text-[12px] font-semibold'>Date: </a>
                                <a className='text-gray-900 text-[12px] px-1'>02 September 2023</a>
                            </div>
                        </div>
                    </div>
                    <div className='bg-gray-50 w-full flex flex-row justify-between p-5'>

                        <div className='flex flex-row'>
                            <div className='w-44'>
                                <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-72 md:rounded-none md:rounded-l-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt="" />
                            </div>
                            <div className='flex flex-col ml-4'>
                                <a className='text-gray-900 text-[16px] font-semibold mb-2'>Gate over</a>
                                <div className='flex flex-row text-center items-center'>
                                    <a className='text-gray-900 text-[12px] mb-1 font-normal underline hover:cursor-pointer'>Somnath Sarkar,</a>
                                    <a className='text-gray-500 text-[12px] mb-1 font-normal px-1'>India</a>
                                </div>
                                <a className='text-gray-500 text-[12px] mb-1 font-normal '>Prints, Lithography</a>
                                <a className='text-gray-500 text-[12px] mb-1 font-normal '>50.8 × 66.04 cm</a>
                                <a className='text-[16px] font-semibold text-[#ce3434]'>₹45,000</a>
                            </div>
                        </div>
                        <div className='flex flex-col justify-evenly'>
                            <button className='flex items-center justify-evenly text-center flex-row  bg-[#ce3434] p-3 hover:cursor-pointer'>

                                <p className='font-roboto text-[12px] text-white'>Rate & Review</p>
                            </button>
                            <button className='flex items-center justify-evenly text-center flex-row bg-black h-10 p-3 hover:cursor-pointer'>

                                <p className='font-roboto text-[12px] text-white'>Return/Refund Status</p>
                            </button>

                        </div>
                    </div>
                    <div className='bg-gray-50 w-full flex flex-row justify-between p-5'>

                        <div className='flex flex-row'>
                            <div className='w-44'>
                                <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-72 md:rounded-none md:rounded-l-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt="" />
                            </div>
                            <div className='flex flex-col ml-4'>
                                <a className='text-gray-900 text-[16px] font-semibold mb-2'>Gate over</a>
                                <div className='flex flex-row text-center items-center'>
                                    <a className='text-gray-900 text-[12px] mb-1 font-normal underline hover:cursor-pointer'>Somnath Sarkar,</a>
                                    <a className='text-gray-500 text-[12px] mb-1 font-normal px-1'>India</a>
                                </div>
                                <a className='text-gray-500 text-[12px] mb-1 font-normal '>Prints, Lithography</a>
                                <a className='text-gray-500 text-[12px] mb-1 font-normal '>50.8 × 66.04 cm</a>
                                <a className='text-[16px] font-semibold text-[#ce3434]'>₹40,000</a>
                            </div>
                        </div>
                        <div className='flex flex-col justify-evenly'>
                            <button className='flex items-center justify-evenly text-center flex-row  bg-[#ce3434] p-3 hover:cursor-pointer'>

                                <p className='font-roboto text-[12px] text-white'>Rate & Review</p>
                            </button>
                            <button className='flex items-center justify-evenly text-center flex-row bg-black h-10 p-3 hover:cursor-pointer'>

                                <p className='font-roboto text-[12px] text-white'>Return/Refund Status</p>
                            </button>

                        </div>
                    </div>
                </div>
                {/* Retrun Order Section */}
                <div className='border border-gray-300 mb-5 rounded-lg'>
                    <div className='bg-gray-200 w-full flex flex-col justify-between shadow-lg rounded-lg p-4'>

                        <div className='flex flex-row items-center text-center justify-between'>
                            <div className=''>
                                <a className='text-gray-900 text-[12px] font-semibold'>Order Status: </a>
                                <a className='text-[#279847] text-[12px] px-1'>Order Delivered</a>

                            </div>
                            <div className=''>
                                <a className='text-gray-900 text-[12px] font-semibold'>Total Amount: </a>
                                <a className='text-gray-900 text-[12px] px-1'>₹40,000</a>
                            </div>
                            <div className=''>
                                <a className='text-gray-900 text-[12px] font-semibold'>Order Number: </a>
                                <a className='text-[#ce3434] text-[12px] px-1 underline hover:cursor-pointer'>View Order Details</a>
                            </div>
                        </div>
                        <div className='flex flex-row items-center text-center justify-between'>
                            <div className='flex flex-row text-center item-center'>
                                <a className='text-gray-900 text-[12px] font-semibold'>Date: </a>
                                <a className='text-gray-900 text-[12px] px-1'>02 September 2023</a>
                            </div>
                            <div className='flex flex-row text-center item-center'>
                                <a className='text-gray-900 text-[12px] font-semibold'>Date: </a>
                                <a className='text-gray-900 text-[12px] px-1'>02 September 2023</a>
                            </div>
                        </div>
                    </div>
                    {/* Order Delivered on different date */}
                    <div className='bg-gray-50 w-full flex flex-row justify-between shadow-lg border rounded-lg p-5'>

                        <div className='flex flex-row'>
                            <div className='w-44'>
                                <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-72 md:rounded-none md:rounded-l-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt="" />
                            </div>
                            <div className='flex flex-col ml-4'>
                                <a className='text-gray-900 text-[16px] font-semibold mb-2'>Gate over</a>
                                <div className='flex flex-row text-center items-center'>
                                    <a className='text-gray-900 text-[12px] mb-1 font-normal underline hover:cursor-pointer'>Somnath Sarkar,</a>
                                    <a className='text-gray-500 text-[12px] mb-1 font-normal px-1'>India</a>
                                </div>
                                <a className='text-gray-500 text-[12px] mb-1 font-normal '>Prints, Lithography</a>
                                <a className='text-gray-500 text-[12px] mb-1 font-normal '>50.8 × 66.04 cm</a>
                                <a className='text-[16px] font-semibold text-[#ce3434]'>₹40,000</a>
                            </div>
                        </div>
                        <div className='flex flex-col justify-evenly'>
                            <button className='flex items-center justify-evenly text-center flex-row  bg-[#ce3434] p-3 hover:cursor-pointer'>

                                <p className='font-roboto text-[12px] text-white'>Rate & Review</p>
                            </button>
                            <button className='flex items-center justify-evenly text-center flex-row bg-black h-10 p-3 hover:cursor-pointer'>

                                <p className='font-roboto text-[12px] text-white'>Return/Refund Status</p>
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderListCard