'use client'
import HomePageCreativeBanner from '@/components/HomePageCreativeBanner'
import HomePageNavbar from '@/components/Navbar/HomePageNavbar'
import React, { useState } from 'react'
import DetailsPage from './DetailsPage';
import Title from '@/components/Title/Title'
import DetailsPageSideBar from '@/components/sidebar/DetailsPageSideBar'
const title = "Artist Details Page";
const breadCrums = "Home / My Account / Artist Details Page"
const page = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(true);
    return (
        <div className=' '>
            <HomePageNavbar />
            <HomePageCreativeBanner />
            <Title title = {title} breadCrums = {breadCrums} /> 
            <div className="flex flex-col lg:flex-row m-4">
                {isMenuOpen && (
                    <DetailsPageSideBar isMenuOpen={isMenuOpen} />
                )}
                   <DetailsPage />
            </div>
            
        </div>
    )
}

export default page