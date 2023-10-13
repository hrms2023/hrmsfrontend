import React, { useEffect, useState } from 'react'
import { useRef } from 'react';

const File = ({ label, placeholder, type, onFileChange }) => {
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
        <div className='flex flex-col'>
            <div className='flex flex-row m-5'>
                <label className='font-roboto text-[12px] font-semibold w-24'>
                    {label}
                </label>
                <div className='flex flex-1'>
                    <div className='w-3/4'>
                    <button
                        className="flex-1 w-full outline-none focus:ring-0 border-b text-sm text-gray-500 border-black"
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
                        multiple
                    />
                </div>
            </div>
        </div>
    )
}

export default File