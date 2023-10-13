"use client";
import React from "react";
import { useRouter } from "next/navigation";
import {
  AtSymbolIcon,
  LockClosedIcon,
  ReceiptPercentIcon,
} from "@heroicons/react/24/solid";
import { socialAccountLogo } from "../utils";
import {
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
} from "firebase/auth";
import { auth } from "@/firebaseConfig";

const LoginForm = () => {
  const router = useRouter();
  const provider = new GoogleAuthProvider();
  const fbProvider =  new FacebookAuthProvider();
  const loginWithGmail = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;
        router.push("/shop");
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
  };

  const loginWithFacebook = () => {
    console.log("text")
    signInWithPopup(auth, fbProvider)
      .then((result) => {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;
        router.push("/shop");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);
        console.log({ errorCode, errorMessage, email, credential });
      });
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <div className="bg-gray-50 w-[150%] flex flex-col text-center justify-between shadow-lg border rounded-lg p-5 mb-5">
          <h2 className="text-[#ce3434] font-semibold text-lg m-2">Login</h2>
          <p className="text-gray-500 text-[12px]">
            Please fill the following details
          </p>
          <div className="flex w-full items-center border-b border-gray-300 m-2">
            <AtSymbolIcon className="w-4 h-4 text-[#ce3434]" />
            <input
              type="email"
              className="w-full py-2 px-2 outline-none bg-gray-50 text-[12px]"
              placeholder="Enter your email"
            />
          </div>
          <div className="flex w-full items-center border-b border-gray-300 m-2">
            <LockClosedIcon className="w-4 h-4 text-[#ce3434]" />
            <input
              type="password"
              className="w-full py-2 px-2 outline-none bg-gray-50 text-[12px]"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex w-full items-center border-b border-gray-300 m-2">
            <ReceiptPercentIcon className="w-4 h-4 text-[#ce3434]" />
            <input
              type="text"
              className="w-full py-2 px-2 outline-none bg-gray-50 text-[12px]"
              placeholder="Enter your referral code"
            />
          </div>
          <button className="flex items-center justify-evenly text-center flex-row bg-[#ce3434] p-2 m-2 hover:cursor-pointer">
            <p className="font-roboto text-white ml-1 text-[12px]">Login</p>
          </button>
          <p className="text-gray-500 text-[12px] mt-1 mb-1">Or</p>
          <div className="flex flex-col items-center">
            <span
              onClick={() => loginWithGmail()}
              className="flex flex-row items-center text-center w-[95%] border justify-evenly shadow-md hover:cursor-pointer p-2 m-2 "
            >
              <p className="text-[12px] font-semibold">Login with Google</p>
              <img
                src={socialAccountLogo.google}
                className="h-5 w-5"
                alt="Google"
              />
            </span>
            <span onClick={()=> loginWithFacebook()} className="flex flex-row items-center text-center w-[95%] border justify-evenly shadow-md hover:cursor-pointer p-2 m-2 ">
              <p className="text-[12px] font-semibold">Login with Facebook</p>
              <img
                src={socialAccountLogo.facebook}
                className="h-5 w-5"
                alt="Facebook"
              />
            </span>
            <span className="flex flex-row items-center text-center w-[95%] border justify-evenly shadow-md hover:cursor-pointer p-2 m-2 ">
              <p className="text-[12px] font-semibold">Login with Apple</p>
              <img
                src={socialAccountLogo.apple}
                className="h-5 w-5"
                alt="Apple"
              />
            </span>
            <span className="flex flex-row items-center text-center w-[95%] border justify-evenly shadow-md hover:cursor-pointer p-2 m-2 ">
              <p className="text-[12px] font-semibold">Login with Phone</p>
              <img
                src={socialAccountLogo.phone}
                className="h-5 w-5"
                alt="Phone"
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
