'use client'
import HomePageCreativeBanner from '@/components/HomePageCreativeBanner';
import HomePageNavbar from '@/components/Navbar/HomePageNavbar';
import Title from '@/components/Title/Title';
import React, { useState } from 'react'
import PaymentOptionsList from './PaymentOptionsList';
import ProfileSidebar from '@/components/sidebar/ProfileSidebar';
const title = "Payment Page";
const breadCrums = "Home / My Account / Payment Page";
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
                <PaymentOptionsList />
                </div>
            </div>
        </div>
    )
}

export default page