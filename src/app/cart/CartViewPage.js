
import React from 'react'

const CartViewPage = () => {
  return (
    <div className='flex flex-row justify-between mt-6 px-10'>
      <div className='flex flex-col w-[68%] item-center justify-center'>
        <div className='bg-gray-50 w-full flex flex-row justify-between shadow-lg border rounded-lg px-5 mb-5'>
          <div className='flex flex-row items-center'>
            <div className='w-44'>
              <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt="" />
            </div>
            <div className='flex flex-col m-8'>
              <a className='text-gray-900 text-[16px] font-semibold mb-4 '>Gate over</a>
              <div className='flex flex-row text-center items-center'>
                <a className='text-gray-900 text-[12px] mb-4  font-normal underline hover:cursor-pointer'>Category,</a>
                <a className='text-gray-500 text-[12px] mb-4  font-normal px-1'>Prints</a>
              </div>
              <div className='flex flex-row text-center items-center'>
                <a className='text-[16px] font-semibold text-[#ce3434]'>₹36,400</a>
                <a className='text-gray-500 text-[12px] mb-1  font-normal px-1 line-through ml-1 mt-1'>₹45,500</a>
              </div>
            </div>
          </div>
          <div className='flex flex-col items-center text-center'>
            <div className="flex flex-row  mt-4">
              <div className="border border-gray-400 p-4 px-[23px] relative">
                <div className="hover:cursor-pointer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">-</div>

              </div>
              <div className="border border-gray-400 p-4 px-5 relative">
                <div className="hover:cursor-pointer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">1</div>

              </div>
              <div className="border border-gray-400 p-4 px-[22px] relative">

                <div className="hover:cursor-pointer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">+</div>
              </div>
            </div>
            <button className='flex items-center justify-evenly text-center flex-row bg-[#ce3434] p-3 mt-2 px-5 hover:cursor-pointer'>
              <p className='text-[12px] text-white'>Move to whishlist</p>
            </button>
            <button className='flex items-center justify-evenly text-center flex-row bg-black h-10 p-12 py-1.5 mt-2 hover:cursor-pointer'>
              <p className='text-[12px] text-white'>Remove</p>
            </button>
          </div>
        </div>
        <div className='bg-gray-50 w-full flex flex-row justify-between shadow-lg border rounded-lg px-5 mb-5'>
          <div className='flex flex-row items-center'>
            <div className='w-44'>
              <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt="" />
            </div>
            <div className='flex flex-col m-8'>
              <a className='text-gray-900 text-[16px] font-semibold mb-4 '>Gate over</a>
              <div className='flex flex-row text-center items-center'>
                <a className='text-gray-900 text-[12px] mb-4  font-normal underline hover:cursor-pointer'>Category,</a>
                <a className='text-gray-500 text-[12px] mb-4  font-normal px-1'>Prints</a>
              </div>
              <div className='flex flex-row text-center items-center'>
                <a className='text-[16px] font-semibold text-[#ce3434]'>₹36,400</a>
                <a className='text-gray-500 text-[12px] mb-1  font-normal px-1 line-through ml-1 mt-1'>₹45,500</a>
              </div>
            </div>
          </div>
          <div className='flex flex-col items-center text-center'>
            <div className="flex flex-row  mt-4">
              <div className="border border-gray-400 p-4 px-[23px] relative">
                <div className="hover:cursor-pointer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">-</div>

              </div>
              <div className="border border-gray-400 p-4 px-5 relative">
                <div className="hover:cursor-pointer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">1</div>

              </div>
              <div className="border border-gray-400 p-4 px-[22px] relative">

                <div className="hover:cursor-pointer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">+</div>
              </div>
            </div>
            <button className='flex items-center justify-evenly text-center flex-row bg-[#ce3434] p-3 mt-2 px-5 hover:cursor-pointer'>
              <p className='text-[12px] text-white'>Move to whishlist</p>
            </button>
            <button className='flex items-center justify-evenly text-center flex-row bg-black h-10 p-12 py-1.5 mt-2 hover:cursor-pointer'>
              <p className='text-[12px] text-white'>Remove</p>
            </button>
          </div>
        </div>
      </div>
      <div className='bg-gray-50 w-[30%] h-[30%] shadow-lg border rounded-lg p-0 '>
        <div className='flex flex-col px-5 p-1'>
          <div className='flex flex-row items-center text-center justify-between'>
            <a className='text-[12px] font-roboto mr-2 mt-3'>Cart Total</a>
            <a className='text-[12px] font-roboto mt-3'>₹81,886</a>
          </div>
          <div className='flex flex-row items-center text-center justify-between'>
            <a className='text-[12px] font-roboto mt-3'>Add: Shipping Charges</a>
            <a className='text-[12px] font-roboto mt-3'>₹600</a>
          </div>
          <div className='flex flex-row items-center text-center justify-between'>
            <a className='text-[12px] font-roboto font-semibold mr-2 mt-3'>Total</a>
            <a className='text-[12px] font-roboto font-semibold mt-3'>₹82,486</a>
          </div>
          <div className='flex flex-row items-center text-center justify-between'>
            <a className='text-[12px] font-roboto mr-2 mt-3'>Less: Coupon Promotion</a>
            <a className='text-[12px] font-roboto mt-3'>₹3,300</a>
          </div>

          <div className='flex flex-row items-center text-center justify-between'>
            <a className='text-[12px] text-[#ce3434] font-semibold font-roboto mr-2 mt-3'>Total Price</a>
            <a className='text-[12px] text-[#ce3434] font-semibold font-roboto mt-3'>₹85,786</a>
          </div>
          <button className='flex items-center justify-evenly text-center flex-row bg-black p-2 mt-4 mb-3 hover:cursor-pointer'>
            <p className='font-roboto text-white text-sm'>Pay Now</p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartViewPage