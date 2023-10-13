'use client'
import { Dropdown } from '@/components/Inputs/Dropdown'
import Input from '@/components/Inputs/Input'
import React, { useEffect, useState } from 'react'
import { gender, proofCard } from '../utils'
import File from '@/components/Inputs/File'
import { XMarkIcon } from '@heroicons/react/24/outline';
import { FileTypeIcon } from '@/components/Inputs/FileTypeIcon';
import { useMutation, useQuery } from '@tanstack/react-query'
import { updateArtist } from '@/api/api'
import AddOrUpdateModal from '@/components/Modal/AddOrUpdateModal'
import TickMark from '@/components/TickMark/TickMark'
import { fetchArtist } from './api'


const pageName = "Job Details"
const BasicInfoDetailsForm = ({ paramsID, userProfileImage }) => {
  const [action, setAction] = useState("created")
  const [showModal, setShowModal] = useState(false)
  const UpdateMutation = useMutation(updateArtist);
  const [uploadPANFile, setUploadPANFile] = useState([]);
  const [artistDetails, setArtistDetails] = useState([])
  const [formData, setFormData] = useState({
    id: "",
    EmployeeId: "",
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    workEmail: "",
    HomeEmail: "",
    anniversaryDate: "",
    // cancelCheque: "",
    // createdOn: 0,
    // updatedOn: 0,
    // isActive: 0,
    // isDelete: 0,
    // panImage: "",
    // addressProof: "",
    // otherDocument: "",
    // artistSlug: "",
    // facebook: "",
    // instagram: "",
    // pinterest: "",
    // youtube: "",
    // Add more fields as needed
  });

  const handleFileData = (data) => {
    setUploadPANFile(data);
  };
  const deleteFile = (index) => {
    const updatedFileData = [...uploadPANFile];
    updatedFileData.splice(index, 1);
    setUploadPANFile(updatedFileData);
  };

  const handleChange = (fieldName, value) => {
    setFormData({
      ...formData,
      [fieldName]: value,
      // other fields...
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      if (paramsID) {
        try {
          const data = await fetchArtist(paramsID);
          // Assuming the data structure matches your formData state, set the state here
        
          setFormData(data?.data)

          // You can also check the data in the console
          console.log('Fetched data:', data);
        } catch (error) {
          console.error('Error fetching artist data:', error);
        }
      }
    };

    fetchData(); // Call the fetchData function when the component mounts or paramsID changes

  }, [paramsID]);
  const mutation = useMutation(
    async (formData) => {

      const response = await fetch('http://localhost:8080/api/employeeBasicInfo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      return data;
    }
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (paramsID && artistDetails.length !== 0) {
      try {

        await UpdateMutation.mutateAsync(formData)
        setShowModal(true)
        setAction("udpated")
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        await mutation.mutateAsync(formData);
        setShowModal(true)
        setAction("created")
      } catch (error) {
      }
    }
  };
  return (
    <div className=''>
      <Input label={"Full Name :"} type={"text"} value={formData.firstName} onChange={(value) => handleChange('firstName', value)} />

      <Input label={"Mobile Number :"} placeholder={""} type={"text"} value={formData.lastName} onChange={(value) => handleChange('joiningDate', value)} />
      <Input label={"Email  :"} placeholder={""} type={"email"} value={formData.HomeEmail} onChange={(value) => handleChange('beneficdesignationiaryName', value)} />
      <Input label={"Email :"} placeholder={""} type={"email"} value={formData.workEmail} onChange={(value) => handleChange('jobOffered', value)} />
      <Input label={"Date of Birth :"} placeholder={""} type={"text"} value={formData.dob} onChange={(value) => handleChange('probationPeriod', value)} />
      <Input label={"Gender :"} placeholder={""} type={"text"} value={formData.gender} onChange={(value) => handleChange('probationPeriod', value)} />
      <Input label={"Anversy Date :"} placeholder={""} type={"date"} value={formData.anniversaryDate} onChange={(value) => handleChange('probationPeriod', value)} />
      {/* <Input label={"Date of Birth :"} placeholder={""} type={"date"} value={formData.dob} onChange={(value) => handleChange('dob', value)} />
      <Dropdown label={"Gender :"} list={gender} value={formData.artistGender} onChange={(value) => handleChange('artistGender', value)} /> */}
      {/* <div className='mt-14'>
        <span className='text-[16px] font-bold font-roboto'>Upload Documents</span>
      </div>
      <File label={"Upload PAN Card :"} placeholder={""} type={"file"} onFileChange={handleFileData} />
      {uploadPANFile.length > 0 && (
        <div key={1} className='flex flex-row ml-44 mb-5'>
          {uploadPANFile.map((file, index) => (
            <div key={index} className="relative h-10 w-10 ml-2">
              <div className="absolute top-0 right-0">
                <XMarkIcon onClick={() => deleteFile(index)} className="w-4 h-4 font-bold hover:cursor-pointer text-red-600" />
              </div>
              <FileTypeIcon />
            </div>
          ))}
        </div>
      )}
      <Dropdown label={"Select Address Proof :"} list={proofCard} value={formData.addressProof} onChange={(value) => handleChange('addressProof', value)} />
      <File label={"Upload Document :"} placeholder={""} type={"file"} onFileChange={handleFileData} /> */}
      {/* {fileData.length > 0 && (
        <div className='flex flex-row ml-44 '>
          {fileData.map((file, index) => (
            <div className="relative h-10 w-10 ml-2">
              <div className="absolute top-0 right-0">
                <XMarkIcon className="w-4 h-4 font-bold hover:cursor-pointer text-red-600" />
              </div>

              <FileTypeIcon className="bg-[#dff3ff]" />
            </div>
          ))}
        </div>

      )} */}
      {/* <div className='mt-14'>
        <span className='text-lg font-bold font-roboto'>Social Media</span>
      </div>
      <Input label={"Facebook :"} placeholder={""} type={"text"} value={formData.facebook} onChange={(value) => handleChange('facebook', value)} />
      <Input label={"Instagram :"} placeholder={""} type={"text"} value={formData.instagram} onChange={(value) => handleChange('instagram', value)} />
      <Input label={"Pinterest :"} placeholder={""} type={"text"} value={formData.pinterest} onChange={(value) => handleChange('pinterest', value)} />
      <Input label={"Youtube :"} placeholder={""} type={"text"} value={formData.youtube} onChange={(value) => handleChange('youtube', value)} /> */}
      <div className='relative'>
        <div className='flex flex-row items-center justify-end px-80 mt-14'>
          <button onClick={(e) => handleSubmit(e)} className='font-roboto text-white text-center text-[12px] bg-[#ce3434] h-12 w-1/3 mr-4'>Save</button>
          <button className='font-roboto text-white text-center text-[12px] bg-black h-12 w-1/3'>Submit for Approval</button>
        </div>
      </div>

      {showModal && <AddOrUpdateModal showModal={showModal} setShowModal={setShowModal} pageName={pageName} action={action} />}
    </div>
  )
}

export default BasicInfoDetailsForm