'use client'
import React from 'react';

const ProductInfo = ({details}) => {
    return (
        <>
       {details &&( <div className='px-12'>
          <div className='flex flex-row mb-5'>
                    <p className='text-[12px] font-semibold text-gray-500'>
                        Category:
                    </p>
                    <p className='text-[12px] text-gray-500 underline px-1'>
                        Prints
                    </p>
                </div>

                <div className='flex flex-row mb-5'>
                    <p className='text-[12px] font-semibold text-gray-500'>
                        Medium:
                    </p>
                    <p className='text-[12px] text-gray-500 underline px-1'>
                        Aquatint, Etching, Etching and Aquatint
                    </p>
                </div>

                <div className='flex flex-row mb-5'>
                    <p className='text-[12px] font-semibold text-gray-500'>
                        Length:
                    </p>
                    <p className='text-[12px] text-gray-500 px-1'>
                        200cm
                    </p>
                </div>
                <div className='flex flex-row mb-5'>
                    <p className='text-[12px] font-semibold text-gray-500'>
                        Width:
                    </p>
                    <p className='text-[12px] text-gray-500 px-1'>
                        200cm
                    </p>
                </div>
                <div className='flex flex-row mb-5'>
                    <p className='text-[12px] font-semibold text-gray-500'>
                        Height:
                    </p>
                    <p className='text-[12px] text-gray-500 px-1'>
                        200cm
                    </p>
                </div>
                <div className='flex flex-row mb-5'>
                    <p className='text-[12px] font-semibold text-gray-500'>
                        Edition:
                    </p>
                    <p className='text-[12px] text-gray-500 px-1'>
                        4
                    </p>
                </div> 
        </div>)}
        </>
    );
};

export default ProductInfo;