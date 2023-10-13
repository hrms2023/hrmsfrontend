'use client'
import React from 'react'
import Stars from '../Stars/Stars'
import { ChevronDownIcon, EyeIcon, ListBulletIcon, TableCellsIcon } from '@heroicons/react/24/solid';
import { ShoppingBagIcon, TrashIcon } from '@heroicons/react/24/outline';

const DetailsPageShopListView = ({ tableView, setTableView }) => {
    return (
        <div className='mt-6 w-full px-4'>
            <div className='flex flex-row  justify-between'>
                <p className='text-sm font-medium text-gray-500'>Showing 125 results</p>
                <div className='flex flex-row items-center text-center'>
                    <p className='text-sm font-medium text-gray-500'>Sort by: </p>
                    <div className="relative inline-flex hover:cursor-pointer">
                        <select className="appearance-none bg-transparent text-sm font-semibold text-gray-500 border-none px-4 py-2 pr-8 leading-tight focus:outline-none">
                            <option value="default" disabled selected>
                                Default
                            </option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5 text-gray-700">
                            <ChevronDownIcon className='h-4 w-4' />
                        </div>
                    </div>
                    <div className='flex flex-row text-sm font-semibold'>
                        <TableCellsIcon onClick={() => setTableView(true)} className='h-4 w-4 m-1 hover:cursor-pointer' />
                        <ListBulletIcon onClick={() => setTableView(false)} className='h-4 w-4 m-1 hover:cursor-pointer' />
                    </div>
                </div>
            </div>
            <div className='flex flex-col item-center justify-center mt-5'>
                <div className='bg-gray-50 w-full flex flex-row justify-between shadow-lg border rounded-lg p-5 mb-5'>

                    <div className='flex flex-row'>
                        <div className='w-44 '>
                            <img class="object-cover w-full rounded-md h-96 md:h-auto md:w-72 md:rounded-md" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt="" />
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
                        <button className='flex items-center justify-center text-center px-4 flex-row bg-black h-10 p-2 w-full hover:cursor-pointer'>
                            <EyeIcon className='h-4 w-4 text-white' />
                            <p className='font-roboto ml-2 text-white text-[12px]'>View Product</p>
                        </button>
                        <button className='flex items-center justify-center text-center flex-row bg-[#ce3434] p-2 px-4 w-full hover:cursor-pointer'>
                            <ShoppingBagIcon className='h-4 w-4 mr-4 text-white' />
                            <p className='font-roboto   -ml-2 text-white text-[12px]'>Add to Bag</p>
                        </button>
                    </div>
                </div>
                <div className='bg-gray-50 w-full flex flex-row justify-between shadow-lg border rounded-lg p-5 mb-5'>

                    <div className='flex flex-row'>
                        <div className='w-44'>
                            <img class="object-cover w-full rounded-md h-96 md:h-auto md:w-72 md:rounded-md" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt="" />
                        </div>
                        <div className='flex flex-col ml-4'>
                            <div className='flex flex-row mb-2'>
                                <button className='text-[10px] px-2 text-center items-center justify-center flex flex-row text-white rounded-md bg-[#ce3434]'>
                                    <p>Bestseller </p>
                                </button>
                                <button className='text-[10px] px-2 text-white rounded-md bg-black ml-2'>
                                    Sale
                                </button>
                            </div>
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
                        <button className='flex items-center justify-center text-center px-4 flex-row bg-black h-10 p-2 w-full hover:cursor-pointer'>
                            <EyeIcon className='h-4 w-4 text-white' />
                            <p className='font-roboto ml-2 text-white text-[12px]'>View Product</p>
                        </button>
                        <button className='flex items-center justify-center text-center flex-row bg-[#ce3434] p-2 px-4 w-full hover:cursor-pointer'>
                            <ShoppingBagIcon className='h-4 w-4 mr-4 text-white' />
                            <p className='font-roboto   -ml-2 text-white text-[12px]'>Add to Bag</p>
                        </button>
                    </div>
                </div>
                <div className='bg-gray-50 w-full flex flex-row justify-between shadow-lg border rounded-lg p-5 mb-5'>

                    <div className='flex flex-row'>
                        <div className='w-44'>
                            <img class="object-cover w-full rounded-md h-96 md:h-auto md:w-72 md:rounded-md" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt="" />
                        </div>
                        <div className='flex flex-col ml-4'>
                            <a className='text-gray-900 text-[16px] font-semibold mb-2'>Gate over</a>
                            <Stars />
                            <div className='flex flex-row text-center items-center'>
                                <a className='text-gray-900 text-[12px] mb-1 font-normal underline hover:cursor-pointer'>Somnath Sarkar,</a>
                                <a className='text-gray-500 text-[12px] mb-1 font-normal px-1'>India</a>
                            </div>
                            <a className='text-gray-500 text-[12px] mb-1 font-normal'>Prints, Lithography</a>
                            <a className='text-gray-500 text-[12px] mb-1 font-normal'>50.8 × 66.04 cm</a>
                            <a className='text-[16px] font-semibold text-[#ce3434]'>₹36,400</a>
                        </div>
                    </div>
                    <div className='flex flex-col justify-evenly'>
                        <button className='flex items-center justify-center text-center px-4 flex-row bg-black h-10 p-2 w-full hover:cursor-pointer'>
                            <EyeIcon className='h-4 w-4 text-white' />
                            <p className='font-roboto ml-2 text-white text-[12px]'>View Product</p>
                        </button>
                        <button className='flex items-center justify-center text-center flex-row bg-[#ce3434] p-2 px-4 w-full hover:cursor-pointer'>
                            <ShoppingBagIcon className='h-4 w-4 mr-4 text-white' />
                            <p className='font-roboto   -ml-2 text-white text-[12px]'>Add to Bag</p>
                        </button>
                    </div>
                </div>
                <div className='bg-gray-50 w-full flex flex-row justify-between shadow-lg border rounded-lg p-5 mb-5'>
                    <div className='flex flex-row'>
                        <div className='w-44'>
                            <img class="object-cover w-full rounded-md h-96 md:h-auto md:w-72 md:rounded-md" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt="" />
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
                        <button className='flex items-center justify-center text-center px-4 flex-row bg-black h-10 p-2 w-full hover:cursor-pointer'>
                            <EyeIcon className='h-4 w-4 text-white' />
                            <p className='font-roboto ml-2 text-white text-[12px]'>View Product</p>
                        </button>
                        <button className='flex items-center justify-center text-center flex-row bg-[#ce3434] p-2 px-4 w-full hover:cursor-pointer'>
                            <ShoppingBagIcon className='h-4 w-4 mr-4 text-white' />
                            <p className='font-roboto   -ml-2 text-white text-[12px]'>Add to Bag</p>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default DetailsPageShopListView;
