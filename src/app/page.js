'use client'
import Carousel from "@/components/Carousel/Carousel";
import Category from "@/components/Category/Category";
import CollectionCarousel from "@/components/Carousel/CollectionsCarousel";
import HomePageNavbar from "@/components/Navbar/HomePageNavbar";
import HomePageCreativeBanner from "@/components/HomePageCreativeBanner";
import HomePageIcons from "@/components/HomePageIcons/HomePageIcons";
import Footers from "@/components/Footers/Footers";

export default function Home() {

  return (
    <div>
      <HomePageNavbar />
      <HomePageCreativeBanner />
      <div className="p-2">
        <Carousel />
      </div>
      <div className="px-10 flex flex-row text-center justify-between mt-5">
        <span className="text-lg font-semibold font-roboto">Shop by Category</span>
        <span className="text-sm [text-decoration:underline] font-medium font-roboto text-[#ce3434] ">Explore</span>
      </div>
      <div className="mb-5 mt-5">
        <Category />
      </div>
      <div className="flex flex-row text-center justify-between px-10">
        <span className="text-lg font-semibold font-roboto">Featured Collections</span>
        <span className="text-sm [text-decoration:underline] font-medium font-roboto text-[#ce3434] ">Explore</span>
      </div>
      <div className="mt-10">
        <CollectionCarousel />
      </div>
      <div className="p-5 mt-16 flex flex-row text-center justify-center">
        <span className="text-xl font-semibold font-roboto">Created With Love, Delivered With Joy</span>
      </div>
      <HomePageIcons />
      <div>
      <Footers />
      </div>
    </div>

  )
}
