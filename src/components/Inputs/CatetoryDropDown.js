import React from 'react'

export const CatetoryDropDown = ({ label, list, option, value, onChange  }) => {
    const changeEvent = (e) => {
        // Call the parent's onChange function with the selected ID
        // 
        const selectedId = e.target.value;
        console.log(selectedId);
        onChange(selectedId);
        // ... other logic if needed ...
    }
    return (
        <div className='flex flex-row items-center m-5 mt-2 '>
            <label className='font-roboto text-[12px] font-semibold w-24'>
                {label}
            </label>
            <div className='w-2/3'>
                <select
                    className="flex-grow w-full text-center outline-none text-[12px] focus:ring-0 border-b border-black"
                    onChange={(e) =>  changeEvent(e)}
                    value={value}
                >
                    <option value="" disabled selected>
                        Select from Dropdown
                    </option>
                    {list?.map((item, index) => (
                        <option  key={index} value={item.id}>
                            {item.title}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}
