'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import { AtSymbolIcon, LockClosedIcon, ReceiptPercentIcon } from '@heroicons/react/24/solid';
import { socialAccountLogo } from '../utils';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '@/firebaseConfig';


const LoginCorporate = () => {
    const [passwordVisible, setPasswordVisible] = useState(false)
    const [referralVisible, setReferralVisible] = useState(false)
    const router = useRouter()
    const provider = new GoogleAuthProvider();

    const loginWithGmail = () => {

        signInWithPopup(auth, provider)
            .then((result) => {
       
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential?.accessToken;
                // The signed-in user info.
                const user = result.user;
  
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                console.log({ errorCode, errorMessage, email, credential });
            });
    }
    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='flex flex-col items-center justify-center'>
                <div className='bg-gray-50 w-[150%] flex flex-col text-center justify-between shadow-lg border rounded-lg p-6 mb-5'>
                    <h2 className='text-[#ce3434] font-semibold text-lg m-2'>Login</h2>
                    <p className='text-gray-500 text-[12px]'>Please fill the following details</p>
                    <div className="flex w-full items-center border-b border-gray-300 mt-2">
                        <AtSymbolIcon className="w-4 h-4 text-[#ce3434]" />
                        <input
                            type="email"
                            className="w-full py-2 px-2 outline-none bg-gray-50 text-[12px]"
                            placeholder="Enter your email"
                        />
                    </div>
                    {passwordVisible && <div className="flex w-full items-center border-b border-gray-300 mt-2">
                        <LockClosedIcon className="w-4 h-4 text-[#ce3434]" />
                        <input
                            type="password"
                            className="w-full py-2 px-2 outline-none bg-gray-50 text-[12px]"
                            placeholder="Enter your password"
                        />
                    </div>}
                    {referralVisible && <div className="flex w-full items-center border-b border-gray-300 mt-2">
                        <ReceiptPercentIcon className="w-4 h-4 text-[#ce3434]" />
                        <input
                            type="text"
                            className="w-full py-2 px-2 outline-none bg-gray-50 text-[12px]"
                            placeholder="Enter your referral code"
                        />
                    </div>}
                    <div className='flex flex-row items-center text-center justify-center mt-4 mb-4'>
                        <p className='text-gray-600 text-[12px]'>Referral Code</p>
                        <p className=' text-[12px] underline hover:cursor-pointer ml-1' onClick={()=>setReferralVisible(true)}>Click Here</p>
                    </div>
                    <button onClick={() => setPasswordVisible(true)} className='flex items-center justify-evenly text-center flex-row bg-[#ce3434] p-2 m-2 hover:cursor-pointer'>
                        <p className='font-roboto text-white ml-1 text-[12px]'>{passwordVisible ? "Login" : "Next"}</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default LoginCorporate
