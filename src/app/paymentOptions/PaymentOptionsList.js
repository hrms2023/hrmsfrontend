import PaymentCard from '@/components/Cards/PaymentCard'
import React, { useState } from 'react'
import { paymentImages, paymentTitle } from '../utils'
import Modal from '@/components/Modal/Modal';

const PaymentOptionsList = () => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  }
  return (
    <div className='mt-2'>
      {showModal && <Modal showModal={showModal} setShowModal={setShowModal} />}

      <div onClick={openModal}>
        <PaymentCard title={paymentTitle.artkraft} subTitle={paymentTitle.arkraftMoney} icons={paymentImages.artkraft} />
      </div>


      <div className='flex flex-row items-center mb-8 mt-4 text-center justify-between px-10'>
        <div className='border-b-2 text-gray-600 w-[40%]'></div>
        <div className="text-gray-600 text-sm font-medium text-center">Payment Gateways</div>
        <div className='border-b-2 text-gray-600 w-[40%]'></div>
      </div>

      <div>
        <PaymentCard title={paymentTitle.razorpay} subTitle={""} icons={paymentImages.razorpay} />
      </div>

      <div>
        <PaymentCard title={paymentTitle.ccAvenue} subTitle={""} icons={paymentImages.ccAvenue} />
      </div>

      <div>
        <PaymentCard title={paymentTitle.stipe} subTitle={""} icons={paymentImages.stipe} />
      </div>

      <div className='flex flex-row items-center mb-8 mt-4 text-center justify-between px-10'>
        <div className='border-b-2 text-gray-600 w-[45%]'></div>
        <div className="text-gray-600 text-sm font-medium text-center">Wallets</div>
        <div className='border-b-2 text-gray-600 w-[45%]'></div>
      </div>

      <div>
        <PaymentCard title={paymentTitle.apple} subTitle={""} icons={paymentImages.apple} />
      </div>

      <div>
        <PaymentCard title={paymentTitle.gPay} subTitle={""} icons={paymentImages.gPay} />
      </div>

      <div>
        <PaymentCard title={paymentTitle.amazonPay} subTitle={""} icons={paymentImages.amazonPay} />
      </div>

      <div className='flex flex-row items-center mb-8 mt-4 text-center justify-between px-10'>
        <div className='border-b-2 text-gray-600 w-[40%]'></div>
        <div className="text-gray-600 text-sm font-medium text-center">Cash on Delivery</div>
        <div className='border-b-2 text-gray-600 w-[40%]'></div>
      </div>

      <div>
        <PaymentCard title={paymentTitle.cod} subTitle={""} icons={paymentImages.cod} />
      </div>
    </div>
  )
}

export default PaymentOptionsList