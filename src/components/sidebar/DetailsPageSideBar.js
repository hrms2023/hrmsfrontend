'use client'
import ProductView from '@/app/artistDetailsPage/ProductView';
import { profileSideBar } from '@/app/utils';
import { ChevronRightIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react'

const DetailsPageSideBar = ({ isMenuOpen }) => {
    const [selectedMenuItem, setSelectedMenuItem] = useState(null);
    return (
        <div>
            <div className="flex px-5">
                <nav className ="w-64 border rounded-lg border-gray-300 overflow-y-auto mt-2">
                    <div className="flex items-center justify-between p-4 flex-row">
                        <div className='flex flex-row items-center justify-center'>
                            <UserCircleIcon className='h-12 w-12 mt-2' />
                            <div className='flex flex-col  mt-2'>
                                <span className="text-black text-[16px] font-semibold ">Kunal Sarkar</span>
                                <span className="text-gray-500 text-[12px]">View Profile</span>
                            </div>
                        </div>
                        <div>
                            <ChevronRightIcon className='h-4 w-4 text-gray-500 ' />
                        </div>
                    </div>
                    <div className="flex items-center justify-between bg-[#C4302B] p-4 hover:cursor-pointer flex-row">
                        <div className='flex flex-row items-center justify-center'>
                            <div className='flex flex-col text-center items-center'>
                                <span className="text-white text-[12px] ">Go to Vendor Dashboard</span>
                            </div>
                        </div>
                        <div>
                            <ChevronRightIcon className='h-4 w-4 text-white' />
                        </div>
                    </div>
                    <div className={`p-4 ${isMenuOpen ? 'block' : 'hidden'}`}>
                        <ul className="space-y-2 text-gray-900">
                            {profileSideBar.map((list, id) => (
                                <div
                                    key={id}
                                    className={`hover:cursor-pointer ${selectedMenuItem === id ? '' : ''}`}
                                    onClick={() => setSelectedMenuItem(id)}
                                >
                                    <div className='flex flex-row justify-between'>
                                        <li
                                            className="flex flex-row items-center text-center cursor-pointer"
                                        >
                                            {list.icons}
                                            <a href="#" className="block hover:text-[#C4302B] text-[12px] font-medium font-roboto ml-5">
                                                {list.name}
                                            </a>
                                        </li>
                                    </div>
                                    {id !== profileSideBar.length - 1 && <div className="border-b mt-2 p-1 border-gray-400 w-full"></div>}

                                </div>
                            ))}
                        </ul>
                    </div>
                </nav>
            </div>
            <ProductView />
        </div>
    );
}

export default DetailsPageSideBar