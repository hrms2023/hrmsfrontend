import React from 'react'

export const ProductDropDown = ({ label, list, option, value, onChange }) => {
    const changeEvent = (e) => {
        const selectedID = e.target.value
        onChange(selectedID)

    }
    return (
        <div className='w-full'>
            <label className='font-roboto text-[12px] font-semibold w-24'>
                {label}
            </label>
            <div className='w-10/12'>
                <select
                    className="flex-grow w-full text-center outline-none text-[12px] focus:ring-0 border-b border-black"
                    onChange={(e) => changeEvent(e)}
                    value={value}
                >
                    <option value="" disabled selected>
                        Select from Dropdown
                    </option>
                    {list?.map((item, index) => (
                        <option key={index} value={item.id}>
                            {item.title}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}
