import React from 'react'
import Hamburger from '@/components/Hamburger'
import { BellIcon, ChatBubbleLeftEllipsisIcon, UserCircleIcon } from "@heroicons/react/24/solid"
import { ChevronDownIcon } from "@heroicons/react/24/outline"
import { logo } from '@/app/utils'
import { auth } from '@/firebaseConfig'
import { useRouter } from 'next/navigation'
export const Navbar = ({isMenuOpen, setIsMenuOpen, pageName, paramsId}) => {
    const router = useRouter()

    const logout = () => {
        auth.signOut();
        router.push('/')
    };
    console.log(paramsId === undefined, "../creative-Inn.png");
  return (
    <div>
        <div className="flex flex-row p-5 justify-between shadow-md">
                <div>
                <img src={`${paramsId === undefined ? "./creative-Inn.png" :  "../../creative-Inn.png"}`} width={220} height={400} className="p-2" alt="Picture of the author" />
                </div>
                <div className='flex flex-row item-center text-center mr-20'>
                    <Hamburger isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
                    <span className='text-[#C4302B] font-roboto font-semibold text-xl p-1'>{pageName}</span>
                </div>
                <input
                    type="text"
                    placeholder="Search"
                    className="w-1/3 pl-4 pr-4 rounded-3xl border border-gray-300 focus:outline-none focus:border-blue-500"
                />
                <div className='flex flex-row mr-10'>

                </div>
                <div className='flex flex-row justify-evenly'>
                    <BellIcon className='h-10 w-10 mr-7 border-2 border-gray-300 rounded-full p-2 hover:cursor-pointer text-[#FFC007]' />
                    <ChatBubbleLeftEllipsisIcon className='h-10 w-10 border-2 mr-7 border-gray-300 rounded-full p-2 hover:cursor-pointer text-[#F9644F]' />
                    <UserCircleIcon onClick={()=> logout()} className='h-10 w-10 mr-2 hover:cursor-pointer' about='User' />
                    <p className='font-roboto font-bold text-sm m-1 mt-2'>Jane</p>
                    <ChevronDownIcon className='h-4 w-4 m-1 hover:cursor-pointer mt-3' />
                </div>
            </div>
    </div>
  )
}
