import HomePageCreativeBanner from '@/components/HomePageCreativeBanner'
import HomePageNavbar from '@/components/Navbar/HomePageNavbar'
import React from 'react'
import CartViewPage from './CartViewPage'
import Title from '@/components/Title/Title';
const title = "Cart";
const breadCrums = "Home / My Account / Cart"
const page = () => {
    return (
        <div>
            <HomePageNavbar />
            <HomePageCreativeBanner />
            <Title title = {title} breadCrums = {breadCrums} />
           
            <CartViewPage />
        </div>
    )
}

export default page