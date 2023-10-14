'use client';
import React, { useEffect, useState } from 'react';
import Input from '@/components/Inputs/Input';
import File from '@/components/Inputs/File';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { FileTypeIcon } from '@/components/Inputs/FileTypeIcon';
import { useMutation } from '@tanstack/react-query';
import { updateLastEmployment, fetchLastEmployment } from '@/api/api'; // Update with your API functions
import AddOrUpdateModal from '@/components/Modal/AddOrUpdateModal';
import { fetchArtist } from './api';

const pageName = "Last Employment Details";

const LastEmploymentForm = ({ paramsID }) => {
  const [action, setAction] = useState('created');
  const [showModal, setShowModal] = useState(false);
  const UpdateMutation = useMutation(updateLastEmployment);
  const [uploadFiles, setUploadFiles] = useState([]);
  const [lastEmployment, setLastEmployment] = useState({});
  const [formData, setFormData] = useState({
    id: '',
    employeeId: '',
    companyName: '',
    documentType: '',
    appointmentLetterFile: '',
    paySlipFile: '',
    // Add more fields as needed
  });

  const handleFileData = (data) => {
    setUploadFiles(data);
  };

  const deleteFile = (index) => {
    const updatedFileData = [...uploadFiles];
    updatedFileData.splice(index, 1);
    setUploadFiles(updatedFileData);
  };

  const handleChange = (fieldName, value) => {
    setFormData({
      ...formData,
      [fieldName]: value,
      // Add other fields...
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      if (paramsID) {
        try {
          const data = await fetchArtist(paramsID);
          // Assuming the data structure matches your formData state, set the state here
          setFormData(data?.data);
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
      const response = await fetch('http://localhost:8080/api/lastEmployment', {
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
    if (paramsID) {
      try {
        await UpdateMutation.mutateAsync(formData);
        setShowModal(true);
        setAction('updated');
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        await mutation.mutateAsync(formData);
        setShowModal(true);
        setAction('created');
      } catch (error) {
        console.error('Error creating last employment:', error);
      }
    }
  };

  return (
    <div className=''>
      {/* Add your input fields here with the corresponding label, type, and value attributes */}
      <Input label="Company Name:" placeholder="" type="text" value={formData?.companyName} onChange={(value) => handleChange('companyName', value)} />
      <Input label="Document Type:" placeholder="" type="text" value={formData?.documentType} onChange={(value) => handleChange('documentType', value)} />
      {/* Add more input fields as needed... */}
      <File label="Upload Appointment Letter:" placeholder="" type="file" onFileChange={handleFileData} />
      {uploadFiles.length > 0 && (
        <div className="flex flex-row ml-44 mb-5">
          {uploadFiles.map((file, index) => (
            <div key={index} className="relative h-10 w-10 ml-2">
              <div className="absolute top-0 right-0">
                <XMarkIcon onClick={() => deleteFile(index)} className="w-4 h-4 font-bold hover:cursor-pointer text-red-600" />
              </div>
              <FileTypeIcon />
            </div>
          ))}
        </div>
      )}
      <Input label="Upload Pay Slip:" placeholder="" type="file" onFileChange={handleFileData} />
      {/* Add more input fields for additional documents... */}
      <div className="relative">
        <div className="flex flex-row items-center justify-end px-80 mt-14">
          <button onClick={(e) => handleSubmit(e)} className="font-roboto text-white text-center text-[12px] bg-[#ce3434] h-12 w-1/3 mr-4">Save</button>
          <button className="font-roboto text-white text-center text-[12px] bg-black h-12 w-1/3">Submit for Approval</button>
        </div>
      </div>

      {showModal && <AddOrUpdateModal showModal={showModal} setShowModal={setShowModal} pageName={pageName} action={action} />}
    </div>
  );
};

export default LastEmploymentForm;
