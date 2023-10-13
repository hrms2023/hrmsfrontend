import React from 'react'
import Stars from '../Stars/Stars'

const ReviewCard = () => {
    return (
        <div className='flex flex-col item-center justify-center mt-2 px-5'>
            <div className='bg-gray-50 w-full flex flex-row justify-between shadow-lg border rounded-lg p-5 mb-5'>
                <div className='flex flex-row w-full'>
                    <div className='w-44'>
                        <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-72 md:rounded-none md:rounded-l-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt="" />
                    </div>
                    <div className='flex flex-col w-full ml-4'>
                        <div className='flex flex-row text-center justify-between space-x-2'>
                        <a className='text-gray-900  text-[16px] font-semibold mt-1 mb-1'>Gate over</a>
                            <a className='text-gray-500 text-[12px] font-semibold'>13 Sept 2023, 4:30 PM</a>
                        </div>
                        <a className='text-gray-900  text-[14px] font-semibold'>Somnath Sarkar</a>
                        <div className='mt-2'>
                            <Stars />
                        </div>
                        <div className='mt-2'>
                            <a className='text-gray-500 text-[12px]'>First time in (RN) and YOU have to go! It’s the cutest little spot with amazing food. The (FN) is to die for. IT WAS FIRE!! The service we received was so amazing and we will definitely be back again. They made us feel welcomed and gave us an amazing experience.</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default ReviewCard
