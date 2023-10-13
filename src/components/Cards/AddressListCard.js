'use client'
import React from 'react'
import { HomeIcon, InformationCircleIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';
import { useMutation, useQueryClient } from '@tanstack/react-query';
const id = "b5111f80-46e0-40e2-82bf-52cba27537b9";
const queryKey = ["address", id];
const AddressListCard = ({ addressDetails }) => {
    const router = useRouter();
    const queryClient = useQueryClient();

    const deleteItem = async (itemId) => {
        const response = await fetch('http://localhost:8090/api/customer/address', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: itemId }),
        });

        if (!response.ok) {
            throw new Error('Error deleting item');
        }

        return response.json();
    };
    const deleteMutation = useMutation(deleteItem, {
        onMutate: async (variables) => {
            await queryClient.cancelQueries(queryKey);
            const previousItems = queryClient.getQueryData(queryKey);
            return { previousItems };
          },
          onError: (err, variables, context) => {
            queryClient.setQueryData(queryKey, context.previousItems);
          },
          onSettled: () => {
            queryClient.invalidateQueries(queryKey);
          },
    });

    const handleDelete = (itemId) => {
        deleteMutation.mutate(itemId);
        console.log(addressDetails)
    };
    return (
        <>
            {addressDetails?.map((list, index) => (<div className='flex flex-col w-full item-center justify-center'>
                <div className='bg-gray-50 flex flex-col justify-between shadow-lg border rounded-lg px-3 mb-5'>
                    <div className='flex flex-row m-5'>
                        <HomeIcon className='h-5 w-5 text-[#c4302b]' />
                        <div className='flex flex-col px-2'>
                            <a className='text-gray-900 text-[16px] font-semibold mb-2'>{list.addressType}</a>
                            <div className='flex flex-col '>
                                <a className='text-gray-900 text-[12px] mb-2 font-normal hover:cursor-pointer'>{list.addressOne}</a>
                                <a className='text-gray-500 text-[12px] mb-2 font-normal'>{list.addressTwo}</a>
                            </div>
                        </div>

                    </div>
                    <div className='flex flex-row text-center items-center justify-between px-10 mb-4'>
                        <div onClick={() => router.push('/addAddress')} className='flex flex-row hover:cursor-pointer'>
                            <PencilIcon className='text-[#c4302b] h-4 w-4' />
                            <a className='text-center text-[12px] text-gray-500 underline px-2'>Edit</a>
                        </div>
                        <div onClick={() => handleDelete(list.id)} className='flex flex-row hover:cursor-pointer'>
                            <TrashIcon className='text-[#c4302b] h-4 w-4' />
                            <a className='text-center text-[12px] text-gray-500 underline px-2'>Delete</a>
                        </div>
                        <div className='flex flex-row hover:cursor-pointer'>
                            <InformationCircleIcon className='text-[#c4302b] h-4 w-4' />
                            <a className='text-center text-[12px] text-gray-500 underline px-2'>Set Instructions</a>
                        </div>
                    </div>
                </div>
            </div>
            ))}
        </>
    )
}

export default AddressListCard