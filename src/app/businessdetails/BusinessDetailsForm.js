'use client'
import { Dropdown } from '@/components/Inputs/Dropdown'
import Input from '@/components/Inputs/Input'
import React, { useState } from 'react'
import { gender } from '../utils'
import File from '@/components/Inputs/File'
import { PlusIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { FileTypeIcon } from '@/components/Inputs/FileTypeIcon';


const BusinessDetailsForm = () => {
  const [fileData, setFileData] = useState([]);

  const handleFileData = (data) => {
    setFileData(data);
  };
  const deleteFile = (index) => {
    const updatedFileData = [...fileData];
    updatedFileData.splice(index, 1);
    setFileData(updatedFileData);
  };

  return (
    <div className=''>
      <Dropdown label={"Select Country :"} list={gender} />

      <Dropdown label={"Select State :"} list={gender} />
      <Input label={"Enter GSTIN :"} placeholder={""} type={"text"} />
      <Input label={"Enter Business PAN :"} placeholder={""} type={"text"} />
      <Dropdown label={"Select Business Type :"} list={gender} />
      <Input label={"Business Name :"} placeholder={""} type={"text"} />
      <Input label={"URL Slug :"} placeholder={""} type={"date"} />
      <Input label={"Mobile No. :"} placeholder={""} type={"number"} />
      <Input label={"Business Email :"} placeholder={""} type={"email"} />
      <Input label={"Opening Date :"} placeholder={""} type={"date"} />
      <div className='mt-14'>
        <span className='text-lg font-bold font-roboto'>Principal Place of Business</span>
      </div>
      <Input label={"Street Address :"} placeholder={""} type={"text"} />
      <div className='px-28 mb-5 flex flex-row items-center text-center'>
        <PlusIcon className='h-5 w-5 text-[#ce3434]' />
        <span className='text-sm text-gray-500 font-roboto underline hover:cursor-pointer ml-2'>Add Address line {`(optional)`}</span>
      </div>
      <Dropdown label={"City :"} list={gender} />
      <Dropdown label={"Pincode :"} list={gender} />
      <File label={"GST Certificate :"} placeholder={""} type={"file"} onFileChange={handleFileData} />
      {fileData.length > 0 && (
        <div className='flex flex-row ml-44 '>
          {fileData.map((file, index) => (
            <div key={index} className="relative h-10 w-10 ml-2">
              <div className="absolute top-0 right-0">
                <XMarkIcon onClick={() => deleteFile(index)} className="w-4 h-4 font-bold hover:cursor-pointer text-red-600" />
              </div>
              <FileTypeIcon />
            </div>
          ))}
        </div>
      )}
      <File label={"Business PAN Card :"} placeholder={""} type={"file"} onFileChange={handleFileData} />
      {fileData.length > 0 && (
        <div className='flex flex-row ml-44 '>
          {fileData.map((file, index) => (
            <div key={index} className="relative h-10 w-10 ml-2">
              <div className="absolute top-0 right-0">
                <XMarkIcon onClick={() => deleteFile(index)} className="w-4 h-4 font-bold hover:cursor-pointer text-red-600" />
              </div>
              <FileTypeIcon />
            </div>
          ))}
        </div>
      )}
      <div className='mt-14'>
        <span className='text-lg font-bold font-roboto'>Social Media</span>
      </div>
      <Input label={"Facebook :"} placeholder={""} type={"text"} />
      <Input label={"Instagram :"} placeholder={""} type={"text"} />
      <Input label={"Pinterest :"} placeholder={""} type={"text"} />
      <Input label={"Youtube :"} placeholder={""} type={"text"} />
      <div className='relative'>
        <div className='flex flex-row items-center justify-end px-80 mt-14'>
          <button className='font-roboto text-white text-center text-[12px] bg-[#ce3434] h-12 w-1/3 mr-4'>Save</button>
          <button className='font-roboto text-white text-center text-[12px] bg-black h-12 w-1/3'>Submit for Approval</button>
        </div>
      </div>
    </div>
  )
}

export default BusinessDetailsForm