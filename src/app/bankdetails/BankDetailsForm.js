import { Dropdown } from '@/components/Inputs/Dropdown';
import File from '@/components/Inputs/File';
import { FileTypeIcon } from '@/components/Inputs/FileTypeIcon';
import { XMarkIcon } from '@heroicons/react/24/outline';
import React, { useEffect, useState } from 'react'
import { gender } from '../utils';
import Input from '@/components/Inputs/Input';
import RadioButton from '@/components/Inputs/RadioButton';
import { useMutation, useQuery } from '@tanstack/react-query';
import { updateArtistBankDetails } from '@/api/api';

const BankDetailsForm = ({ singleBankDetails }) => {
    const updateMutation = useMutation(updateArtistBankDetails);
    const [fileData, setFileData] = useState([]);
    const [bankFormData, setBankFormData] = useState({
        accountType: "",
        bankName: "",
        beneficiaryName: "",
        ifscCode: "",
        accountNumber: "",
        artistId: "d595b660-c274-431c-92fe-54ce8494d7d0",
        uploadCancelCheque: ""
    })

    const handleFileData = async (data) => {
        setFileData(data);
        if (data) {
            try {
                const formFileData = new FormData();
                formFileData.append('file', data[0]);
                debugger
                const response = await
                    fetch('http://localhost:8090/api/artist-bank-details/cancel-cheque', {
                        method: 'POST',
                        body: formFileData,
                    });

                if (response.ok) {
                    const data = await response.json();
                    const { link } = data.data; // Extract the 'link' value

                    console.log('File uploaded and API called successfully');
                    console.log('Link:', link);

                    setBankFormData({
                        ...bankFormData,
                        uploadCancelCheque: link,
                    });

                } else {
                    console.error('Error uploading file and calling API');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        }
    };
    const deleteFile = (index) => {
        const updatedFileData = [...fileData];
        updatedFileData.splice(index, 1);
        setFileData(updatedFileData);
    };
    const handleChange = (fieldName, value) => {
        setBankFormData({
            ...bankFormData,
            [fieldName]: value,
            // other fields...
        });
    };

    const mutation = useMutation(
        async (bankFormData) => {

            const response = await fetch('http://localhost:8090/api/artist-bank-details/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(bankFormData),
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
        // if (singleBankDetails.artistId) {
        //     await updateMutation.mutateAsync(bankFormData)
        //     window.location.reload()
        // } else {
        //     try {
        //         await mutation.mutateAsync(bankFormData);
        //         window.location.reload()
        //         setFileData([]);
        //     } catch (error) {
        //     }
        // }
    };


    useEffect(() => {
        const fetchData = async () => {
            if (singleBankDetails.artistId) {
                setBankFormData({
                    accountType: singleBankDetails.accountType,
                    bankName: singleBankDetails.bankName,
                    beneficiaryName: singleBankDetails.beneficiaryName,
                    ifscCode: singleBankDetails.ifscCode,
                    accountNumber: singleBankDetails.accountNumber,
                    artistId: singleBankDetails.artistId,
                    uploadCancelCheque: singleBankDetails.uploadCancelCheque,
                    id: singleBankDetails.id
                });
            }
        };

        fetchData();
    }, [singleBankDetails]);

    return (
        <div className=''>
            <div className='m-5'>
                <span className='text-sm font-roboto '>Fields marked with {"("}<span className='text-red-700'>{`*`}</span>{")"} asterisk are mandatory.</span>
            </div>
            <RadioButton label={"Set as Default :"} placeholder={""} />
            <Dropdown label={"Account Type :"} list={gender} value={bankFormData.accountType} onChange={(value) => handleChange('accountType', value)} />
            <Input label={"Bank Name :"} placeholder={""} type={"text"} value={bankFormData.bankName} onChange={(value) => handleChange('bankName', value)} />
            <Input label={"Beneficiary Name :"} placeholder={""} type={"text"} value={bankFormData.beneficiaryName} onChange={(value) => handleChange('beneficiaryName', value)} />
            <Input label={"Account Number :"} placeholder={""} type={"text"} value={bankFormData.accountNumber} onChange={(value) => handleChange('accountNumber', value)} />
            <Input label={"IFSC Code :"} placeholder={""} type={"text"} value={bankFormData.ifscCode} onChange={(value) => handleChange('ifscCode', value)} />
            <File label={"Upload Cancel Cheque:"} placeholder={""} type={"file"} onFileChange={handleFileData} />
            {fileData.length > 0 && (
                <div className='flex flex-row ml-44 '>
                    {fileData.map((file, index) => (
                        <div key={index} className="relative h-10 w-10 ml-2">
                            <div className="absolute top-0 right-0">
                                <XMarkIcon onClick={() => deleteFile(index)} className="w-4 h-4 font-bold hover:cursor-pointer text-red-600" />
                            </div>
                            <FileTypeIcon className="bg-[#dff3ff]" />
                        </div>
                    ))}
                </div>
            )}
            <div className='relative'>
                <div className='flex flex-row items-center justify-end px-80 mt-14'>
                    <button onClick={(e) => handleSubmit(e)} className='font-roboto text-white text-center text-[12px] bg-[#ce3434] h-12 w-1/3 mr-4'>Save</button>
                    <button className='font-roboto text-white text-center text-[12px] bg-black h-12 w-1/3'>Submit for Approval</button>
                </div>
            </div>
        </div>
    )
}

export default BankDetailsForm