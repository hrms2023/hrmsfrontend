'use client'
import HomePageCreativeBanner from '@/components/HomePageCreativeBanner'
import HomePageNavbar from '@/components/Navbar/HomePageNavbar'
import React, { useEffect, useState } from 'react'
import AddProfile from './AddProfile'
import ProfileSidebar from '@/components/sidebar/ProfileSidebar'
import Title from '@/components/Title/Title'
const title = "Add Profile";
const breadCrums = "Home / My Account / Add Profile"
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
                    <AddProfile />
            </div>
        </div>
    )
}

export default page