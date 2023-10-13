import AddAddressDetailsCard from '@/components/Cards/AddAddressDetailsCard';
import AddressListCard from '@/components/Cards/AddressListCard';
import { useQuery } from '@tanstack/react-query';
import React from 'react'

const AddressList = () => {
    const id= "b5111f80-46e0-40e2-82bf-52cba27537b9";
    const { data } = useQuery({
        queryKey: ["address", id],     
        queryFn: () =>
            fetch(`http://localhost:8090/api/customer/address/${id}`)
                .then((res) => res.json())
                .then((data) => {
                    return data;
                }),
    });    
    return (
        <div className='flex flex-col p-2'>
            <div className='flex flex-row items-center'>
            <AddAddressDetailsCard />
            </div>
            <AddressListCard addressDetails = {data?.data} />
            {/* <AddressListCard addressDetails = {data.data} /> */}
        </div>
    )
}

export default AddressList

