'use client'
import ArtistListCard from '@/components/Cards/ArtistListCard'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import React from 'react'

const ArtistViewPage = () => {
  return (
    <div className='w-full'>
        <div className="mt-2 px-11 items-center justify-center">
            <div className="relative flex items-center border bg-white shadow-xl rounded-full">
                <input
                    className="w-full py-3 pl-8 pr-12 text-[12px] leading-normal rounded-full focus:outline-none"
                    type="text"
                    placeholder="Search by Artist name"
                />
                <div className="absolute right-0 pr-6">
                    <MagnifyingGlassIcon className="w-5 h-5 text-[12px] text-gray-500" />
                </div>
            </div>
        </div>
        <ArtistListCard />
    </div>
  )
}

export default ArtistViewPage