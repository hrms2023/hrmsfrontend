'use client'
import { Navbar } from '@/components/Navbar/Navbar'
import Sidebar from '@/components/sidebar/Sidebar'
import React, { useState } from 'react'
import PoliciesForm from './PoliciesForm'
import Title from '@/components/Title/Title'
const title = "Policies";
const breadCrums = "Home / My Account / Policies"
const page = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(true);
    const pageName = "Policies";
    return (
        <div className="">
            <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} pageName={pageName} />

            <div className="flex">
                {isMenuOpen && (
                    <Sidebar isMenuOpen={isMenuOpen} />
                )}
                <div className='border-l-2 text-gray-300'></div>
                <div className={`flex-1 ml-6 p-1 ${isMenuOpen ? '' : 'w-full h-full absolute top-20 left-0'}`}>
                    <Title title={title} breadCrums={breadCrums} />
                    <PoliciesForm />
                </div>
            </div>
        </div>
    )
}

export default page