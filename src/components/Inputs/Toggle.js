'use client'
import React, { useState } from 'react'

const Toggle = ({ value, onChange}) => {
    const [isActive, setIsActive] = useState(false);
    console.log(onChange);
    const toggle = () => {
        setIsActive(prev => !prev);
    };
    const handleChange = (value) => {
        onChange(0)
    }
    const handleToggleChange = (isEnabled) => {
        setFormData({
          ...isActive,
          isDefault: isEnabled,
        });
      };
    
  return (
    <div className=''>
        <div className={`relative w-10 h-5 rounded-xl ${isActive ? 'bg-red-600' : 'bg-gray-300'}`}>
                <button
                    value={value}
                    className={`absolute w-5 h-5 bg-white rounded-full transition-transform transform ${isActive ? 'translate-x-full' : ''}`}
                    onClick={toggle}
                    onChange={(e) => handleToggleChange(e.target.value)}
                />
            </div>
    </div>
  )
}

export default Toggle