'use client'
import { Navbar } from '@/components/Navbar/Navbar'
import Sidebar from '@/components/sidebar/Sidebar'
import React, { useMemo, useState } from 'react'

import Title from '@/components/Title/Title'
import AdminPanelSidebar from '@/components/sidebar/AdminPanelSidebar'
import { useQuery } from '@tanstack/react-query';
import { fetchCategories1 } from '@/api/CategoryApi'
import Table from '@/components/Table/SaleryDetails'
import { PencilIcon, PlusIcon } from '@heroicons/react/24/solid'
import CategoryFormModal from '@/components/Modal/CategoryFormModal'
import EyeIcon from '@heroicons/react/24/solid'

const title = "Employee List";
const breadCrums = "Home / My Account / Categories"
const SaleryDetails = () => {
    const [showModal, setShowModal] = useState(false)
    const [formData, setFormData] = useState({})
    
    const [isMenuOpen, setIsMenuOpen] = useState(true);
    const pageName = "Employee List";
    const columns = useMemo(
        () => [
            {
                Header: "Month,Year",

                accessor: "fullName",
                // Cell: ({ value }) => <img src={value} alt="Category" className='rounded-md h-10 w-10 flex flex-row  ml-20' />,

            },
            {
                Header: " Gross Salary",
                accessor: "LocationName",
            },
            {
                Header: "Deductions",
                accessor: "mobileNumber",
                // Cell: ,
            },
            {
                Header: "Net Salary ",
                accessor: "workEmail",
                // Cell: ,
            },
            {
                Header: " Attendance",
                accessor: "state",
                // Cell: ,
            },
            {
                Header: "Late",
                accessor: "streetAddress",
                // Cell: ,
            },
            {
                Header: "Overtime",
                accessor: "addressLine2",
                // Cell: ,
            },
            {
                Header: "Action",
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
            {/* <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} pageName={pageName} /> */}

           
               
                        <main className="max-w-7xl sm:px-6 lg:px-2 pt-4">
            <div className="">
              <Table columns={columns} data={data} />
            </div>
          </main>
          
                        {/* <Table columns={columns} data={data} /> */}
                          {/* {showModal && <CategoryFormModal showModal={showModal} setShowModal={setShowModal} pageName={pageName} paramsValue = {formData} />} */}
                    </div>
                
            
    )
}

export default SaleryDetails