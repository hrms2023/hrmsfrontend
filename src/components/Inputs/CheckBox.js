import React, { useState } from 'react';

const CheckBox = ( value, onChange) => {
  const [isChecked, setIsChecked] = useState(true);

  const handleCheck = () => {
    setIsChecked((prev) => !prev);
  };
  const handleCheckChange = (isEnabled) => {
    setFormData({
      ...isChecked,
      isDefault: isEnabled,
    });
  };
  return (
    <div className="cursor-pointer" onClick={handleCheck}>
      <div className={`relative rounded-md w-5 h-5   ${isChecked ? 'bg-red-600' : 'bg-gray-300'}`}>
        <input
        value={value}
          type="checkbox"
          onChange={(e) => handleCheckChange(e.target.value)}
          className={`absolute w-5 h-5   transition-transform transform ${
            isChecked ? 'bg-red-600' : 'bg-white'
          }`}
        />
      </div>
    </div>
  );
};

export default CheckBox;
