import { Icons } from '@/app/utils'
import React from 'react'

const HomePageIcons = () => {
    return (
        <div>
            <div className="flex flex-row text-center justify-around">
                <div className="flex flex-col items-center text-center justify-around ">
                    <img src="/delivery-red.png" className="h-14 w-14 -mt-2 m-1" />
                    <p className="text-sm font-bold font-inter">Quick Delivery</p>
                    <p className="text-sm font-semibold font-inter">Aliquet nec ullamcorper sit amet</p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <img src="/safe-pay-red.png" className="h-10 w-10 m-1" />
                    <p className="text-sm font-bold font-inter">Easy to pay</p>
                    <p className="text-sm font-semibold font-inter">Aliquet nec ullamcorper sit amet</p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <img src="/safe-checkout-red.png" className="h-10 w-10 m-1" />
                    <p className="text-sm font-bold font-inter">Secured Checkout</p>
                    <p className="text-sm font-semibold font-inter">Aliquet nec ullamcorper sit amet</p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <img src="/license-red.png" className="h-10 w-10 m-1" />
                    <p className="text-sm font-bold font-inter">Licensed Products</p>
                    <p className="text-sm font-semibold font-inter">Aliquet nec ullamcorper sit amet</p>
                </div>
            </div>
        </div>
    )
}

export default HomePageIcons