'use client'
import React, { useState } from 'react'
import { artistProfileImage } from "../../app/utils"
const ArtistProfile = ({ value, setUserProfileImage }) => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
      const file = event.target.files[0];
     
      if (file) {
        setUserProfileImage(file)
        const reader = new FileReader();
        reader.onload = (e) => {
          setSelectedFile(e.target.result);
         
        };
        reader.readAsDataURL(file);
      }
    };
  
    return (
        <div className='m-4 flex flex-row'>
          <label className='cursor-pointer'>
            <img className='h-24 w-24' src={selectedFile || artistProfileImage} alt='user Image' />
            <input 
              type="file" 
              style={{ display: 'none' }} 
              onChange={handleFileChange} 
            />
          </label>
          <div className='flex flex-row text-center mt-10 ml-8'>
            <label htmlFor="fileUpload" className='text-[12px] font-medium font-Roboto m-1 mr-2 underline cursor-pointer'>
              {value.change}
            </label>
            <input 
              type="file" 
              id="fileUpload" 
              style={{ display: 'none' }} 
              onChange={handleFileChange} 
            />
            <div className="border-l mt-2 p-1 border-gray-400 h-4"></div>
            <span className='text-[12px] font-medium font-Roboto m-1 underline cursor-pointer'>
              {value.remove}
            </span>
          </div>
        </div>
      );
    };

export default ArtistProfile