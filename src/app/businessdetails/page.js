'use client'
import { Navbar } from '@/components/Navbar/Navbar';
import Sidebar from '@/components/sidebar/Sidebar';
import React, { useState } from 'react'
import BusinessDetailsForm from './BusinessDetailsForm';
import ArtistProfile from '@/components/ArtistProfileView/ArtistProfile';
import Title from '@/components/Title/Title';
const title = "Business Details";
const breadCrums = "Home / My Account / Business Details"
const page = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(true);
    const logo = {
        change: "Change Logo",
        remove: "Remove Logo"
    }
    const pageName = "Business Details"
    return (
        <div className="">
            <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} pageName={pageName} />

            <div className="flex">
                {isMenuOpen && (
                    <Sidebar isMenuOpen={isMenuOpen} />
                )}
                  <div className='border-l-2 text-gray-300'></div>
                <div className={`flex-1 ml-6 p-1 ${isMenuOpen ? '' : 'w-full h-full absolute top-20 left-0'}`}>
                <Title title = {title} breadCrums = {breadCrums} /> 
                        <ArtistProfile value={logo}/>
                        <BusinessDetailsForm />  
                </div>  
            </div>
        </div>
    )
}

export default page