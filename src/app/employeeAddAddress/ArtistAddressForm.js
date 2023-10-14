'use client'
import { Dropdown } from '@/components/Inputs/Dropdown'

import React, { useState } from 'react'
import { cities, country_list, gender, state } from '../utils'
import Input from '@/components/Inputs/Input'
import { PlusIcon } from '@heroicons/react/24/outline'

const ArtistAddressForm = () => {
  const [addAddress, setAddAddress] = useState(false)
  const [formData, setFormData] = useState({})
  return (
    <div className='mt-12'>
       <div className='flex flex-row ml-5 mb-4'>
            <label className='font-roboto text-[12px] font-semibold'>Is Default Address</label>
            <p className='text-sm font-roboto ml-2'>Yes</p>
            <input
                type="radio"
                className="ml-2 outline-none focus:ring-0 border-b border-black accent-[#c4302b] "
                placeholder="Yes"
                checked={formData.isBusiness === 1}
                    onChange={() => handleSelectionRadioChange("isBusiness", 1)}
            />
            <p className='text-sm font-roboto ml-2'>No</p>
            <input
                type="radio"
                className="ml-2 outline-none focus:ring-0 border-b border-black accent-[#c4302b]"
                placeholder="No"
                checked={formData.isBusiness === 0}
                onChange={() => handleSelectionRadioChange("isBusiness", 0)}
            />
        </div>
      <Dropdown label={"Address Type:"} list={country_list} value={formData.artistGender} onChange={(value) => handleChange('artistGender', value)} />
      <Dropdown label={"Select Country :"} list={country_list} value={formData.artistGender} onChange={(value) => handleChange('artistGender', value)} />
      <Dropdown label={"Select State :"} list={state} value={formData.artistGender} onChange={(value) => handleChange('artistGender', value)} />
      <Input label={"Enter Street Address :"} placeholder={""} type={"text"} value={formData.artistName} onChange={(value) => handleChange('artistName', value)} />
      <div className="w-1/5 ml-24">
        <div onClick={() => setAddAddress(true)} className='flex flex-row text-center items-center justify-center'>
          <PlusIcon className='h-4 w-4 text-[#C4302B] hover:cursor-pointer' />
          <a className="m-1 text-[12px] underline hover:cursor-pointer tracking-tight text-gray-900">Add Address Line {`(optional)`}</a>
        </div>

      </div>
      {addAddress && <Input label={"Enter Street Address 2:"} placeholder={""} type={"text"} value={formData.artistName} onChange={(value) => handleChange('artistName', value)} />}
      <Dropdown label={"Select City :"} list={cities} value={formData.artistGender} onChange={(value) => handleChange('artistGender', value)} />
      <Input label={"Enter Pincode :"} placeholder={""} type={"number"} value={formData.mobile} onChange={(value) => handleChange('mobile', value)} />
      <Input label={"Nearby Landmark:"} placeholder={""} type={"number"} value={formData.mobile} onChange={(value) => handleChange('mobile', value)} />
      <Input label={"Contact Person :"} placeholder={""} type={"email"} value={formData.email} onChange={(value) => handleChange('email', value)} />
      <Input label={"Alt Contact No. :"} placeholder={""} type={"number"} value={formData.dob} onChange={(value) => handleChange('contact', value)} />
    </div>
  )
}

export default ArtistAddressForm