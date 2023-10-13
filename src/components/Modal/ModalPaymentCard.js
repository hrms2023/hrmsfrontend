import React from 'react'

const ModalPaymentCard = ({ title, subTitle, icons }) => {
    return (
        <div>
            <div className='flex flex-col w-full item-center justify-center hover:cursor-pointer mb-2'>
                <div className='flex flex-row w-full items-center border-b'>
                    <div className='flex flex-row items-center justify-between w-full px-6'>
                        <div className='flex flex-row items-center space-x-2'>
                            <img src={icons} className='h-4 w-4' />
                            <div className='flex flex-col p-1 space-y-1'>
                                <a className='text-gray-900 text-[16px] font-semibold '>{title}</a>
                                <a className='text-gray-500 text-[12px] font-medium'>{subTitle}</a>
                            </div>
                        </div>
                        <div className='text-center items-center'>
                            <input type='radio' className='h-4 w-4 accent-[#c4302b]' />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ModalPaymentCard
