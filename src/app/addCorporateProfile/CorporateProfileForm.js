'use client'
import { CakeIcon, MegaphoneIcon, PhoneIcon, UserIcon, AtSymbolIcon, UserCircleIcon, MapPinIcon } from '@heroicons/react/24/solid'
import React, { useRef, useState } from 'react'
const CorporateProfileForm = () => {
    const [formData, setFormData] = useState({})
    const anniversaryRef = useRef();
    const dobRef = useRef();
    return (
        <div className="flex flex-row w-full mt-2 px-4">
            <div className='flex flex-col w-full items-center '>
                <div className='w-full shadow-lg border rounded-lg p-5'>
                    <div className='flex flex-row text-center items-center'>
                        <UserCircleIcon className="h-14 w-14" />
                        <p className='px-2 text-[12px] underline mt-1 hover:cursor-pointer'>Change Profile</p>
                        <p className='px-2 text-[12px] underline mt-1 hover:cursor-pointer'>Remove</p>
                    </div>
                    <div className='flex flex-row text-center justify-between'>
                        <div className="flex w-full items-center border-b border-gray-300 m-2 p-1">
                            <MapPinIcon className="w-4 h-4 text-[#ce3434]" />
                            <select
                                type="text"
                                className="w-full py-2 px-2 outline-none text-gray-500 text-[12px]"
                                onChange={(e) => handleChangeAddress(e)}
                                value={formData.addressType}
                                name="addressType"
                            >
                                <option value="Country" disabled selected>
                                    Country
                                </option>
                                <option value="Home">
                                    Home
                                </option>
                                <option value="Work">
                                    Work
                                </option>
                                <option value="Others">
                                    Others
                                </option>
                            </select>
                        </div>
                        <div className="flex w-full items-center border-b border-gray-300 ml-4 m-2 ">
                            <MapPinIcon className="w-4 h-4 text-[#ce3434]" />
                            <select
                                type="text"
                                className="w-full py-2 px-2 outline-none text-gray-500 text-[12px]"
                                onChange={(e) => handleChangeAddress(e)}
                                value={formData.addressType}
                                name="addressType"
                            >
                                <option value="State" disabled selected>
                                    State
                                </option>
                                <option value="Home">
                                    Home
                                </option>
                                <option value="Work">
                                    Work
                                </option>
                                <option value="Others">
                                    Others
                                </option>
                            </select>
                        </div>
                    </div>
                    <div className="flex w-full items-center border-b border-gray-300  m-2 mb-4">
                    <img src='./gst-red.png' className="w-4 h-4 text-[#ce3434]" />
                        <input
                            type="number"
                            className="w-full py-2 px-2 outline-none text-[12px]"
                            placeholder="Enter GST No."
                        />
                    </div>
                    {/* < */}

                    <div className="flex w-full items-center border-b border-gray-300  m-2">
                    <img src='./business-name-red.png' className="w-4 h-4 text-[#ce3434]" />
                        <input
                            type="text"
                            className="w-full py-2 px-2 outline-none text-[12px]"
                            placeholder="Enter your Legal Business Name"
                        />
                    </div>
                    <div className="flex w-full items-center border-b border-gray-300  m-2">
                        <MapPinIcon className="w-4 h-4 text-[#ce3434]" />
                        <input
                            type="text"
                            className="w-full py-2 px-2 outline-none text-[12px]"
                            placeholder="Enter your Street Address"
                        />
                    </div>
                    <div className='flex flex-row text-center justify-between'>

                        <div className="flex w-full items-center border-b border-gray-300 m-2">
                            <MapPinIcon className="w-4 h-4 text-[#ce3434]" />
                            <select
                                type="text"
                                className="w-full py-2 px-2 outline-none text-gray-500 text-[12px]"
                            >
                                <option value="Select City" disabled selected>
                                    Select City
                                </option>
                                <option value="Male">
                                    Male
                                </option>
                                <option value="Female">
                                    Female
                                </option>
                            </select>
                        </div>
                        <div className="flex w-full items-center border-b border-gray-300 ml-4 m-2">
                            <MapPinIcon className="w-4 h-4 text-[#ce3434]" />
                            <input
                                // ref={dobRef}
                                onChange={(e) => console.log(e.target.value)}
                                type='text'
                                className="w-full py-2 px-2 outline-none text-[12px]"
                                placeholder="Enter Pincode"
                            />
                        </div>

                    </div>

                    <div className='flex flex-row text-center justify-between'>
                        <div className="flex w-full items-center border-b border-gray-300 mr-4 m-2">
                            <UserIcon className="w-4 h-4 text-[#ce3434]" />
                            <input
                                type='text'
                                className="w-full py-2 px-2 outline-none text-[12px]"
                                placeholder="Enter your full name"
                            />
                        </div>

                        <div className="flex w-full items-center border-b border-gray-300 ml-4 m-2">
                            <MegaphoneIcon className="w-4 h-4 text-[#ce3434]" />
                            <input
                                type="text"
                                className="w-full py-2 px-2 outline-none text-[12px]"
                                placeholder="Enter your phone number"
                            />
                        </div>
                    </div>
                    <div className='flex flex-row text-center justify-between'>
                        <div className="flex w-full items-center border-b border-gray-300 mr-4 m-2">
                            <AtSymbolIcon className="w-4 h-4 text-[#ce3434]" />
                            <input
                                type='text'
                                className="w-full py-2 px-2 outline-none text-[12px]"
                                placeholder="Enter your Email address"
                            />
                        </div>

                        <div className="flex w-full items-center border-b border-gray-300 m-2 p-1">
                        <img src='./hear-red.png' className="w-4 h-4 text-[#ce3434]" />
                            <select
                                type="text"
                                className="w-full py-2 px-2 outline-none text-gray-500 text-[12px]"
                                onChange={(e) => handleChangeAddress(e)}
                                value={formData.addressType}
                                name="addressType"
                            >
                                <option value="Where did you hear about us?" disabled selected>
                                    Where did you hear about us?
                                </option>
                                <option value="Home">
                                    Home
                                </option>
                                <option value="Work">
                                    Work
                                </option>
                                <option value="Others">
                                    Others
                                </option>
                            </select>
                        </div>
                    </div>
                    <div className="flex flex-row w-full items-center text-center justify-between ">
                        <button>

                        </button>
                        <button className='text-[12px] bg-black h-10 w-24  text-gray-50 mt-2 px-2'>
                            Save
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CorporateProfileForm