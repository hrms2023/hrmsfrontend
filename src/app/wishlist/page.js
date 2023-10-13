'use client'
import WishListCard from '@/components/Cards/WishListCard'
import HomePageCreativeBanner from '@/components/HomePageCreativeBanner'
import HomePageNavbar from '@/components/Navbar/HomePageNavbar'
import Title from '@/components/Title/Title'
import ProfileSidebar from '@/components/sidebar/ProfileSidebar'
import React, { useState } from 'react'
const title = "My Wishlist";
const breadCrums = "Home / My Account / My Wishlist"
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
                <div className='w-full'>
                <WishListCard />
                </div>
            </div>


        </div>
    )
}

export default page 