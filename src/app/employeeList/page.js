'use client'
import { Navbar } from '@/components/Navbar/Navbar'
import Sidebar from '@/components/sidebar/Sidebar'
import React, { useMemo, useState } from 'react'

import Title from '@/components/Title/Title'
import AdminPanelSidebar from '@/components/sidebar/AdminPanelSidebar'
import { useQuery } from '@tanstack/react-query';
import { fetchCategories1 } from '@/api/CategoryApi'
import Table from '@/components/Table/TableEmployee'
import { PencilIcon, PlusIcon } from '@heroicons/react/24/solid'
import CategoryFormModal from '@/components/Modal/CategoryFormModal'
import EyeIcon from '@heroicons/react/24/solid'

const title = "Employee List";
const breadCrums = "Home / My Account / Categories"
const page = () => {
    const [showModal, setShowModal] = useState(false)
    const [formData, setFormData] = useState({})
    
    const [isMenuOpen, setIsMenuOpen] = useState(true);
    const pageName = "Employee List";
    const columns = useMemo(
        () => [
            {
                Header: "Name",

                accessor: "fullName",
                // Cell: ({ value }) => <img src={value} alt="Category" className='rounded-md h-10 w-10 flex flex-row  ml-20' />,

            },
            {
                Header: "Employee Id",
                accessor: "LocationName",
            },
            {
                Header: "Mobile",
                accessor: "mobileNumber",
                // Cell: ,
            },
            {
                Header: "Email",
                accessor: "workEmail",
                // Cell: ,
            },
            {
                Header: "Department",
                accessor: "state",
                // Cell: ,
            },
            {
                Header: "Designation",
                accessor: "streetAddress",
                // Cell: ,
            },
            {
                Header: "Job Type",
                accessor: "addressLine2",
                // Cell: ,
            },
            {
                Header: "Attendence",
                accessor: "city",
                // Cell: ,
            },
            {
                Header: "Actions",
                Cell: ({ row }) => (
                    <span>
                    <PencilIcon className="h-4 w-4 mr-5" onClick={(value) => handleEdit(row.original)} />
                    <p className=""></p>
                  </span>
                ),
                Call: ({ row }) => (
                    <span>
                    <EyeIcon className="h-4 w-4 mr-5" onClick={(value) => handleEdit(row.original)} />
                    <p className=""></p>
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
    const { data: categoriesList } = useQuery(['category'], () => fetchCategories1());
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
                    {/* <Title title={title} /> */}
                    <div className='mt-10'>
                        <div className='flex flex-row justify-end mt-5'>
                        <span onClick={(e) => setShowModal(true)} className='font-roboto w-4/9 flex flex-center text-white text-center items-center text-[12px] p-3 bg-[#0F3057] hover:cursor-pointer' >
                            {/* <PlusIcon className="h-4 w-4 mr-5" /> */}
                            <span className=" flex text-center items-center  w-[130px] h-[40px]"><div className="w-[91px] h-[17px] ml-5 text-white text-sm font-semibold font-['Roboto']">Add Employee</div></span>
                        </span>
                        <span onClick={(e) => setShowModal(true)} className='font-roboto w-4/9 flex flex-center text-white text-center items-center text-[12px] ml-4 p-3 bg-[#0F3057] hover:cursor-pointer' >
                            {/* <PlusIcon className="h-4 w-4 mr-5" /> */}
                            <span className=" flex text-center items-center  w-[130px] h-[40px]"><div className="w-[91px] h-[17px] ml-5 text-white text-sm font-semibold font-['Roboto']">Download CSV</div></span>
                        </span>
                        </div>
                        <main className="max-w-7xl sm:px-6 lg:px-2 pt-4">
            <div className="">
              <Table columns={columns} data={data} />
            </div>
          </main>
          
                        {/* <Table columns={columns} data={data} /> */}
                          {showModal && <CategoryFormModal showModal={showModal} setShowModal={setShowModal} pageName={pageName} paramsValue = {formData} />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page