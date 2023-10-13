'use client'
import ProductDetailsCard from '@/components/Cards/ProductDetailsCard'
import CollectionCarousel from '@/components/Carousel/CollectionsCarousel'
import HomePageCreativeBanner from '@/components/HomePageCreativeBanner'
import HomePageIcons from '@/components/HomePageIcons/HomePageIcons'
import HomePageNavbar from '@/components/Navbar/HomePageNavbar'
import DetailsPageShopCard from '@/components/ShopCards/DetailsPageShopCard'
import Title from '@/components/Title/Title'
import ExchangePolicies from '@/components/productReviews/ExchangePolicies'
import ProductInfo from '@/components/productReviews/ProductInfo'
import ProductReviews from '@/components/productReviews/ProductReviews'
import React, { useState } from 'react'
const title = "";
const breadCrums = "Home / My Account / Product Page"
const page = () => {
    const [details, setDetails] = useState(true)
    const [reviews, setReviews] = useState(false)
    const [polcies, setPolicies] = useState(false)

    const information = () => {
        setReviews(false)
        setPolicies(false)
        setDetails(true)
    }
    
    const productReviews = () => {
        setPolicies(false)
        setDetails(false)
        setReviews(true)
    }
    const polciesInfo = () => {
        setDetails(false)
        setReviews(false)
        setPolicies(true)
    }
    return (
        <div>
            <HomePageNavbar />
            <HomePageCreativeBanner />
            <Title title={title} breadCrums={breadCrums} />
            <div className='mt-6'>
                <ProductDetailsCard />
            </div>
            <div className="flex mt-4  border-gray-400 flex-row ml-12 w-1/3 ">
                <div onClick={information} className="border-r border-t border-b border-l border-gray-400 p-3 bg-slate-100">
                    <div className="hover:cursor-pointer font-normal text-[12px] text-gray-900">Product details</div>
                </div>
                <div onClick={polciesInfo} className="border-r border-t border-b border-gray-400 p-3 bg-slate-100">
                    <div className="hover:cursor-pointer font-normal text-[12px] text-gray-900">Exchanges and Refunds</div>
                </div>
                <div onClick={productReviews}  className="border-r border-t border-b border-gray-400 p-3 bg-slate-100">
                    <div className="hover:cursor-pointer font-normal text-[12px] text-gray-900">Reviews</div>
                </div>
            </div>
            <div className='flex flex-col mt-4'>
                {reviews && (<ProductReviews reviews={reviews} />)}
                {reviews && (<div className='border-b border-gray-300 mb-3 px-10 w-full'></div>)}
                {reviews && (<ProductReviews reviews={reviews} />)}
                {reviews && (<div className='border-b border-gray-300 mb-3 px-10 w-full'></div>)}
                {reviews && (<ProductReviews reviews={reviews} />)}
                {reviews && (<div className='border-b border-gray-300 mb-3 px-10 w-full'></div>)}
                {reviews && (<ProductReviews reviews={reviews} />)}
                {reviews && (<div className='border-b border-gray-300 mb-3 px-10 w-full'></div>)}
                {reviews && (<ProductReviews reviews={reviews} />)}
                {details && (<ProductInfo details={details} />)}
                {polcies && (<ExchangePolicies polcies = {polcies}/>) }
            </div>
            <p className='ml-12 font-semibold text-lg mt-10'>More form Artist</p>
            <div className="mt-10">
        <CollectionCarousel />
      </div>
            <div className="p-5 mt-10 mb-5 flex flex-row text-center justify-center">
                <span className="text-xl font-semibold font-roboto">Created With Love, Delivered With Joy</span>
            </div>
            <HomePageIcons />
        </div>
    )
}

export default page