import { images } from '@/app/utils'
import React from 'react'
import Stars from '../Stars/Stars'
import { ArrowDownIcon, EyeIcon, ListBulletIcon, ShoppingBagIcon, TableCellsIcon } from '@heroicons/react/24/solid'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

const ShopCards = ({tableView, setTableView}) => {
    return (
        <div>
            <div className='flex flex-row mt-4 justify-between px-6'>
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
                        <TableCellsIcon onClick={()=> setTableView(true)} className='h-4 w-4 m-1 hover:cursor-pointer'/>
                        <ListBulletIcon onClick={()=> setTableView(false)} className='h-4 w-4 m-1 hover:cursor-pointer'/>
                    </div>
                </div>
            </div>
            <div className='mt-5 px-6'>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="grid gap-4">
                        <div className='h-auto max-w-full rounded-lg'>
                            <img className="" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt="" />
                            <div className='flex flex-col mt-2'><div className='px-3'>
                                
                                <a className='text-gray-900 text-[16px] font-semibold'>Gate over</a>
                                <Stars />
                                <div className='flex flex-row text-center items-center'>
                                    <a className='text-gray-900 text-[12px] font-normal underline'>Somnath Sarkar,</a>
                                    <a className='text-gray-500 text-[12px] font-normal px-1'>India</a>
                                </div>
                                <div className='flex flex-col'>
                                    <a className='text-gray-500 text-[12px] font-normal '>Prints, Lithography</a>
                                    <a className='text-gray-500 text-[12px] font-normal '>50.8 × 66.04 cm</a>
                                    <a className='text-lg font-semibold text-[#ce3434]'>₹36,400</a>
                                </div>
                            </div>
                                <div className='flex flex-row mt-2'>
                                    <div className='items-center justify-center text-center flex flex-row hover:cursor-pointer bg-[#ce3434] h-12 w-1/2'>
                                         <EyeIcon className='h-4 w-4 text-white' />
                                        <p className='font-roboto text-[12px]  ml-2 text-white'> View Product</p>
                                    </div>
                                    <div className='items-center justify-center text-center flex flex-row hover:cursor-pointer bg-black h-12 w-1/2'>
                                        <ShoppingBagIcon className='h-4 w-4 text-white' />
                                        <p className='font-roboto text-[12px]  ml-2 text-white'>Add to Bag</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='h-auto max-w-full rounded-lg'>
                            <img className="" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt="" />
                            <div className='flex flex-col mt-2'><div className='px-3'>
                                
                                <a className='text-gray-900 text-[16px] font-semibold'>Gate over</a>
                                <Stars />
                                <div className='flex flex-row text-center items-center'>
                                    <a className='text-gray-900 text-[12px] font-normal underline'>Somnath Sarkar,</a>
                                    <a className='text-gray-500 text-[12px] font-normal px-1'>India</a>
                                </div>
                                <div className='flex flex-col'>
                                    <a className='text-gray-500 text-[12px] font-normal '>Prints, Lithography</a>
                                    <a className='text-gray-500 text-[12px] font-normal '>50.8 × 66.04 cm</a>
                                    <a className='text-lg font-semibold text-[#ce3434]'>₹36,400</a>
                                </div>
                            </div>
                                <div className='flex flex-row mt-2'>
                                    <div className='items-center justify-center text-center  flex flex-row bg-[#ce3434] h-12 w-1/2'>
                                        <EyeIcon className='h-4 w-4 text-white' />
                                        <p className='font-roboto text-[12px] ml-2 text-white'> View Product</p>
                                    </div>
                                    <div className='items-center justify-center text-center flex flex-row hover:cursor-pointer bg-black h-12 w-1/2'>
                                        <ShoppingBagIcon className='h-4 w-4 text-white' />
                                        <p className='font-roboto text-[12px] ml-2 text-white'>Add to Bag</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='h-auto max-w-full rounded-lg'>
                            <img className="" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt="" />
                            <div className='flex flex-col mt-2'><div className='px-3'>
                                
                                <a className='text-gray-900 text-[16px] font-semibold'>Gate over</a>
                                <Stars />
                                <div className='flex flex-row text-center items-center'>
                                    <a className='text-gray-900 text-[12px] font-normal underline'>Somnath Sarkar,</a>
                                    <a className='text-gray-500 text-[12px] font-normal px-1'>India</a>
                                </div>
                                <div className='flex flex-col'>
                                    <a className='text-gray-500 text-[12px] font-normal '>Prints, Lithography</a>
                                    <a className='text-gray-500 text-[12px] font-normal '>50.8 × 66.04 cm</a>
                                    <a className='text-lg font-semibold text-[#ce3434]'>₹36,400</a>
                                </div>
                            </div>
                                <div className='flex flex-row mt-2'>
                                    <div className='items-center justify-center text-center flex flex-row hover:cursor-pointer bg-[#ce3434] h-12 w-1/2'>
                                        <EyeIcon className='h-4 w-4 text-white' />
                                        <p className='font-roboto text-[12px] ml-2 text-white'> View Product</p>
                                    </div>
                                    <div className='items-center justify-center text-center flex flex-row hover:cursor-pointer bg-black h-12 w-1/2'>
                                        <ShoppingBagIcon className='h-4 w-4 text-white' />
                                        <p className='font-roboto text-[12px] ml-2 text-white'>Add to Bag</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <div className='h-auto max-w-full rounded-lg'>
                            <img className="" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt="" />
                            <div className='flex flex-col mt-2'><div className='px-3'>
                            <div className='flex flex-row mb-2'>
                                <button className='text-[10px] px-2  text-center items-center justify-center flex flex-row text-white rounded-md bg-[#ce3434]'>
                                    <p>Bestseller </p>
                                </button>
                                <button className='text-[10px] px-2  text-white rounded-md bg-black ml-2'>
                                    Sale
                                </button>
                            </div>
                                <a className='text-gray-900 text-[16px] font-semibold'>Gate over</a>
                                <Stars />
                                <div className='flex flex-row text-center items-center'>
                                    <a className='text-gray-900 text-[12px] font-normal underline'>Somnath Sarkar,</a>
                                    <a className='text-gray-500 text-[12px] font-normal px-1'>India</a>
                                </div>
                                <div className='flex flex-col'>
                                    <a className='text-gray-500 text-[12px] font-normal '>Prints, Lithography</a>
                                    <a className='text-gray-500 text-[12px] font-normal '>50.8 × 66.04 cm</a>
                                    <a className='text-lg font-semibold text-[#ce3434]'>₹36,400</a>
                                </div>
                            </div>
                                <div className='flex flex-row mt-2'>
                                    <div className='items-center justify-center text-center flex flex-row hover:cursor-pointer bg-[#ce3434] h-12 w-1/2'>
                                        <EyeIcon className='h-4 w-4 text-white' />
                                        <p className='font-roboto text-[12px] ml-2 text-white'> View Product</p>
                                    </div>
                                    <div className='items-center justify-center text-center flex flex-row hover:cursor-pointer bg-black h-12 w-1/2'>
                                        <ShoppingBagIcon className='h-4 w-4 text-white' />
                                        <p className='font-roboto text-[12px] ml-2 text-white'>Add to Bag</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='h-auto max-w-full rounded-lg'>
                            <img className="" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt="" />
                            <div className='flex flex-col mt-2'><div className='px-3'>
                                
                                <a className='text-gray-900 text-[16px] font-semibold'>Gate over</a>
                                <Stars />
                                <div className='flex flex-row text-center items-center'>
                                    <a className='text-gray-900 text-[12px] font-normal underline'>Somnath Sarkar,</a>
                                    <a className='text-gray-500 text-[12px] font-normal px-1'>India</a>
                                </div>
                                <div className='flex flex-col'>
                                    <a className='text-gray-500 text-[12px] font-normal '>Prints, Lithography</a>
                                    <a className='text-gray-500 text-[12px] font-normal '>50.8 × 66.04 cm</a>
                                    <a className='text-lg font-semibold text-[#ce3434]'>₹36,400</a>
                                </div>
                            </div>
                                <div className='flex flex-row mt-2'>
                                    <div className='items-center justify-center text-center flex flex-row hover:cursor-pointer bg-[#ce3434] h-12 w-1/2'>
                                        <EyeIcon className='h-4 w-4 text-white' />
                                        <p className='font-roboto text-[12px] ml-2 text-white'> View Product</p>
                                    </div>
                                    <div className='items-center justify-center text-center flex flex-row hover:cursor-pointer bg-black h-12 w-1/2'>
                                        <ShoppingBagIcon className='h-4 w-4 text-white' />
                                        <p className='font-roboto text-[12px] ml-2 text-white'>Add to Bag</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='h-auto max-w-full rounded-lg'>
                            <img className="" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt="" />
                            <div className='flex flex-col mt-2'><div className='px-3'>
                                
                                <a className='text-gray-900 text-[16px] font-semibold'>Gate over</a>
                                <Stars />
                                <div className='flex flex-row text-center items-center'>
                                    <a className='text-gray-900 text-[12px] font-normal underline'>Somnath Sarkar,</a>
                                    <a className='text-gray-500 text-[12px] font-normal px-1'>India</a>
                                </div>
                                <div className='flex flex-col'>
                                    <a className='text-gray-500 text-[12px] font-normal '>Prints, Lithography</a>
                                    <a className='text-gray-500 text-lg font-normal '>50.8 × 66.04 cm</a>
                                    <a className='text-lg font-semibold text-[#ce3434]'>₹36,400</a>
                                </div>
                            </div>
                                <div className='flex flex-row mt-2'>
                                    <div className='items-center justify-center text-center flex flex-row hover:cursor-pointer bg-[#ce3434] h-12 w-1/2'>
                                        <EyeIcon className='h-4 w-4 text-white' />
                                        <p className='font-roboto text-[12px] ml-2 text-white'> View Product</p>
                                    </div>
                                    <div className='items-center justify-center text-center flex flex-row hover:cursor-pointer bg-black h-12 w-1/2'>
                                        <ShoppingBagIcon className='h-4 w-4 text-white' />
                                        <p className='font-roboto text-[12px] ml-2 text-white'>Add to Bag</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <div className='h-auto max-w-full rounded-lg'>
                            <img className="" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt="" />
                            <div className='flex flex-col mt-2'><div className='px-3'>
                                
                                <a className='text-gray-900 text-[16px] font-semibold'>Gate over</a>
                                <Stars />
                                <div className='flex flex-row text-center items-center'>
                                    <a className='text-gray-900 text-[12px] font-normal underline'>Somnath Sarkar,</a>
                                    <a className='text-gray-500 text-[12px] font-normal px-1'>India</a>
                                </div>
                                <div className='flex flex-col'>
                                    <a className='text-gray-500 text-[12px] font-normal '>Prints, Lithography</a>
                                    <a className='text-gray-500 text-[12px] font-normal '>50.8 × 66.04 cm</a>
                                    <a className='text-lg font-semibold text-[#ce3434]'>₹36,400</a>
                                </div>
                            </div>
                                <div className='flex flex-row mt-2'>
                                    <div className='items-center justify-center text-center flex flex-row hover:cursor-pointer bg-[#ce3434] h-12 w-1/2'>
                                        <EyeIcon className='h-4 w-4 text-white' />
                                        <p className='font-roboto text-[12px] ml-2 text-white'> View Product</p>
                                    </div>
                                    <div className='items-center justify-center text-center flex flex-row hover:cursor-pointer bg-black h-12 w-1/2'>
                                        <ShoppingBagIcon className='h-4 w-4 text-white' />
                                        <p className='font-roboto text-[12px] ml-2 text-white'>Add to Bag</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='h-auto max-w-full rounded-lg'>
                            <img className="" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt="" />
                            <div className='flex flex-col mt-2'><div className='px-3'>
                                
                                <a className='text-gray-900 text-[16px] font-semibold'>Gate over</a>
                                <Stars />
                                <div className='flex flex-row text-center items-center'>
                                    <a className='text-gray-900 text-[12px] font-normal underline'>Somnath Sarkar,</a>
                                    <a className='text-gray-500 text-[12px] font-normal px-1'>India</a>
                                </div>
                                <div className='flex flex-col'>
                                    <a className='text-gray-500 text-[12px] font-normal '>Prints, Lithography</a>
                                    <a className='text-gray-500 text-[12px] font-normal '>50.8 × 66.04 cm</a>
                                    <a className='text-lg font-semibold text-[#ce3434]'>₹36,400</a>
                                </div>
                            </div>
                                <div className='flex flex-row mt-2'>
                                    <div className='items-center justify-center text-center flex flex-row hover:cursor-pointer bg-[#ce3434] h-12 w-1/2'>
                                        <EyeIcon className='h-4 w-4 text-white' />
                                        <p className='font-roboto text-[12px] ml-2 text-white'> View Product</p>
                                    </div>
                                    <div className='items-center justify-center text-center flex flex-row hover:cursor-pointer bg-black h-12 w-1/2'>
                                        <ShoppingBagIcon className='h-4 w-4 text-white' />
                                        <p className='font-roboto text-[12px] ml-2 text-white'>Add to Bag</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='h-auto max-w-full rounded-lg'>
                            <img className="" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt="" />
                            <div className='flex flex-col mt-2'><div className='px-3'>
                                
                                <a className='text-gray-900 text-[16px] font-semibold'>Gate over</a>
                                <Stars />
                                <div className='flex flex-row text-center items-center'>
                                    <a className='text-gray-900 text-[12px] font-normal underline'>Somnath Sarkar,</a>
                                    <a className='text-gray-500 text-[12px] font-normal px-1'>India</a>
                                </div>
                                <div className='flex flex-col'>
                                    <a className='text-gray-500 text-[12px] font-normal '>Prints, Lithography</a>
                                    <a className='text-gray-500 text-[12px] font-normal '>50.8 × 66.04 cm</a>
                                    <a className='text-lg font-semibold text-[#ce3434]'>₹36,400</a>
                                </div>
                            </div>
                                <div className='flex flex-row mt-2'>
                                    <div className='items-center justify-center text-center flex flex-row hover:cursor-pointer bg-[#ce3434] h-12 w-1/2'>
                                        <EyeIcon className='h-4 w-4 text-white' />
                                        <p className='font-roboto text-[12px] ml-2 text-white'> View Product</p>
                                    </div>
                                    <div className='items-center justify-center text-center flex flex-row hover:cursor-pointer bg-black h-12 w-1/2'>
                                        <ShoppingBagIcon className='h-4 w-4 text-white' />
                                        <p className='font-roboto text-[12px] ml-2 text-white'>Add to Bag</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <div className='h-auto max-w-full rounded-lg'>
                            <img className="" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt="" />
                            <div className='flex flex-col mt-2'><div className='px-3'>
                                
                                <a className='text-gray-900 text-[16px] font-semibold'>Gate over</a>
                                <Stars />
                                <div className='flex flex-row text-center items-center'>
                                    <a className='text-gray-900 text-[12px] font-normal underline'>Somnath Sarkar,</a>
                                    <a className='text-gray-500 text-[12px] font-normal px-1'>India</a>
                                </div>
                                <div className='flex flex-col'>
                                    <a className='text-gray-500 text-[12px] font-normal '>Prints, Lithography</a>
                                    <a className='text-gray-500 text-[12px] font-normal '>50.8 × 66.04 cm</a>
                                    <a className='text-lg font-semibold text-[#ce3434]'>₹36,400</a>
                                </div>
                            </div>
                                <div className='flex flex-row mt-2'>
                                    <div className='items-center justify-center text-center flex flex-row hover:cursor-pointer bg-[#ce3434] h-12 w-1/2'>
                                        <EyeIcon className='h-4 w-4 text-white' />
                                        <p className='font-roboto text-[12px] ml-2 text-white'> View Product</p>
                                    </div>
                                    <div className='items-center justify-center text-center flex flex-row hover:cursor-pointer bg-black h-12 w-1/2'>
                                        <ShoppingBagIcon className='h-4 w-4 text-white' />
                                        <p className='font-roboto text-[12px] ml-2 text-white'>Add to Bag</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='h-auto max-w-full rounded-lg'>
                            <img className="" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt="" />
                            <div className='flex flex-col mt-2'><div className='px-3'>
                                
                                <a className='text-gray-900 text-[16px] font-semibold'>Gate over</a>
                                <Stars />
                                <div className='flex flex-row text-center items-center'>
                                    <a className='text-gray-900 text-[12px] font-normal underline'>Somnath Sarkar,</a>
                                    <a className='text-gray-500 text-[12px] font-normal px-1'>India</a>
                                </div>
                                <div className='flex flex-col'>
                                    <a className='text-gray-500 text-[12px] font-normal '>Prints, Lithography</a>
                                    <a className='text-gray-500 text-[12px] font-normal '>50.8 × 66.04 cm</a>
                                    <a className='text-lg font-semibold text-[#ce3434]'>₹36,400</a>
                                </div>
                            </div>
                                <div className='flex flex-row mt-2'>
                                    <div className='items-center justify-center text-center flex flex-row hover:cursor-pointer bg-[#ce3434] h-12 w-1/2'>
                                        <EyeIcon className='h-4 w-4 text-white' />
                                        <p className='font-roboto text-[12px] ml-2 text-white'> View Product</p>
                                    </div>
                                    <div className='items-center justify-center text-center flex flex-row hover:cursor-pointer bg-black h-12 w-1/2'>
                                        <ShoppingBagIcon className='h-4 w-4 text-white' />
                                        <p className='font-roboto text-[12px] ml-2 text-white'>Add to Bag</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='h-auto max-w-full rounded-lg'>
                            <img className="" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt="" />
                            <div className='flex flex-col mt-2'><div className='px-3'>
                                
                                <a className='text-gray-900 text-[16px] font-semibold'>Gate over</a>
                                <Stars />
                                <div className='flex flex-row text-center items-center'>
                                    <a className='text-gray-900 text-[12px] font-normal underline'>Somnath Sarkar,</a>
                                    <a className='text-gray-500 text-[12px] font-normal px-1'>India</a>
                                </div>
                                <div className='flex flex-col'>
                                    <a className='text-gray-500 text-[12px] font-normal '>Prints, Lithography</a>
                                    <a className='text-gray-500 text-[12px] font-normal '>50.8 × 66.04 cm</a>
                                    <a className='text-lg font-semibold text-[#ce3434]'>₹36,400</a>
                                </div>
                            </div>
                                <div className='flex flex-row mt-2'>
                                    <div className='items-center justify-center text-center flex flex-row hover:cursor-pointer bg-[#ce3434] h-12 w-1/2'>
                                        <EyeIcon className='h-4 w-4 text-white' />
                                        <p className='font-roboto text-[12px] ml-2 text-white'> View Product</p>
                                    </div>
                                    <div className='items-center justify-center text-center flex flex-row hover:cursor-pointer bg-black h-12 w-1/2'>
                                        <ShoppingBagIcon className='h-4 w-4 text-white' />
                                        <p className='font-roboto text-[12px] ml-2 text-white'>Add to Bag</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShopCards