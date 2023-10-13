'use client'
import HomePageCreativeBanner from '@/components/HomePageCreativeBanner'
import HomePageNavbar from '@/components/Navbar/HomePageNavbar'
import React, { useEffect, useState } from 'react';
import ProfileSidebar from '@/components/sidebar/ProfileSidebar'
import Title from '@/components/Title/Title'
import CorporateProfileForm from './CorporateProfileForm'
const title = "Corporate Profile";
const breadCrums = "Home / My Account / Corporate Profile"
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
                    <CorporateProfileForm />
            </div>
        </div>
    )
}

export default page