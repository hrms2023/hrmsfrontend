import React from 'react'
const ObjectDropdown = ({ label, list, option }) => {

    const renderCustomItem = (item) => {
        return <div className="md-image-text-item">
            <img className="md-image-text-avatar" src={item.icons} alt="Cover" />
            <div className="md-image-text-name">{item.display}</div>
        </div>;
    }
    
    return (
        <div className='flex flex-row m-5 mt-4'>
            <label className='font-roboto text-sm font-semibold'>{label} </label>
            <select
                className="w-1/2 ml-8 outline-none focus:ring-0 border-b border-black"
                defaultValue="" // Use defaultValue to set the default selected option
                renderItem={renderCustomItem}
            >
                <option value="" disabled>
                    {option}
                </option>
                {list.map((item, index) => (
                    <>
                    <option key={index} value={item.name}>
                       <img src={item.icons}/>
                        {item.name}
                    </option>
                    </>
                ))}
            </select>
        </div>
    );
};

export default ObjectDropdown;
