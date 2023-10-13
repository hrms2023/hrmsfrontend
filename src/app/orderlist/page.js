import Filter from '@/components/Filter/Filter'
import HomePageCreativeBanner from '@/components/HomePageCreativeBanner'
import HomePageNavbar from '@/components/Navbar/HomePageNavbar'
import React from 'react'
import OrderListView from './OrderListView'
import Title from '@/components/Title/Title'
const title = "My Orders";
const breadCrums = "Home / My Account / My Orders"
const page = () => {
    return (
        <div>
            <div>
            <HomePageNavbar />
            <HomePageCreativeBanner />
            </div>
            <Title title = {title} breadCrums = {breadCrums} />
            <div className='flex px-9'>
                <Filter />
                <OrderListView />
            </div>
        </div>
    )
}

export default page