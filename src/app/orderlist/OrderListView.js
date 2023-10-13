import OrderListCard from '@/components/Cards/OrderListCard'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import React from 'react'

const OrderListView = () => {
    return (
        <div className="mt-6 items-center justify-center">
            <div className="relative flex items-center border bg-white shadow-xl rounded-full">
                <input
                    className="w-[1000px] py-3 pl-8 pr-12 leading-normal text-[12px] rounded-full focus:outline-none"
                    type="text"
                    placeholder="Search..."
                />
                <div className="absolute right-0 pr-6">
                    <MagnifyingGlassIcon className="w-5 h-5 text-gray-500" />
                </div>
            </div>
            <OrderListCard />
        </div>
    )
}

export default OrderListView