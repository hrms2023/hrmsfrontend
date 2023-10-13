'use client'
import { Navbar } from '@/components/Navbar/Navbar'
import Sidebar from '@/components/sidebar/Sidebar'
import React, { useMemo, useState } from 'react'

import Title from '@/components/Title/Title'
import AdminPanelSidebar from '@/components/sidebar/AdminPanelSidebar'
import { useQuery } from '@tanstack/react-query';
import { fetchCategories } from '@/api/CategoryApi'
import Table from '@/components/Table/Table'
import { PencilIcon, PlusIcon } from '@heroicons/react/24/solid'
import CategoryFormModal from '@/components/Modal/CategoryFormModal'

const title = "Categories";
const breadCrums = "Home / My Account / Categories"
const page = () => {
    const [showModal, setShowModal] = useState(false)
    const [formData, setFormData] = useState({})
    
    const [isMenuOpen, setIsMenuOpen] = useState(true);
    const pageName = "Categories";
    const columns = useMemo(
        () => [
            {
                Header: "Categories Image",

                accessor: "image",
                Cell: ({ value }) => <img src={value} alt="Category" className='rounded-md h-10 w-10 flex flex-row  ml-20' />,

            },
            {
                Header: "Title",
                accessor: "title",
            },
            {
                Header: "Created At",
                accessor: "createdOn",
                // Cell: ,
            },
            {
                Header: "Update At",
                accessor: "updatedOn",
            },
            {
                Header: "Actions",
                Cell: ({ row }) => (
                    <span className='font-roboto flex flex-row text-white text-center text-[12px]  bg-[#ce3434] p-2 hover:cursor-pointer' onClick={(value) => handleEdit(row.original)}>
                    <PencilIcon className="h-4 w-4 mr-5" />
                    <p className="">Edit</p>
                  </span>
                ),
            },
        ],
        []
    );

    const handleEdit = (value) => {
        console.log(value)
        setFormData(value)
        setShowModal(true)
    }
    const { data: categoriesList } = useQuery(['category'], () => fetchCategories());
    const data = useMemo(() => categoriesList?.data || []);
    return (
        <div className="">
            <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} pageName={pageName} />

            <div className="flex">
                {isMenuOpen && (
                    <AdminPanelSidebar isMenuOpen={isMenuOpen} />
                )}
                <div className='border-l-2 text-gray-300'></div>
                <div className={`flex-1 ml-6 p-1 ${isMenuOpen ? '' : 'w-full h-full absolute top-20 left-0'}`}>
                    <Title title={title} breadCrums={breadCrums} />
                    <div className='mt-10'>
                        <div className='flex flex-row justify-end mt-5'>
                        <span onClick={(e) => setShowModal(true)} className='font-roboto w-1/6 flex flex-row text-white text-center items-center text-[12px] p-3 bg-[#ce3434] hover:cursor-pointer' >
                            <PlusIcon className="h-4 w-4 mr-5" />
                            <p className="text-center items-center">Add Categories</p>
                        </span>
                        </div>
                        {/* <Table columns={columns} data={data} /> */}
                          {showModal && <CategoryFormModal showModal={showModal} setShowModal={setShowModal} pageName={pageName} paramsValue = {formData} />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page