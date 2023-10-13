
'use client'
import { Navbar } from '@/components/Navbar/Navbar';
import Title from '@/components/Title/Title';
import Sidebar from '@/components/sidebar/Sidebar';
import React, { useEffect, useState } from 'react';
import BioForm from '../BioForm';
const title = "Bio";
const breadCrums = "Home / My Account / Bio"
const Page = ({params}) =>{
    const [isMenuOpen, setIsMenuOpen] = useState(true);
    return (
        <div className="">
        <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} pageName={title} />

        <div className="flex">
            {isMenuOpen && (
                <Sidebar isMenuOpen={isMenuOpen} />
            )}
            <div className='border-l-2 text-gray-300'></div>
            <div className={`flex-1 ml-6 p-1 ${isMenuOpen ? '' : 'w-full h-full absolute top-20 left-0'}`}>
            <Title title = {title} breadCrums = {breadCrums} /> 
                <BioForm paramsID = {params.slug[0]} />
            </div>
        </div>
    </div>
    );
};

export default Page;