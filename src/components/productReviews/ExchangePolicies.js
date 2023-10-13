import React from 'react';

const ExchangePolicies = ({polcies}) => {
    return (
        <>
        {polcies && (<div>
            <div className='bg-gray-50 w-full flex flex-col justify-between px-12 mb-5'>

                <div className='relative overflow-hidden'>
                    <div className={` mt-2'max-h-full' transition-max-h`}>
                        <p className='font-robot font-semibold text-[16px] mt-5'>Exchange</p>
                        <p className='text-gray-500 font-roboto text-[12px] mt-2'> These printable reading passages can be used in classrooms or at home to help students improve their reading skills. Each reading passage comes with word lists that include word meanings along with details such as reading time, rating, word count, sentence count, etc. Educators and parents can use the Lumos StepUp platform to assign these reading exercises to students and assess their progress. Students can also take advantage of the additional learning resources tied to the learning standard. These supplemental skill development resources include reading task worksheets, questions, vocabulary quizzes, videos, and more.</p>
                        <ul className="list-disc list-inside mt-2">
                            <li className='text-[12px] font-semibold text-gray-500 mt-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            <li className='text-[12px] font-semibold text-gray-500 mt-1'>Proin auctor libero in leo lacinia, in venenatis augue venenatis.</li>
                            <li className='text-[12px] font-semibold text-gray-500 mt-1'>Fusce consectetur felis ut justo aliquet, nec euismod nulla convallis.</li>
                            <li className='text-[12px] font-semibold text-gray-500 mt-1'>Nullam vitae arcu eu urna vehicula dictum ac vel massa.</li>
                            <li className='text-[12px] font-semibold text-gray-500 mt-1'>Vestibulum tempus ligula eu augue finibus, eu consectetur massa eleifend.</li>
                        </ul>
                        <p className='font-robot font-semibold text-[16px] mt-5'>Refunds</p>
                        <p className='text-gray-500 font-roboto text-[12px] mt-2'> These printable reading passages can be used in classrooms or at home to help students improve their reading skills. Each reading passage comes with word lists that include word meanings along with details such as reading time, rating, word count, sentence count, etc. Educators and parents can use the Lumos StepUp platform to assign these reading exercises to students and assess their progress. Students can also take advantage of the additional learning resources tied to the learning standard. These supplemental skill development resources include reading task worksheets, questions, vocabulary quizzes, videos, and more.</p>
                        <ul className="list-disc list-inside mt-2 mb-5">
                            <li className='text-[12px] font-semibold text-gray-500 mt-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            <li className='text-[12px] font-semibold text-gray-500 mt-1'>Proin auctor libero in leo lacinia, in venenatis augue venenatis.</li>
                            <li className='text-[12px] font-semibold text-gray-500 mt-1'>Fusce consectetur felis ut justo aliquet, nec euismod nulla convallis.</li>
                            <li className='text-[12px] font-semibold text-gray-500 mt-1'>Nullam vitae arcu eu urna vehicula dictum ac vel massa.</li>
                            <li className='text-[12px] font-semibold text-gray-500 mt-1'>Vestibulum tempus ligula eu augue finibus, eu consectetur massa eleifend.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>)}
        </>
    );
};

export default ExchangePolicies;