'use client'

import React from 'react'
import CheckoutPage from './CheckoutPage'
import HomePageNavbar from '@/components/Navbar/HomePageNavbar'
import HomePageCreativeBanner from '@/components/HomePageCreativeBanner'
import Title from '@/components/Title/Title'
const title = "Checkout Page";
const breadCrums = "Home / My Account / Checkout Page"
const page = () => {
    return (
        <div>
            <HomePageNavbar />
            <HomePageCreativeBanner />
            <Title title = {title} breadCrums = {breadCrums} />
            <CheckoutPage />
        </div>
    )
}

export default page