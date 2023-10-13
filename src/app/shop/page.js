'use client'

import Filter from '@/components/Filter/Filter'
import HomePageCreativeBanner from '@/components/HomePageCreativeBanner'
import HomePageNavbar from '@/components/Navbar/HomePageNavbar'
import React, { useState } from 'react'
import ShopCards from '@/components/ShopCards/ShopCards'
import HomePageIcons from '@/components/HomePageIcons/HomePageIcons'
import DetailsPageShopListView from '@/components/ShopCards/DetailsPageShopListView'
import ShopCarousel from '@/components/Carousel/ShopCarousel'
import Title from '@/components/Title/Title'
const title = "Shop";
const breadCrums = "Home / My Account / Shop"
const page = () => {
    const [tableView, setTableView] = useState(true)
    return (
        <div>
            <HomePageNavbar />
            <HomePageCreativeBanner />
            <Title title = {title} breadCrums = {breadCrums} />
            <div className="px-12 mt-6">
                <ShopCarousel />
            </div>
            <div className='flex m-8'>
                <Filter />
                {tableView ? <ShopCards tableView = {tableView} setTableView = {setTableView} />:  <DetailsPageShopListView tableView = {tableView} setTableView = {setTableView} />}
               

                {/* < */}

            </div>
            <div className="p-5 mt-5 flex flex-row text-center justify-center">
                <span className="text-xl font-semibold font-roboto">Created With Love, Delivered With Joy</span>
            </div>
            <HomePageIcons />

        </div>
    )
}

export default page