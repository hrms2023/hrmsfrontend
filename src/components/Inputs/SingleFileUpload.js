import React, { useEffect, useState } from 'react'
import { useRef } from 'react';

const SingleFileUpload = ({ label, placeholder, type, onFileChange }) => {
    const [files, setFiles] = useState([])
    const hiddenFileInput = useRef(null);

    const handleClick = () => {
        hiddenFileInput.current.click();
    };

    const handleChange = (event) => {
        const selectedFiles = event.target.files;
        if (selectedFiles.length > 0) {
            const filesData = [];
            for (let i = 0; i < selectedFiles.length; i++) {
                const file = selectedFiles[i];
                filesData.push(file);
            }
            onFileChange(filesData);
        }
    };
    useEffect(() => {
    }, [files])

    return (
        <div className='flex flex-col w-full mt-4 px-1'>
            <div className='flex flex-row ml-4 px-7 w-full'>
                <label className='font-roboto text-[12px] font-semibold '>
                    {label}
                </label>
                <div className='flex flex-1  items-center w-24'>
                    <div className='w-3/4'>
                    <button
                        className="flex-1 w-[110%] outline-none focus:ring-0 border-b text-sm text-gray-500 border-black"
                        onClick={handleClick}
                    >
                        Upload a file
                    </button>
                    </div>
                    <input
                        type="file"
                        onChange={handleChange}
                        ref={hiddenFileInput}
                        style={{ display: 'none' }}
                        
                    />
                </div>
            </div>
        </div>
    )
}

export default SingleFileUpload