'use client'
import Sidebar from '@/components/sidebar/Sidebar'
import React, { useState } from 'react'
import { Navbar } from '@/components/Navbar/Navbar'
import ArtistProfile from '@/components/ArtistProfileView/ArtistProfile'
import AccountProfileForm from './AccountProfileForm'
import Title from '@/components/Title/Title'
import JobDetailsForm from './JobDetailsForm'

const title = "Artist Profile";
const breadCrums = "Home / My Account / Artist Profile"
const page = () => {
    const [userProfileImage, setUserProfileImage] = useState({})
    const [isMenuOpen, setIsMenuOpen] = useState(true);
    const logo = {
        change: "Change Image",
        remove: "Remove Image"
    };
    const pageName = "Profile"
    
    return (
        <div className="">
            <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} pageName={pageName} />
            <div className="flex">
                {isMenuOpen && (
                    <Sidebar isMenuOpen={isMenuOpen} />
                )}
                <div className='border-l-2 text-gray-300'></div>
                <div className={`flex-1 ml-6 p-1 ${isMenuOpen ? '' : 'w-full h-full absolute  left-0'}`}>
                <Title title = {title} breadCrums = {breadCrums} /> 
                    <ArtistProfile value={logo}  setUserProfileImage = {setUserProfileImage} />
                    {/* <AccountProfileForm /> */}
                    <JobDetailsForm />

                </div>
            </div>
        </div>
    );
}

export default page