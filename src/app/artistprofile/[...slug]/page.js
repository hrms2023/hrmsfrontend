'use client'
import { Navbar } from "@/components/Navbar/Navbar";
import Title from "@/components/Title/Title";
import Sidebar from "@/components/sidebar/Sidebar";
import { useState } from "react";
import AccountProfileForm from "../AccountProfileForm";
import ArtistProfile from "@/components/ArtistProfileView/ArtistProfile";
import JobDetailsForm from "../JobDetailsForm";

const title = "Artist Profile";
const breadCrums = "Home / My Account / Artist Profile"

const page = ({params}) => {
    const [userProfileImage, setUserProfileImage] = useState({})
    const [isMenuOpen, setIsMenuOpen] = useState(true);
    const logo = {
        change: "Change Image",
        remove: "Remove Image"
    };
    const pageName = "Profile"
    console.log(params);
    return (
        <div className="">
            <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} pageName={pageName} paramsId = {params.slug[0]} />
            <div className="flex">
                {isMenuOpen && (
                    <Sidebar isMenuOpen={isMenuOpen} paramsId = {params.slug[0]} />
                )}
                <div className='border-l-2 text-gray-300'></div>
                <div className={`flex-1 ml-6 p-1 ${isMenuOpen ? '' : 'w-full h-full absolute  left-0'}`}>
                <Title title = {title} breadCrums = {breadCrums} /> 
                    <ArtistProfile value={logo} setUserProfileImage = {setUserProfileImage} />
                   {params.slug[0] ? <AccountProfileForm paramsID = {params.slug[0]} userProfileImage = {userProfileImage} /> : <AccountProfileForm userProfileImage = {userProfileImage} />} 
                    
                    {/* <JobDetailsForm paramsID={params.slug[0]} /> */}
                </div>
            </div>
        </div>
    );
}


export default page;