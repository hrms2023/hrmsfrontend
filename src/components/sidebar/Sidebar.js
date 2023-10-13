import React, { useState } from 'react';
import { sidebarData } from "../../app/utils";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { useRouter } from 'next/navigation';


const Sidebar = ({ isMenuOpen, paramsId }) => {
    const router = useRouter()
    const [selectedMenuItem, setSelectedMenuItem] = useState(null);
    const artistId = "d595b660-c274-431c-92fe-54ce8494d7d0";
    const navigateToPage = (route) => {
        if(artistId !== ""){
            console.log(router);
            router.push(`${route}`)
            return
        }
        router.push(route)
    }

    const navigateCheck = (route) => {
        console.log(route);
        if(route){
            router.push(`${route}`)
        }
    }
    
    return (
        <div className=''>
            <div className={`flex h-screen ${isMenuOpen ? 'overflow-hidden' : ''}`}>
                <nav
                    className={`w-64 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-64'
                        } transition-transform duration-300 ease-in-out overflow-y-auto`}
                >
                    <div className="flex items-center justify-between p-4 flex-col">
                        <span className="text-black text-[12px] font-semibold ">Switch Location</span>
                    </div>
                    <div className={`p-4 ${isMenuOpen ? 'block' : 'hidden'}`}>
                        <ul className="space-y-2 text-gray-900">
                            {sidebarData.map((list, id) => (
                                <div
                                    key={id}
                                    className={`hover:cursor-pointer ${selectedMenuItem === id ? '' : ''}`}
                                    onClick={() => setSelectedMenuItem(id)}
                                >
                                    <div className='flex flex-row justify-between'>
                                        <li
                                         onClick={(()=> navigateCheck(list.route))}   className="flex flex-row items-center text-center cursor-pointer"
                                        >
                                            {list.icons === "" ? null : <img src={paramsId ? `../.${list.icons}` : list.icons} className='h-4 w-4' alt='img' />}
                                            <a href="#" className="block hover:text-gray-700 text-[12px] font-medium font-roboto ml-5">
                                                {list.name}
                                            </a>
                                        </li>
                                        {list.arrowIcons && <ChevronRightIcon className='h-4 w-4 justify-end hover:cursor-pointer' />}
                                    </div>
                                    <div className="border-b mt-1 p-1 mb-3 border-gray-400 w-full"></div>
                                    {list.arrowIcons && selectedMenuItem === id && (
                                        <ul  className="pl-6 m-3 ">
                                            {list.items.map((item, index) => (
                                                <li onClick={(()=> navigateToPage(item.route))} key={index} className="hover:text-gray-700 text-[12px] font-medium font-roboto">
                                                    <a href="#">{item.name}</a>
                                                    <div className="border-b mt-2 mb-2 p-1 border-gray-400 w-full"></div>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            ))}
                        </ul>
                        <div className='flex flex-col items-center text-center justify-center mt-10'>
                            <div className='flex flex-row'>
                               <p className='text-[12px]'>©</p>
                                <p className='text-[12px] ml-1'>2023</p>
                                <p className='text-[12px] font-semibold ml-1'>HRMS</p>
                            </div>
                            <div className='flex flex-row'>
                                <p className='text-[12px]'>All Rights Reserved</p>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Sidebar;
