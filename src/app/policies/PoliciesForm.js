'use client'
import { addArtistPolicies, fetchArtistPolicies, updateArtistPolicies } from '@/api/api'
import TextArea from '@/components/Inputs/TextArea'
import { useMutation, useQuery } from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'

const PoliciesForm = ({ paramsID }) => {
    const UpdateMutation = useMutation(updateArtistPolicies);
    const addMutation = useMutation(addArtistPolicies)
    const [policyDetails, setPolicyDetails] = useState([])
    const [formData, setFormData] = useState({
        shoppingPolicy: "",
        cancellationPolicy: "",
        refundPolicy: "",
        artistId: "d595b660-c274-431c-92fe-54ce8494d7d0"
    })

    const handleChange = (fieldName, value) => {
        setFormData({
            ...formData,
            [fieldName]: value,
        });
    };

    let artistPolicyInfo = {}
    if (paramsID) {
        console.log(paramsID)
        const { data } = useQuery(['artistPolicy', paramsID], () => fetchArtistPolicies(paramsID));
        artistPolicyInfo = data?.data[0];
        console.log(data);
        useEffect(() => {
            console.log(data);
            setPolicyDetails(data?.data);
            if (paramsID && policyDetails?.length !== 0) {
                setFormData({
                    id: artistPolicyInfo?.id,
                    shoppingPolicy: artistPolicyInfo?.shoppingPolicy,
                    cancellationPolicy: artistPolicyInfo?.cancellationPolicy,
                    refundPolicy: artistPolicyInfo?.refundPolicy,
                    artistId: artistPolicyInfo?.artistId
                });
            }
        }, policyDetails)
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (paramsID && policyDetails.length !== 0) {
            try {
                await UpdateMutation.mutateAsync(formData)
            } catch (err) {
                console.log(err);
            }
        } else {
            try {
                await addMutation.mutateAsync(formData);
            } catch (error) {
                console.log(error);
            }
        }

    };

    useEffect(() => {

    }, [])
    return (
        <div>
            <div className='m-5'>
                <span className='text-[12px] font-roboto '>Fields marked with {"("}<span className='text-red-700'>{`*`}</span>{")"} asterisk are mandatory.</span>
            </div>
            <TextArea label={"Shopping Policy: "} placeholder={""} type={"text"} value={formData.shoppingPolicy} onChange={(value) => handleChange('shoppingPolicy', value)} />
            <TextArea label={"Cancellation Policy: "} placeholder={""} type={"text"} value={formData.cancellationPolicy} onChange={(value) => handleChange('cancellationPolicy', value)} />
            <TextArea label={"Refund Policy: "} placeholder={""} type={"text"} value={formData.refundPolicy} onChange={(value) => handleChange('refundPolicy', value)} />
            <div className='relative'>
                <div className='flex flex-row items-center justify-end px-80 mt-14'>
                    <button onClick={(e) => handleSubmit(e)} className='font-roboto text-white text-center text-[12px] bg-[#ce3434] h-12 w-1/3 mr-4'>Save</button>
                    <button className='font-roboto text-white text-center text-[12px] bg-black h-12 w-1/3'>Submit for Approval</button>
                </div>
            </div>
        </div>
    )
}
export default PoliciesForm