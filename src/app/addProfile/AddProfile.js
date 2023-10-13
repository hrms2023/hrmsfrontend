'use client'
import { CakeIcon, MegaphoneIcon, PhoneIcon, UserIcon, AtSymbolIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import React, { useRef } from 'react'

const AddProfile = () => {
  const anniversaryRef = useRef();
  const dobRef =useRef();
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
            <div className="flex w-full items-center border-b border-gray-300 mr-4 m-2">
              <UserIcon className="w-4 h-4 text-[#ce3434]" />
              <input
                type="text"
                className="w-full py-2 px-2 outline-none text-[12px]"
                placeholder="Enter your First Name"
              />
            </div>
            <div className="flex w-full items-center border-b border-gray-300 ml-4 m-2">
              <UserIcon className="w-4 h-4 text-[#ce3434]" />
              <input
                type="text"
                className="w-full py-2 px-2 outline-none text-[12px]"
                placeholder="Enter your Last Name"
              />
            </div>
          </div>
          <div className="flex w-full items-center border-b border-gray-300  m-2 mb-4">
            <PhoneIcon className="w-4 h-4 text-[#ce3434]" />
            <input
              type="number"
              className="w-full py-2 px-2 outline-none text-[12px]"
              placeholder="Enter your Phone"
            />
          </div>
          {/* < */}

          <div className="flex w-full items-center border-b border-gray-300  m-2">
            <AtSymbolIcon className="w-4 h-4 text-[#ce3434]" />
            <input
              type="email"
              className="w-full py-2 px-2 outline-none text-[12px]"
              placeholder="Enter your Email address"
            />
          </div>
          <div className='flex flex-row text-center justify-between'>
            <div className="flex w-full items-center border-b border-gray-300 mr-4 m-2">
            <img src='./dob-red.png' className="w-4 h-4 text-[#ce3434]" />
              <input
                ref={dobRef}
                onChange={(e) => console.log(e.target.value)}
                onFocus={() => (dobRef.current.type = "date")}
                onBlur={() => (dobRef.current.type = "text")}
                className="w-full py-2 px-2 outline-none text-[12px]"
                placeholder="Enter your Date of birth"
              />
            </div>

            <div className="flex w-full items-center border-b border-gray-300 ml-4 m-2">
              <img src='./gender-red.png' className="w-4 h-4 text-[#ce3434]" />
              <select
                type="text"
                className="w-full py-2 px-2 outline-none text-gray-500 text-[12px]"
              >
                <option value="Select your Gender" disabled selected>
                  Select your Gender
                </option>
                <option value="Male">
                  Male
                </option>
                <option value="Female">
                  Female
                </option>
              </select>
            </div>
          </div>
          <div className='flex flex-row text-center justify-between'>
            <div className="flex w-full items-center border-b border-gray-300 mr-4 m-2">
              <img src='./anniversary-red.png' className="w-4 h-4 text-[#ce3434]" />
              <input
                ref={anniversaryRef}
                onChange={(e) => console.log(e.target.value)}
                onFocus={() => (anniversaryRef.current.type = "date")}
                onBlur={() => (anniversaryRef.current.type = "text")}
                className="w-full py-2 px-2 outline-none text-[12px]"
                placeholder="Enter your Anniversary date"
              />
            </div>

            <div className="flex w-full items-center border-b border-gray-300 ml-4 m-2">
              <MegaphoneIcon className="w-4 h-4 text-[#ce3434]" />
              <input
                type="text"
                className="w-full py-2 px-2 outline-none text-[12px]"
                placeholder="Where did you hear us about?"
              />
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

export default AddProfile