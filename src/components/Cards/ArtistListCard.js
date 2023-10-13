'use client'
import React from 'react'
import Stars from '../Stars/Stars'
import { ShoppingBagIcon, TrashIcon } from '@heroicons/react/24/outline'
import {  EyeIcon, MapPinIcon } from '@heroicons/react/24/solid'
import { useQuery } from '@tanstack/react-query'
import { allArtistListView } from '@/api/api'
import { formatBigIntDate } from '@/app/utils'

const ArtistListCard = () => {
    const { data: allArtistList } = useQuery(['allArtistList'], () => allArtistListView());
    console.log(allArtistList?.data);
    return(
        <div className='flex flex-col item-center w-full justify-center px-12 mt-5'>
            {/* <div className='bg-gray-50 w-full flex flex-row justify-between shadow-lg border rounded-lg px-5 mb-5'>

                <div className='flex flex-row items-center'>

                    <img class="object-cover rounded-t-lg h-24 w-24 md:rounded-none md:rounded-l-lg" src="./profile.png" alt="" />
                    <div className='flex flex-col m-6'>
                        <a className='text-gray-900 text-[16px] font-semibold mb-2'>Ayaan Ejaz</a>

                        <div className='flex flex-row text-center items-center mb-1'>
                            <MapPinIcon className='h-4 w-4 text-gray-500 mr-1' />
                            <a className='text-gray-500 text-[12px] font-normal '>Kolkata,</a>
                            <a className='text-gray-500 text-[12px] font-normal px-1'>India</a>
                        </div>
                        <div className='flex flex-row text-center items-center'>
                            <a className='text-gray-500 text-[12px] font-normal mr-2'>53 Artworks</a>
                            <div className="border-l border-gray-300 h-3"></div>
                            <a className='text-gray-500 text-[12px]  font-normal ml-2'>7 Followers</a>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col justify-evenly'>
                    <button className='flex items-center justify-center text-center flex-row bg-black h-10 px-4 p-2 hover:cursor-pointer'>
                        <EyeIcon className='h-4 w-4 text-white' />
                        <p className='font-roboto text-white ml-2 text-[12px]'>View</p>
                    </button>
                    <button className='flex items-center justify-center text-center flex-row bg-[#ce3434] px-4 p-2 hover:cursor-pointer'>
                        <img src='./follow-white.png' className='h-4 w-4' />
                        <p className='font-roboto text-white ml-2 text-[12px]'>Following</p>
                    </button>
                </div>
            </div> */}
            {allArtistList?.data?.map((items, id) => (
                <div className='bg-gray-50 w-full flex flex-row justify-between shadow-lg border rounded-lg px-5 mb-5'>

                    <div className='flex flex-row items-center'>

                        <img class="object-cover rounded-t-lg h-24 w-24 md:rounded-none md:rounded-l-lg" src="./profile.png" alt="" />
                        <div className='flex flex-col m-6'>
                            <a className='text-gray-900 text-[16px] font-semibold mb-2'>{items.artistName}</a>

                            <div className='flex flex-row text-center items-center mb-1'>
                                <MapPinIcon className='h-4 w-4 text-gray-500 mr-1' />
                                <a className='text-gray-500 text-[12px] font-normal '>{items.email},</a>
                                <a className='text-gray-500 text-[12px] font-normal px-1'>{formatBigIntDate(items.dob)}</a>
                            </div>
                            <div className='flex flex-row text-center items-center'>
                                <a className='text-gray-500 text-[12px] font-normal mr-2'>53 Artworks</a>
                                <div className="border-l border-gray-300 h-3"></div>
                                <a className='text-gray-500 text-[12px]  font-normal ml-2'>7 Followers</a>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col justify-evenly'>
                        <button className='flex items-center justify-center text-center flex-row bg-black h-10 px-4 p-2 hover:cursor-pointer'>
                            <EyeIcon className='h-4 w-4 text-white' />
                            <p className='font-roboto text-white ml-2 text-[12px]'>View</p>
                        </button>
                        <button className='flex items-center justify-center text-center flex-row bg-[#ce3434] px-4 p-2 hover:cursor-pointer'>
                            <img src='./follow-white.png' className='h-4 w-4' />
                            <p className='font-roboto text-white ml-2 text-[12px]'>Follow</p>
                        </button>
                    </div>
                </div>
            ))}
            {/* <div className='bg-gray-50 w-full flex flex-row justify-between shadow-lg border rounded-lg px-5 mb-5'>

                <div className='flex flex-row items-center'>

                    <img class="object-cover rounded-t-lg h-24 w-24 md:rounded-none md:rounded-l-lg" src="./profile.png" alt="" />
                    <div className='flex flex-col m-6'>
                        <a className='text-gray-900 text-[16px] font-semibold mb-2'>Pritam Sarkar</a>

                        <div className='flex flex-row text-center items-center mb-1'>
                            <MapPinIcon className='h-4 w-4 text-gray-500 mr-1' />
                            <a className='text-gray-500 text-[12px] font-normal '>Kolkata,</a>
                            <a className='text-gray-500 text-[12px] font-normal px-1'>India</a>
                        </div>
                        <div className='flex flex-row text-center items-center'>
                            <a className='text-gray-500 text-[12px] font-normal mr-2'>53 Artworks</a>
                            <div className="border-l border-gray-300 h-3"></div>
                            <a className='text-gray-500 text-[12px]  font-normal ml-2'>7 Followers</a>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col justify-evenly'>
                    <button className='flex items-center justify-center text-center flex-row bg-black h-10 px-4 p-2 hover:cursor-pointer'>
                        <EyeIcon className='h-4 w-4 text-white' />
                        <p className='font-roboto text-white ml-2 text-[12px]'>View</p>
                    </button>
                    <button className='flex items-center justify-center text-center flex-row bg-[#ce3434] px-4 p-2 hover:cursor-pointer'>
                        <img src='./follow-white.png' className='h-4 w-4' />
                        <p className='font-roboto text-white ml-2 text-[12px]'>Follow</p>
                    </button>
                </div>
            </div> */}
        </div>
    )
}

export default ArtistListCard