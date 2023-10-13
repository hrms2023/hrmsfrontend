'use client'
import HomePageCreativeBanner from '@/components/HomePageCreativeBanner'
import HomePageNavbar from '@/components/Navbar/HomePageNavbar'
import Title from '@/components/Title/Title'
import ProfileSidebar from '@/components/sidebar/ProfileSidebar'
import React, { useState } from 'react'
import ReviewPageList from './ReviewPageList'
const title = "Review";
const breadCrums = "Home / My Account / Review"
const page = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(true);
  return (
    <div>
            <HomePageNavbar />
            <HomePageCreativeBanner />
            <Title title = {title} breadCrums = {breadCrums} /> 
            <div className="flex flex-col lg:flex-row m-4">
                {isMenuOpen && (
                    <ProfileSidebar isMenuOpen={isMenuOpen} />
                )}
                <div className='w-full item-center justify-center'>
                        {/* <reviewPage /> */}
                        <div className='flex flex-row justify-end px-8'>
                        <p className='text-[12px] text-gray-500 font-semibold underline hover:cursor-pointer mr-2'>In Review</p> <p className='text-[12px] text-gray-500 font-semibold underline hover:cursor-pointer'>Published</p>
                        </div>
                <ReviewPageList />
                </div>
            </div>
        </div>
  )
}

export default page
