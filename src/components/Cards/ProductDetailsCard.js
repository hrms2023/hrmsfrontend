import React from 'react'
import Stars from '../Stars/Stars'
import { socialMediaAccountLogo } from '@/app/utils'
import { HeartIcon, ShoppingBagIcon } from '@heroicons/react/24/solid'
import { ChatBubbleBottomCenterIcon } from '@heroicons/react/24/solid'

const ProductDetailsCard = () => {
    return (
        <div className='w-full px-7'>
            <div className="flex flex-col items-center rounded-lg  md:flex-row ">

                <div className='px-5 flex flex-row items-center'>
                    <div className='mr-4 flex flex-col space-y-6'>
                        <img className="rounded-md  h-24 md:rounded-md" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt="" />
                        <img className="rounded-md  h-24 md:rounded-md" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt="" />
                        <img className="rounded-md  h-24 md:rounded-md" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt="" />
                        <img className="rounded-md  h-24 md:rounded-md" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt="" />
                    </div>
                    <img className="rounded-md h-[455px]  md:rounded-md" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt="" />
                </div>
                <div className="flex flex-col">
                    <h5 className="text-xl font-bold tracking-tight">The King</h5>
                    <div className='flex flex-row item-center mt-3'>
                        <p className='text-[12px] underline '>Bablu Bhowmik,</p>
                        <p className='text-gray-500 text-[12px] px-1'>India</p>
                    </div>
                    <div className='flex flex-row items-center text-center mt-3'>
                        <Stars />
                        <p className='text-gray-500 text-[12px] px-4 -mt-2 underline'>8 review</p>

                    </div>
                    <div className='flex flex-row items-center text-center mt-1'>
                        <a className='text-lg font-semibold text-[16px] text-[#ce3434]'>₹36,400</a>
                        <p className='text-gray-500 line-through text-[12px] ml-2'>₹40,400</p>
                        <div className='flex flex-row justify-end w-full items-center text-center'>
                            <p className='text-gray-500 px-44 text-[12px]'>Inclusive of Tax</p>
                        </div>
                    </div>
                    <div className='flex flex-row mt-5'>
                        <p className='font-semibold text-[12px] text-gray-500'>Availability: </p>
                        <p className='px-2 font-medium text-[12px] text-[#0f9d58]'>In Stock</p>
                    </div>
                    <div className='flex flex-row mt-5'>
                        <p className='font-semibold text-[12px] text-gray-500'>SKU: </p>
                        <p className='px-1 font-medium text-[12px] text-gray-500'>BB21PR2</p>
                    </div>
                    <div className="flex flex-row mt-5">
                        <div className="hover:cursor-pointer border border-gray-400 p-4 relative">
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[12px]">-</div>
                        </div>
                        <div className="border border-gray-400 p-4 relative">
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[12px]">1</div>
                        </div>
                        <div className="hover:cursor-pointer border border-gray-400 p-4 relative">
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[12px]">+</div>
                        </div>
                    </div>
                    <div className='flex flex-row mt-5'>
                        <div className='mr-2 bg-[#ce3434] h-12 w-full flex flex-row items-center text-center justify-center hover:cursor-pointer'>
                            <HeartIcon className='text-white h-4 w-4' />
                            <p className='font-roboto text-[12px] text-white text-center ml-2 items-center'>Add to whislist</p>
                        </div>
                        <div className='mr-2 bg-black h-12 w-full flex flex-row items-center text-center justify-center hover:cursor-pointer'>
                            <ShoppingBagIcon className='text-white h-4 w-4' />
                            <p className='font-roboto text-[12px] text-white text-center ml-2 items-center'>Add to bag</p>
                        </div>
                        <div className=' bg-[#ce3434] h-12 w-full flex flex-row items-center text-center justify-center hover:cursor-pointer'>
                            <ChatBubbleBottomCenterIcon className='text-white h-4 w-4' />
                            <p className='font-roboto text-[12px] text-white text-center ml-2 items-center'>Make an Enquiry</p>
                        </div>
                    </div>
                    <div className="mb-3 mt-5 flex flex-row items-center text-center">
                        <p className='font-semibold text-gray-500'> Share :</p>
                        <img src={socialMediaAccountLogo.facebook} className='hover:cursor-pointer h-4 w-4 ml-2 m-1' />
                        <img src={socialMediaAccountLogo.whatsApp} className='hover:cursor-pointer h-4 w-4 m-1' />
                        <img src={socialMediaAccountLogo.pintrest} className='hover:cursor-pointer h-4 w-4 m-1' />
                        <img src={socialMediaAccountLogo.linkedIn} className='hover:cursor-pointer h-4 w-4 m-1' />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProductDetailsCard