'use client'
import { BellIcon, CurrencyRupeeIcon, LanguageIcon, ShareIcon } from '@heroicons/react/24/outline'
import { CheckIcon } from '@heroicons/react/24/solid'
import { useRouter } from 'next/navigation'
import React from 'react'

const HomePageNavbar = () => {
  const router = useRouter();
  return (
    <div>
      <nav className="border-gray-200 hidden sm:block bg-black px-11">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1">
          <a className="flex items-center">
            <span className="self-center text-[12px] font-medium font-roboto text-white ">EXTRA 10% OFF ON FIRST ORDER</span>
          </a>
          <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div className="hidden  w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0   rounded-lg  md:flex-row md:space-x-8">
              <li onClick={()=> router.push('/login')} className="flex flex-row text-center items-center hover:cursor-pointer">
                <CheckIcon className="h-4 w-4 text-white" />
                <a className="block py-2 pl-1 pr-4 text-white text-[12px] font-roboto" aria-current="page">Sell your artwork</a>
              </li>
              <li className="flex flex-row text-center items-center hover:cursor-pointer">
                <ShareIcon className="h-4 w-4 text-white" />
                <a className="block py-2 pl-1 pr-4 text-white text-[12px] font-roboto" aria-current="page">Refer a Friend</a>
              </li>
              <li className="flex flex-row text-center items-center hover:cursor-pointer">
                <CurrencyRupeeIcon className="h-4 w-4 text-white" />
                <a className="block py-2 pl-1 pr-4 text-white text-[12px] font-roboto">Change Currencies</a>
              </li>
              <li className="flex flex-row text-center items-center hover:cursor-pointer">
                <LanguageIcon className="h-4 w-4 text-white" />
                <a className="block py-2 pl-1  text-white text-[12px] font-roboto">Change Language</a>
              </li>
              <li className="flex flex-row text-center items-center hover:cursor-pointer">
                <BellIcon className="h-4 w-4 text-white" />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default HomePageNavbar