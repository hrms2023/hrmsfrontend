'use client'
import React from 'react'
import Stars from '../Stars/Stars'
import { EyeIcon, ShoppingBagIcon, TrashIcon } from '@heroicons/react/24/solid';

const WishListCard = () => {
    return (
        <div className='flex flex-col item-center justify-center mt-2 px-5'>
            <div className='bg-gray-50 w-full flex flex-row justify-between shadow-lg border rounded-lg p-5 mb-5'>

                <div className='flex flex-row'>
                    <div className='w-44'>
                        <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-72 md:rounded-none md:rounded-l-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt="" />
                    </div>
                    <div className='flex flex-col ml-4'>
                        <a className='text-gray-900 text-[16px] font-semibold mb-2'>Gate over</a>
                        <Stars />
                        <div className='flex flex-row text-center items-center'>
                            <a className='text-gray-900 text-[12px] mb-1 font-normal underline hover:cursor-pointer'>Somnath Sarkar,</a>
                            <a className='text-gray-500 text-[12px] mb-1 font-normal px-1'>India</a>
                        </div>
                        <a className='text-gray-500 text-[12px] mb-1 font-normal '>Prints, Lithography</a>
                        <a className='text-gray-500 text-[12px] mb-1 font-normal '>50.8 × 66.04 cm</a>
                        <a className='text-[16px] font-semibold text-[#ce3434]'>₹36,400</a>
                    </div>
                </div>
                <div className='flex flex-col justify-evenly'>
                    <button className='flex flex-row items-center w-full justify-center text-center h-10 bg-black p-3 px-4 hover:cursor-pointer'>
                        <ShoppingBagIcon className='h-4 w-4 text-white' />
                        <p className='font-roboto text-[12px] text-white ml-2'>Add to Bag</p>
                    </button>
                    <button className='flex flex-row items-center w-full justify-center text-center bg-[#ce3434] p-3 px-4 hover:cursor-pointer'>
                        <TrashIcon className='h-4 w-4 text-white' />
                        <p className='font-roboto text-[12px] ml-2 text-white'>Delete</p>
                    </button>
                </div>
            </div>
            <div className='bg-gray-50 w-full flex flex-row justify-between shadow-lg border rounded-lg p-5 mb-5'>

                <div className='flex flex-row'>
                    <div className='w-44'>
                        <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-72 md:rounded-none md:rounded-l-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt="" />
                    </div>
                    <div className='flex flex-col ml-4'>
                        <a className='text-gray-900 text-[16px] font-semibold mb-2'>Gate over</a>
                        <Stars />
                        <div className='flex flex-row text-center items-center'>
                            <a className='text-gray-900 text-[12px] mb-1 font-normal underline hover:cursor-pointer'>Somnath Sarkar,</a>
                            <a className='text-gray-500 text-[12px] mb-1 font-normal px-1'>India</a>
                        </div>
                        <a className='text-gray-500 text-[12px] mb-1 font-normal '>Prints, Lithography</a>
                        <a className='text-gray-500 text-[12px] mb-1 font-normal '>50.8 × 66.04 cm</a>
                        <a className='text-[16px] font-semibold text-[#ce3434]'>₹36,400</a>
                    </div>
                </div>
                <div className='flex flex-col justify-evenly'>
                    <button className='flex flex-row items-center w-full justify-center text-center h-10 bg-black p-3 px-4 hover:cursor-pointer'>
                        <ShoppingBagIcon className='h-4 w-4 text-white' />
                        <p className='font-roboto text-[12px] text-white ml-2'>Add to Bag</p>
                    </button>
                    <button className='flex flex-row items-center w-full justify-center text-center bg-[#ce3434] p-3 px-4 hover:cursor-pointer'>
                        <TrashIcon className='h-4 w-4 text-white' />
                        <p className='font-roboto text-[12px] ml-2 text-white'>Delete</p>
                    </button>
                </div>
            </div>
            <div className='bg-gray-50 w-full flex flex-row justify-between shadow-lg border rounded-lg p-5 mb-5'>

                <div className='flex flex-row'>
                    <div className='w-44'>
                        <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-72 md:rounded-none md:rounded-l-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt="" />
                    </div>
                    <div className='flex flex-col ml-4'>
                        <a className='text-gray-900 text-[16px] font-semibold mb-2'>Gate over</a>
                        <Stars />
                        <div className='flex flex-row text-center items-center'>
                            <a className='text-gray-900 text-[12px] mb-1 font-normal underline hover:cursor-pointer'>Somnath Sarkar,</a>
                            <a className='text-gray-500 text-[12px] mb-1 font-normal px-1'>India</a>
                        </div>
                        <a className='text-gray-500 text-[12px] mb-1 font-normal '>Prints, Lithography</a>
                        <a className='text-gray-500 text-[12px] mb-1 font-normal '>50.8 × 66.04 cm</a>
                        <a className='text-[16px] font-semibold text-[#ce3434]'>₹36,400</a>
                    </div>
                </div>
                <div className='flex flex-col justify-evenly'>
                    <button className='flex flex-row items-center w-full justify-center text-center h-10 bg-black p-3 px-4 hover:cursor-pointer'>
                        <ShoppingBagIcon className='h-4 w-4 text-white' />
                        <p className='font-roboto text-[12px] text-white ml-2'>Add to Bag</p>
                    </button>
                    <button className='flex flex-row items-center w-full justify-center text-center bg-[#ce3434] p-3 px-4 hover:cursor-pointer'>
                        <TrashIcon className='h-4 w-4 text-white' />
                        <p className='font-roboto text-[12px] ml-2 text-white'>Delete</p>
                    </button>
                </div>
            </div>
            <div className='bg-gray-50 w-full flex flex-row justify-between shadow-lg border rounded-lg p-5 mb-5'>

                <div className='flex flex-row'>
                    <div className='w-44'>
                        <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-72 md:rounded-none md:rounded-l-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt="" />
                    </div>
                    <div className='flex flex-col ml-4'>
                        <a className='text-gray-900 text-[16px] font-semibold mb-2'>Gate over</a>
                        <Stars />
                        <div className='flex flex-row text-center items-center'>
                            <a className='text-gray-900 text-[12px] mb-1 font-normal underline hover:cursor-pointer'>Somnath Sarkar,</a>
                            <a className='text-gray-500 text-[12px] mb-1 font-normal px-1'>India</a>
                        </div>
                        <a className='text-gray-500 text-[12px] mb-1 font-normal '>Prints, Lithography</a>
                        <a className='text-gray-500 text-[12px] mb-1 font-normal '>50.8 × 66.04 cm</a>
                        <a className='text-[16px] font-semibold text-[#ce3434]'>₹36,400</a>
                    </div>
                </div>
                <div className='flex flex-col justify-evenly'>
                    <button className='flex flex-row items-center w-full justify-center text-center h-10 bg-black p-3 px-4 hover:cursor-pointer'>
                        <ShoppingBagIcon className='h-4 w-4 text-white' />
                        <p className='font-roboto text-[12px] text-white ml-2'>Add to Bag</p>
                    </button>
                    <button className='flex flex-row items-center w-full justify-center text-center bg-[#ce3434] p-3 px-4 hover:cursor-pointer'>
                        <TrashIcon className='h-4 w-4 text-white' />
                        <p className='font-roboto text-[12px] ml-2 text-white'>Delete</p>
                    </button>
                </div>
            </div>

        </div>

    )
}

export default WishListCard;

