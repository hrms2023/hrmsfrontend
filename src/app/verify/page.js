'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import { AtSymbolIcon, LockClosedIcon, ReceiptPercentIcon } from '@heroicons/react/24/solid';
import { socialAccountLogo } from '../utils';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '@/firebaseConfig';


const page = () => {
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
        <div className='flex flex-col items-center h-screen justify-center'>
            <div className='flex flex-col items-center justify-center'>
                <div className='bg-gray-50 w-[150%] flex flex-col text-center items-center justify-between shadow-lg border rounded-lg p-6 mb-5'>
                    <h2 className='text-[#ce3434] font-semibold text-lg m-2'>Verify</h2>
                    <img className='h-10 w-10 m-4' src='/success.png' alt='success' />
                    <p className='text-[12px] mt-1 '>Your account has been registered.</p>
                    <p className='text-[12px] mt-1 '>A verification link has been sent to</p>
                    <p className='text-[12px] mt-1 font-semibold'>ayaan.ejaz185@gmail.com</p>
                    <p className='text-[12px] mt-1 underline hover:cursor-pointer '>Wrong Email?</p>

                    <p className='text-[12px] font-semibold underline hover:cursor-pointer mt-20'>Resend Link</p>
                    <p className='text-[12px] mt-1 '>Wait for 60sec</p>


                    <button className='flex items-center justify-evenly text-center flex-row w-full bg-black p-2 hover:cursor-pointer mt-20'>
                        <p className='font-roboto text-white ml-1 text-[12px]'> Go to Login</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default page