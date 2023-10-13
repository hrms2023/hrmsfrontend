import React from 'react'

const RadioButton = ({ label }) => {
    return (
        <div className='flex flex-row m-5'>
            <label className='font-roboto text-sm font-semibold'>{label}</label>
            <p className='text-sm font-roboto ml-2'>Yes</p>
            <input
                type="radio"
                className="ml-2 outline-none focus:ring-0 border-b border-black accent-[#c4302b] "
                placeholder="Yes"

            />
            <p className='text-sm font-roboto ml-2'>No</p>
            <input
                type="radio"
                className="ml-2 outline-none focus:ring-0 border-b border-black accent-[#c4302b]"
                placeholder="Yes"

            />
        </div>
    )
}

export default RadioButton