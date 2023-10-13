'use client'
import { XMarkIcon } from '@heroicons/react/24/outline'
import React, { useState } from 'react'
import TickMark from '../TickMark/TickMark'

const AddOrUpdateModal = ({ showModal, setShowModal, pageName, action }) => {
    const [amountValue, setAmountValue] = useState("")
    const closeModal = () => {
        setShowModal(false)

    }
    function handleChange(event) {
        console.log(event.target.value);
        setAmountValue(event.target.value)
    }
    return (
        <>
            {showModal && (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-1/3 my-6 mx-auto max-w-3xl">

                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        
                                <div className="flex  items-center justify-between p-5 border-solid rounded-t">
                                    <p></p>
                                        <XMarkIcon onClick={closeModal} className='h-4 w-4 hover:cursor-pointer' />
                                </div>
                                <div className='flex flex-row items-center justify-center text-center mb-10'>

                                
                                <p className='text-xl font-medium '>{pageName}</p> 
                                <p className='text-xl font-medium ml-1.5'>is</p> 
                                <p className='text-xl font-medium ml-1.5'>updated</p>
                                <TickMark />
                            
                                </div>
                                {/* <div className="flex flex-col w-full items-center mt-10 justify-center p-4 ">
                                   
  
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black">

                    </div>
                </>
            )}
        </>
    )
}

export default AddOrUpdateModal