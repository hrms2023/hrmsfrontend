'use client'
import HomePageCreativeBanner from '@/components/HomePageCreativeBanner';
import HomePageNavbar from '@/components/Navbar/HomePageNavbar';
import Title from '@/components/Title/Title';
import ProfileSidebar from '@/components/sidebar/ProfileSidebar';
import React, { useState } from 'react'
import EnquiryPageListView from './EnquiryPageListView';
const title = "Enquiries";
const breadCrums = "Home / My Account / Enquiries";
const page = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(true);
    return (
        <div>
            <HomePageNavbar />
            <HomePageCreativeBanner />
            <Title title={title} breadCrums={breadCrums} />
            <div className="flex flex-col lg:flex-row m-4">
                {isMenuOpen && (
                    <ProfileSidebar isMenuOpen={isMenuOpen} />
                )}
                <div className='w-full item-center justify-center'>
                    {/* <PaymentOptionsList /> */}
                    <EnquiryPageListView/>
                </div>
            </div>
        </div>
    )
}

export default page