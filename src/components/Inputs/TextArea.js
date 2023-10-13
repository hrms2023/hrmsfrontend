import React from 'react'

const TextArea = ({ label, placeholder, type, value, onChange }) => {
    const handleChange = (e) => {
        console.log(type)
        if (type === "date") {
            let time = e.target.value

            const timeBigIntValue = new Date(time).getTime();

            console.log(timeBigIntValue)
            onChange(JSON.stringify(timeBigIntValue));
        } else {
            onChange(e.target.value);
        }
    };

    return (
        <div className='flex flex-row m-5 mt-4'>
            <label className='font-roboto text-[12px] font-semibold w-24'>
                {label}
            </label>
            <div className='w-2/3'>
                <textarea
                    type={type}
                    className="w-full ml-2 outline-none text-[12px] focus:ring-0 border-b border-black"
                    placeholder={placeholder}
                    value={value}
                    onChange={handleChange}
                />
            </div>
        </div>
    );
}

export default TextArea;