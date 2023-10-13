import React from 'react'

const Input = ({ label, placeholder, type, value, onChange }) => {
    const handleChange = (e) => {
        if (type === "date") {
            let time = e.target.value
            const timeBigIntValue = new Date(time).getTime();   
            onChange(JSON.stringify(timeBigIntValue));
        } else {
            onChange(e.target.value);
        }
    };

    return (
        <div className='flex flex-row m-5 mt-4 items-center w-full'>
            <label className='font-roboto text-[12px] font-semibold w-24'>
                {label}
            </label>
            <div className='w-2/3'>
                <input
                    type={type}
                    className="flex-grow outline-none text-[12px] w-[96%] focus:ring-0 border-b border-black"
                    placeholder={placeholder}
                    defaultValue={value}
                    onChange={handleChange}
                />
            </div>
        </div>
    );
}

export default Input;