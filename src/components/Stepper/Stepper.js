import React from 'react';

const Stepper = ({ steps }) => {

    return (
        <div className="flex px-10 items-center justify-center mt-2">
            <div className="flex flex-col items-center -mt-2">
                <div className={`text-[12px] ${steps.stepOne === true ? "text-[#ce3434]" : "text-gray-700"}  flex flex-row text-center items-center`}>Order Confirmed</div>
                <div className={`h-4 w-4  ${steps.stepOne === true ? "bg-[#ce3434]" : "bg-gray-700"} text-white-100 rounded-full flex text-center items-center justify-center`}></div>
                <div className="mt-2 text-[12px] flex flex-row text-center items-center">18th August</div>
            </div>
            <div className={`-ml-7 h-1 w-[30%] ${steps.stepOne  === true ? "bg-[#ce3434]": "  bg-gray-700"}`}></div>
            <div className="flex flex-col items-center -ml-7 -mt-4">
                <div className={`mt-2 text-[12px] ${steps.stepTwo === true ? "text-[#ce3434]" : "text-gray-700"}  flex flex-row text-center items-center`}>Order Shippped</div>
                <div className={`h-4 w-4  ${steps.stepTwo === true ? "bg-[#ce3434]" : "bg-gray-700"} text-gray-700 rounded-full flex text-center items-center justify-center`}> </div>
                <div className="mt-2 text-[12px] flex flex-row text-center items-center">20th August</div>
            </div>
              <div className={`-ml-7 h-1 w-[30%] ${steps.stepThree  === true ? "bg-[#ce3434]": "  bg-gray-700"}`}></div>
            <div className="flex flex-col items-center -ml-7">
                <div className={`mt-2 text-[12px] ${steps.stepThree === true ? "text-[#ce3434]" : "text-gray-700"}  flex flex-row text-center items-center`}>Out for Delivery</div>
                <div className={`h-4 w-4  ${steps.stepThree === true ? "bg-[#ce3434]" : "bg-gray-700"} text-gray-700 rounded-full flex text-center items-center justify-center`}></div>
                <div className="mt-2 text-[12px] flex flex-row text-center items-center">1st September</div>
            </div>
              <div className={`-ml-7 h-1 w-[30%] ${steps.stepFour  === true ? "bg-[#ce3434]": "  bg-gray-700"}`}></div>
            <div className="flex flex-col items-center -ml-7">
                <div className={`mt-2 text-[12px] ${steps.stepFour === true ? "text-[#ce3434]" : "text-gray-700"}  flex flex-row text-center items-center`}>Order Delivered</div>
                <div className={`h-4 w-4  ${steps.stepFour === true ? "bg-[#ce3434]" : "bg-gray-700"} text-gray-700 rounded-full flex text-center items-center justify-center`}></div>
                <div className="mt-2 text-[12px] flex flex-row text-center items-center">1st September</div>
            </div>
        </div>
    );
}

export default Stepper;