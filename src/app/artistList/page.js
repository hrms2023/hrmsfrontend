'use client'
import HomePageCreativeBanner from '@/components/HomePageCreativeBanner'
import HomePageNavbar from '@/components/Navbar/HomePageNavbar'
import React, { useState } from 'react'
import ArtistViewPage from './ArtistViewPage'
import ProfileSidebar from '@/components/sidebar/ProfileSidebar'
import Title from '@/components/Title/Title'
const title = "Artist List";
const breadCrums = "Home / My Account / Artist List"
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
                    <ArtistViewPage />
            </div>
      
    </div>
  )
}

export default page