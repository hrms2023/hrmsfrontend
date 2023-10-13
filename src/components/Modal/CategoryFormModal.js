'use client'
import { XMarkIcon } from '@heroicons/react/24/outline'
import React, { useEffect, useState } from 'react'
import SingleFileUpload from '../Inputs/SingleFileUpload'
import ModalInput from '../Inputs/ModalInput'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { AddCategory, updateCategory } from '@/api/CategoryApi'
import { FileTypeIcon } from '../Inputs/FileTypeIcon'
import { convertImageUrlToFile } from '@/app/utils'

const CategoryFormModal = ({ showModal, setShowModal, paramsValue }) => {
    const queryClient = useQueryClient();
    const AddMutation = useMutation(AddCategory);
    const updateMutation = useMutation(updateCategory)
    const [files, setFiles] = useState([])
    const [formData, setFormData] = useState({
        title: "",
    })
    const closeModal = () => {
        setShowModal(false)
    };

    const handleFileData = async (data) => {
        setFiles(data);
    };

    const handleChange = (fieldName, value) => {
        setFormData({
            ...formData,
            [fieldName]: value,
            // other fields...
        });
    };
    const fetchData = async () => {
        try {
            if (Object.keys(paramsValue).length !== 0) {
                console.log(paramsValue.image)
                // let imgFile = convertImageUrlToFile(paramsValue.image)
                // .then((file) => {
                //     console.log(file);
                // })
                // .catch((error) => {
                //     console.error(error);
                // });
                // debugger
                setFormData({
                    title: paramsValue.title
                })
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    useEffect(() => {
    }, [files])
    useEffect(() => {


        fetchData();
    }, [paramsValue]);
    const deleteFile = (index) => {
        const updatedFileData = [...files];
        updatedFileData.splice(index, 1);
        setFiles(updatedFileData);
    };


    const handleCreateCategory = async (e) => {
        e.preventDefault()
        let formValue;
        if (Object.keys(paramsValue).length !== 0) {
            if (files.length !== 0) {
                try {
                    const formFileData = new FormData();
                    formFileData.append('file', files[0]);
                    const response = await
                        fetch('http://localhost:8090/api/admin/category/image', {
                            method: 'POST',
                            body: formFileData,
                        });

                    if (response.ok) {
                        const data = await response.json();
                        const { link } = data.data; // Extract the 'link' value
                        formValue = {
                            ...formData,
                        
                            image: link
                        }
                    } else {
                        console.error('Error uploading file and calling API');
                    }
                   
                } catch (error) {
                    console.error('Error:', error);
                }
            }

            formValue = {
                ...formData,
                id: paramsValue.id,
                image: paramsValue.image
            }
            updateMutation.mutateAsync(formValue)
            queryClient.invalidateQueries('category');
            setShowModal(false)
        } else {
            if (files) {
                try {
                    const formFileData = new FormData();
                    formFileData.append('file', files[0]);
                    const response = await
                        fetch('http://localhost:8090/api/admin/category/image', {
                            method: 'POST',
                            body: formFileData,
                        });

                    if (response.ok) {
                        const data = await response.json();
                        const { link } = data.data; // Extract the 'link' value
                        formValue = {
                            ...formData,
                            image: link
                        }
                    } else {
                        console.error('Error uploading file and calling API');
                    }
                } catch (error) {
                    console.error('Error:', error);
                }
            }
            AddMutation.mutateAsync(formValue)
            queryClient.invalidateQueries('category');
            setShowModal(false)
        }


    }
    return (
        <>
            {showModal && (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-1/3 my-6 mx-auto max-w-3xl">

                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">

                                <div className="flex  items-center justify-between p-5 border-solid rounded-t">
                                    <p></p>
                                    <p className='text-[16px] font-semibold text-gray-600 ml-2'>Add Category</p>
                                    <XMarkIcon onClick={closeModal} className='h-4 w-4 hover:cursor-pointer' />
                                </div>
                                <div className="flex-row text-center items-center w-full">
                                    <ModalInput label={"Title :"} placeholder={""} type={"text"} value={formData.title} onChange={(value) => handleChange('title', value)} />
                                </div>
                                <div className="flex-row text-center items-center w-full">

                                    <SingleFileUpload label={"Upload Image:"} placeholder={""} type={"file"} onFileChange={handleFileData} />
                                    {files.length > 0 && (
                                        <div className='flex flex-row ml-32  mt-5'>
                                            {files.map((file, index) => (
                                                <div key={index} className="relative h-10 w-10 ml-2">
                                                    <div className="absolute top-0 right-0">
                                                        <XMarkIcon onClick={() => deleteFile(index)} className="w-4 h-4 font-bold hover:cursor-pointer text-red-600" />
                                                    </div>
                                                    <FileTypeIcon className="bg-[#dff3ff]" />
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                                <div className="flex-row text-center items-center w-full">
                                    <ModalInput label={"Commision:"} placeholder={""} type={"text"} value={formData.commision} onChange={(value) => handleChange('commision', value)} />
                                </div>
                                <div className="flex flex-col w-full items-center mt-10 justify-center p-4 border-t border-solid border-slate-200 rounded-b">

                                    <button
                                        className="text-white bg-black mt-2 uppercase w-full py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={(e) => handleCreateCategory(e)}
                                    >
                                        Add Category
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black">

                    </div>
                </>
            )}
        </>
    )
}

export default CategoryFormModal