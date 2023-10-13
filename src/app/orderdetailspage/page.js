import HomePageCreativeBanner from '@/components/HomePageCreativeBanner'
import HomePageNavbar from '@/components/Navbar/HomePageNavbar'
import React from 'react'
import OrderDetailsPage from './OrderDetailsPage'
import Title from '@/components/Title/Title'
const title = "My Orders";
const breadCrums = "Home / My Account / My Orders"
const page = () => {
    return (
        <div>
            <HomePageNavbar />
            <HomePageCreativeBanner />
            <Title title = {title} breadCrums = {breadCrums} /> 
            <OrderDetailsPage />
        </div>
    )
}

export default page