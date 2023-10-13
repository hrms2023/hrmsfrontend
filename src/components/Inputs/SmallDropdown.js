import React from 'react'

export const SmallDropdown = ({ label, list, option, value, onChange  }) => {
    
    return (
        <div className='flex flex-row items-center m-5 mt-2 w-full'>
            <label className='font-roboto text-[12px] font-semibold w-24'>
                {label}
            </label>
            <div className='w-1/12'>
                <select
                    className="flex-grow w-full text-center outline-none text-[12px] focus:ring-0 border-b border-black"
                    onChange={(e) => onChange(e.target.value)}
                    value={value}
                >
                    <option value="" disabled selected>
                        Select from Dropdown
                    </option>
                    {list.map((item, index) => (
                        <option key={index} value={item}>
                            {item}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}
