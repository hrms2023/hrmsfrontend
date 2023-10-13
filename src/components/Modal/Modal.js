'use client'
import { paymentImages, paymentTitle } from '@/app/utils'
import { XMarkIcon } from '@heroicons/react/24/outline'
import React, { useState } from 'react'
import ModalPaymentCard from './ModalPaymentCard'

const Modal = ({ showModal, setShowModal }) => {
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
                                    <p className='text-[16px] font-semibold text-gray-600 ml-2'>Add Money</p>
                                        <XMarkIcon onClick={closeModal} className='h-4 w-4 hover:cursor-pointer' />
                                </div>
                                <div className="flex-row text-center mb-4">
                                    <label className='text-gray-500 text-[12px] font-medium'>₹50000 available</label>
                                </div>
                                <div className="flex-row text-center items-center">
                                    <label className='font-semibold'>₹</label> <input type='number' value={amountValue} onChange={(e) => handleChange(e)} className='bg-gray-200 text-[16px] outline-none rounded-md ml-2 w-1/2 px-2 py-2' />
                                </div>
                                <div className="flex-row text-center items-center justify-center space-x-4 mt-4">
                                    <a className='font-semibold text-gray-500 text-[12px] rounded-2xl hover:cursor-pointer bg-gray-200 px-5 py-2' onClick={() => setAmountValue(1000)}>₹ 1,000</a>
                                    <a className='font-semibold text-gray-500 text-[12px] rounded-2xl hover:cursor-pointer bg-gray-200 px-5 py-2' onClick={() => setAmountValue(2000)}>₹ 2,000</a>
                                    <a className='font-semibold text-gray-500 text-[12px] rounded-2xl hover:cursor-pointer bg-gray-200 px-5 py-2' onClick={() => setAmountValue(5000)}>₹ 5,000</a>
                                </div>
                                <div className="flex flex-col w-full items-center mt-10 justify-center p-4 border-t border-solid border-slate-200 rounded-b">
                                    <div className="w-full">
                                        <ModalPaymentCard title={paymentTitle.razorpay} subTitle={""} icons={paymentImages.razorpay} />
                                        <ModalPaymentCard title={paymentTitle.ccAvenue} subTitle={""} icons={paymentImages.ccAvenue} />
                                        <ModalPaymentCard title={paymentTitle.stipe} subTitle={""} icons={paymentImages.stipe} />
                                        <ModalPaymentCard title={paymentTitle.apple} subTitle={""} icons={paymentImages.apple} />
                                        <ModalPaymentCard title={paymentTitle.gPay} subTitle={""} icons={paymentImages.gPay} />
                                        <ModalPaymentCard title={paymentTitle.amazonPay} subTitle={""} icons={paymentImages.amazonPay} />
                                    </div>
                                    <button
                                        className="text-white bg-black mt-2 uppercase w-full py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                    >
                                        Add Money
                                    </button>

                                </div>
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

export default Modal
