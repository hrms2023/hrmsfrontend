'use client'
import { Dropdown } from '@/components/Inputs/Dropdown'
import Input from '@/components/Inputs/Input'
import React, { useEffect, useState } from 'react'
import { gender, proofCard } from '../utils'
import File from '@/components/Inputs/File'
import { XMarkIcon } from '@heroicons/react/24/outline';
import { FileTypeIcon } from '@/components/Inputs/FileTypeIcon';
import { useMutation, useQuery } from '@tanstack/react-query'
import { fetchArtist, updateArtist } from '@/api/api'
import AddOrUpdateModal from '@/components/Modal/AddOrUpdateModal'
import TickMark from '@/components/TickMark/TickMark'


const pageName = "Artist profile"
const AccountProfileForm = ({ paramsID, userProfileImage }) => {
  const [action, setAction] = useState("created")
  const [showModal, setShowModal] = useState(false)
  const UpdateMutation = useMutation(updateArtist);
  const [uploadPANFile, setUploadPANFile] = useState([]);
  const [artistDetails, setArtistDetails] = useState([])
  const [formData, setFormData] = useState({
    id: "",
    employeeID: "",
    bankName: "",
    branchName: "",
    beneficiaryName: "",
    accountNumber: "",
    ifscCode: "",
    cancelCheque: "",
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
  console.log(paramsID);
  const handleFileData = (data) => {
    setUploadPANFile(data);
  };
console.log(paramsID)
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
 console.log(paramsID)
  useEffect(() => {
    const fetchBankDetails = async () => {
      if (!paramsID) {
        try {
          const response = await fetch(`http://localhost:8080/api/bankDetails/${paramsID}`, {
            method: 'GET', // Use the GET method to fetch data
          });

          if (!response.ok) {
            // Handle error here, e.g., show an error message
            console.error('Failed to fetch bank details');
            return;
          }

          const data = await response.json();

          
          // Update the form fields with the retrieved data
          setFormData({
            id: data?.id || "",
            employeeID: data?.employeeID || "",
            bankName: data?.bankName || "",
            branchName: data?.branchName || "",
            beneficiaryName: data?.beneficiaryName || "",
            accountNumber: data?.accountNumber || "",
            ifscCode: data?.ifscCode || "",
            cancelCheque: data?.cancelCheque || "",
            // other form fields...
          });
        } catch (error) {
          console.error('Error fetching bank details:', error);
        }
      }
    };

    // Call the fetchBankDetails function when the component mounts
    fetchBankDetails();
  }, [paramsID]);

  useEffect(async () => {
    if (paramsID) {
      const fetchArtist = async (paramsID) => {
        try {
          const response = await fetch(`http://localhost:8080/api/bankDetails/${paramsID}`);
          const data = await response.json();
          console.log("band", data)
          return data;
        } catch (error) {
          throw error;
        }
      };

      try {
        const data = await fetchArtist(paramsID); // await here
        console.log(data.data);
        setArtistDetails(data?.data);
        // console.log(artistDetails);
        // setFormData(data?.data)
    
      } catch (error) {
        console.error('Error fetching artist data:', error);
      }
    }
  }, []);
  const mutation = useMutation(
    async (formData) => {

      const response = await fetch('http://localhost:8080/api/bankDetails', {
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
<Input
  label={"Bank Name :"}
  placeholder={""}
  type={"text"}
  value={formData.bankName || artistDetails?.bankName}
  onChange={(value) => handleChange('bankName', value)}
/>

<Input
  label={"Branch Name :"}
  placeholder={""}
  type={"text"}
  value={formData.branchName || artistDetails?.branchName}
  onChange={(value) => handleChange('branchName', value)}
/>

<Input
  label={"Beneficiary Name :"}
  placeholder={""}
  type={"text"}
  value={formData.beneficiaryName || artistDetails?.beneficiaryName}
  onChange={(value) => handleChange('beneficiaryName', value)}
/>

<Input
  label={"Account Number :"}
  placeholder={""}
  type={"number"}
  value={formData.accountNumber || artistDetails?.accountNumber}
  onChange={(value) => handleChange('accountNumber', value)}
/>

<Input
  label={"IFSC Code :"}
  placeholder={""}
  type={"email"}
  value={formData.ifscCode || artistDetails?.ifscCode}
  onChange={(value) => handleChange('ifscCode', value)}
/>

      <Dropdown label={"Gender :"} list={gender} value={formData.artistGender} onChange={(value) => handleChange('artistGender', value)} /> 
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

export default AccountProfileForm