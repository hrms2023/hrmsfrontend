'use client'
import DetailsPageShopListView from '@/components/ShopCards/DetailsPageShopListView';
import ShopCards from '@/components/ShopCards/ShopCards';
import { ChevronUpIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon, EyeIcon, MapPinIcon } from '@heroicons/react/24/solid'
import React, { useState } from 'react'
import ProductView from './ProductView';

const DetailsPage = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [tableView, setTableView] = useState(false)
    const toggleExpand = () => {
        setIsExpanded(prev => !prev);
    }

    return (
        <div className='flex flex-col item-center justify-center px-5 mt-2'>
            <div className='bg-gray-50 w-full flex flex-row justify-between shadow-lg border rounded-lg p-5 mb-5'>

                <div className='flex flex-row items-center'>
                    <img class="object-cover rounded-t-lg h-32 w-32 md:rounded-none md:rounded-l-lg" src="./profile.png" alt="" />
                    <div className='flex flex-col m-8'>
                        <a className='text-gray-900 text-[16px] font-semibold mb-2'>Ayaan Ejaz</a>

                        <div className='flex flex-row text-center items-center mb-1'>
                            <MapPinIcon className='h-4 w-4 text-gray-500 mr-1' />
                            <a className='text-gray-500 text-[12px] font-normal '>Kolkata,</a>
                            <a className='text-gray-500 text-[12px] font-normal px-1'>India</a>
                        </div>
                        <div className='flex flex-row text-center items-center'>
                            <a className='text-gray-500 text-[12px] font-normal mr-2'>53 Artworks</a>
                            <div className="border-l border-gray-300 h-3"></div>
                            <a className='text-gray-500 text-[12px]  font-normal ml-2'>7 Followers</a>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col justify-evenly'>

                    <button className='flex items-center justify-center text-center flex-row bg-[#ce3434] p-2 hover:cursor-pointer'>
                        <img src='https://s3-alpha-sig.figma.com/img/9466/8de2/34bb61dd07244fba11237b12d0b32ec6?Expires=1694995200&Signature=oV-gF54YnokXn1bQh5F4PVHVQhxOYEL1T-GyJYf1r2v6LhvWKn-rp8vouGKIceyoIagpxICku3Q6rHKotfulPjPJcHl56A9~RhO0Q1timfoIPsQRwJdDZ--1q8WY3oQdeZvTgD2KO5FdaYGw8i8B~L0JpPl~RSOVBCDu0qiNTFjvAeieweaxJiuQ1cnF03XVAKtZgMqfSSfuNqk9Efnlj~ODEPeJcRE05TgzGE9v9FisO~dBUIv440RZeVQEpyrOtFQ7RHhUXjyaE48eptyAX~lyrIT-2~KM~KcCLq6-bkM6XbnkV4wtbwMALGlYMd5qU40w4l5bM4gzF0AAh18fKg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' className='h-4 w-4 text-white' />
                        <p className='font-roboto text-white ml-2 text-[12px]'>Following</p>
                    </button>
                </div>
            </div>
            <div className='bg-gray-50 w-full flex flex-col justify-between shadow-lg border rounded-lg p-5 mb-5'>
                <p className='font-robot font-semibold text-[16px]'>Artist Bio</p>
                <div className='relative overflow-hidden'>
                    <div className={` mt-2 ${isExpanded ? 'max-h-full' : 'max-h-16'} transition-max-h`}>
                        <p className='text-gray-500 font-roboto text-[12px]'> Sagittis vitae et leo duis ut diam quam. Iaculis urna id volutpat lacus laoreet non curabitur. Sed lectus vestibulum mattis ullamcorper velit sed. Nunc faucibus a pellentesque sit. Scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam.</p>
                        <p className='text-gray-500 font-roboto text-[12px]'> Sagittis vitae et leo duis ut diam quam. Iaculis urna id volutpat lacus laoreet non curabitur. Sed lectus vestibulum mattis ullamcorper velit sed. Nunc faucibus a pellentesque sit. Scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam.</p>
                        <p className='font-robot font-semibold text-[16px] mt-5'>About Stores</p>
                        <p className='text-gray-500 font-roboto text-[12px] mt-2'> These printable reading passages can be used in classrooms or at home to help students improve their reading skills. Each reading passage comes with word lists that include word meanings along with details such as reading time, rating, word count, sentence count, etc. Educators and parents can use the Lumos StepUp platform to assign these reading exercises to students and assess their progress. Students can also take advantage of the additional learning resources tied to the learning standard. These supplemental skill development resources include reading task worksheets, questions, vocabulary quizzes, videos, and more.</p>
                        <p className='font-robot font-semibold text-[16px] mt-5'>Academics</p>
                        <p className='text-gray-500 font-roboto text-[12px] mt-2'> These printable reading passages can be used in classrooms or at home to help students improve their reading skills. Each reading passage comes with word lists that include word meanings along with details such as reading time, rating, word count, sentence count, etc. Educators and parents can use the Lumos StepUp platform to assign these reading exercises to students and assess their progress. Students can also take advantage of the additional learning resources tied to the learning standard. These supplemental skill development resources include reading task worksheets, questions, vocabulary quizzes, videos, and more.</p>
                        <ul className="list-disc list-inside mt-2">
                            <li className='text-[12px] font-semibold text-gray-500 mt-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            <li className='text-[12px] font-semibold text-gray-500 mt-1'>Proin auctor libero in leo lacinia, in venenatis augue venenatis.</li>
                            <li className='text-[12px] font-semibold text-gray-500 mt-1'>Fusce consectetur felis ut justo aliquet, nec euismod nulla convallis.</li>
                            <li className='text-[12px] font-semibold text-gray-500 mt-1'>Nullam vitae arcu eu urna vehicula dictum ac vel massa.</li>
                            <li className='text-[12px] font-semibold text-gray-500 mt-1'>Vestibulum tempus ligula eu augue finibus, eu consectetur massa eleifend.</li>
                        </ul>
                        <p className='font-robot font-semibold text-[16px] mt-5'>Exhibitions</p>
                        <p className='text-gray-500 font-roboto text-[12px] mt-2'> These printable reading passages can be used in classrooms or at home to help students improve their reading skills. Each reading passage comes with word lists that include word meanings along with details such as reading time, rating, word count, sentence count, etc. Educators and parents can use the Lumos StepUp platform to assign these reading exercises to students and assess their progress. Students can also take advantage of the additional learning resources tied to the learning standard. These supplemental skill development resources include reading task worksheets, questions, vocabulary quizzes, videos, and more.</p>
                        <ul className="list-disc list-inside mt-2">
                            <li className='text-[12px] font-semibold text-gray-500 mt-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            <li className='text-[12px] font-semibold text-gray-500 mt-1'>Proin auctor libero in leo lacinia, in venenatis augue venenatis.</li>
                            <li className='text-[12px] font-semibold text-gray-500 mt-1'>Fusce consectetur felis ut justo aliquet, nec euismod nulla convallis.</li>
                            <li className='text-[12px] font-semibold text-gray-500 mt-1'>Nullam vitae arcu eu urna vehicula dictum ac vel massa.</li>
                            <li className='text-[12px] font-semibold text-gray-500 mt-1'>Vestibulum tempus ligula eu augue finibus, eu consectetur massa eleifend.</li>
                        </ul>
                    </div>
                    {isExpanded || (
                        <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-b from-transparent to-white h-16 pointer-events-none'></div>
                    )}
                </div>
                {isExpanded ? (
                    <div className='flex text-center items-center justify-center mt-5'>
                        <ChevronUpIcon className='h-5 w-5 text-gray-500 hover:cursor-pointer' onClick={toggleExpand} />
                    </div>
                ) : (
                    <div className='flex text-center items-center justify-center mt-5'>
                        <ChevronDownIcon className='h-5 w-5 text-gray-500 hover:cursor-pointer' onClick={toggleExpand} />
                    </div>
                )}
            </div>
            {tableView ? <ShopCards tableView={tableView} setTableView={setTableView} /> : <DetailsPageShopListView tableView={tableView} setTableView={setTableView} />}
        </div>
    )
}

export default DetailsPage
