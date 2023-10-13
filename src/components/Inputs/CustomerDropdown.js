'use client'
import { MapPinIcon } from '@heroicons/react/24/solid'
import React from 'react'

const CustomerDropdown = ({ title, value, onChange }) => {

   const handleSelectChange = (e) => {
    const selectedValue = e.target.value;
    const selectedId = value.find(item => item.name  || item.title    === selectedValue)?.id || null;
   console.log(value)
    onChange(selectedId);
  };
    // console.log(value)
    return (

        <div className="flex w-full items-center border-b border-gray-300 m-3 p-1">
            <MapPinIcon className="w-4 h-4 text-[#ce3434]" />
            <select
                type="text"
                className="w-full py-2 px-2 outline-none text-gray-500 text-[12px]"
                onChange={handleSelectChange} 
            >
                <option value={title} disabled selected>
                    {title}
                </option>
                {Array.isArray(value) ? (
                    value.map((list, id) => (
                        <option key={id} value={list.name || list.title}>
                            {list.name || list.title}
                        </option>
                    ))
                ) : (
                    <option value={"Waiting"}>
                        {"Waiting"}
                    </option>
                )}
            </select>
        </div>
    )
}

export default CustomerDropdown
