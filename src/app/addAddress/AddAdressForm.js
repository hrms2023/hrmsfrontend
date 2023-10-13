'use client'
import React, { useState } from 'react';
import { DevicePhoneMobileIcon, MapPinIcon, PhoneIcon, UserIcon } from '@heroicons/react/24/solid'
import CustomerDropdown from '@/components/Inputs/CustomerDropdown';
import { useMutation, useQuery } from '@tanstack/react-query';
import { PlusIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';

const AddAdressForm = () => {
    const router = useRouter()
    const [addAddress, setAddAddress] = useState(false)
    const [addresAs, setAddressAs] = useState("")
    const [mySelf, setMySelf] = useState(true)
    const [formData, setFormData] = useState({
        customerId: "b5111f80-46e0-40e2-82bf-52cba27537b9",
        addressType: "",
        stateId: "",
        cityId: "",
        addressOne: "",
        addressTwo: "",
        pincode: "",
        landmark: "",
        fullName: "",
        ccOne: "CC1",
        mobileOne: "",
        ccTwo: "cc2",
        mobileTwo: "90292834823",
        forMySelf: 423545213235,
        isDefault: 423545213235,
        createdOn: 423545213235,
        updatedOn: 423545213235
    });
    const { data: country, } = useQuery({
        queryKey: "country",
        queryFn: () =>
            fetch("http://localhost:8090/api/admin/country")
                .then((res) => res.json())
                .then((data) => {
                    return data;
                }),
    });
    const { data: state, } = useQuery({
        queryKey: "state",
        queryFn: () =>
            fetch("http://localhost:8090/api/admin/state")
                .then((res) => res.json())
                .then((data) => {
                    return data;
                }),
    });
    const { data: city, } = useQuery({
        queryKey: "city",
        queryFn: () =>
            fetch("http://localhost:8090/api/admin/city")
                .then((res) => res.json())
                .then((data) => {
                    return data;
                }),
    });
    const countries = country?.data
    const states = state?.data
    const cities = city?.data

    const handleChangeAddress = (e) => {
        handleInputChange(e)
        setAddressAs(e.target.value)
    }
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

    };
    const handleCountryChange = (selectedCountryId, selectedStateId, selectedCityId) => {
        setFormData({
            ...formData,
            countryId: selectedCountryId,
            stateId: selectedStateId,
            cityId: selectedCityId
        });
    };

    const mutation = useMutation(
        async (formData) => {

            const response = await fetch('http://localhost:8090/api/customer/address', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            return data;
        }
    );

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log("object")
            await mutation.mutateAsync(formData);
            router.push("/addressList")
        } catch (error) {
        }
    };
    return (
        <div className='flex flex-col w-full items-center px-4 mt-2'>
            <div className='w-full shadow-lg border rounded-lg p-5'>
                <div className='flex flex-row text-center justify-between'>
                    <div className='flex flex-row items-center text-center justify-center m-5'>
                        <input
                            type="radio"
                            className="outline-none focus:ring-0 border-b-2 border-black accent-[#c4302b] "
                            placeholder="Myself"
                            name='selection'
                            onChange={()=> setMySelf(true)}
                        />
                        <p className='text-sm font-roboto text-[12px] font-semibold ml-2'>Myself</p>
                        <input
                            type="radio"
                            className="ml-5 outline-none focus:ring-0 border-b border-black accent-[#c4302b]"
                            placeholder="Someone"
                            name='selection'
                            onChange={()=> setMySelf(false)}
                        />
                        <p className='text-sm font-roboto text-[12px] font-semibold ml-2'>Someone Else</p>

                    </div>
                </div>
                <div className="flex w-full items-center border-b border-gray-300 m-3 p-1">
                    <MapPinIcon className="w-4 h-4 text-[#ce3434]" />
                    <select
                        type="text"
                        className="w-full py-2 px-2 outline-none text-gray-500 text-[12px]"
                        onChange={(e) => handleChangeAddress(e)}
                        value={formData.addressType}
                        name="addressType"
                    >
                        <option value="Address as" disabled selected>
                            Address as
                        </option>
                        <option value="Home">
                            Home
                        </option>
                        <option value="Work">
                            Work
                        </option>
                        <option value="Others">
                            Others
                        </option>
                    </select>
                </div>
                {addresAs === "Others" && (
                    <div className="flex w-full items-center border-b border-gray-300 m-3 p-1">
                        <MapPinIcon className="w-4 h-4 text-[#ce3434]" />
                        <input
                            name="addressType"
                            value={formData.addressType}
                            onChange={handleInputChange}
                            type="text"
                            className="w-full py-2 px-2 outline-none text-[12px]"
                            placeholder="Address as"
                        />
                    </div>
                )}
                <CustomerDropdown onChange={(selectedCountryId) => handleCountryChange(selectedCountryId, formData.stateId, formData.cityId)} title={"Select Country"} value={countries} />
                <CustomerDropdown onChange={(selectedCityId) => handleCountryChange(formData.countryId, formData.stateId, selectedCityId)} title={"Select City"} value={cities} />
                <div className="flex w-full items-center border-b border-gray-300 m-3 p-1">
                    <MapPinIcon className="w-4 h-4 text-[#ce3434]" />
                    <input
                        name="addressOne"
                        value={formData.addressOne}
                        onChange={handleInputChange}
                        type="text"
                        className="w-full py-2 px-2 outline-none text-[12px]"
                        placeholder="Enter street address"
                    />
                </div>
                <div className="w-1/5 ml-1">
                    <div onClick={() => setAddAddress(true)} className='flex flex-row text-center items-center justify-center'>
                        <PlusIcon className='h-4 w-4 text-[#C4302B] hover:cursor-pointer' />
                        <a className="m-1 text-[12px] underline hover:cursor-pointer tracking-tight text-gray-900">Add Address Line {`(optional)`}</a>
                    </div>

                </div>
                {addAddress && (<div className="flex w-full items-center border-b border-gray-300 m-3 p-1">
                    <MapPinIcon className="w-4 h-4 text-[#ce3434]" />
                    <input
                        name="addressTwo"
                        value={formData.addressTwo}
                        onChange={handleInputChange}
                        type="text"
                        className="w-full py-2 px-2 outline-none text-[12px]"
                        placeholder="Enter street address"
                    />
                </div>)}
                <div className='flex flex-row text-center justify-between'>

                    <CustomerDropdown onChange={(selectedStateId) => handleCountryChange(formData.countryId, selectedStateId, formData.cityId)} title={"Select State/Province/Region"} value={states} />
                    <div className="flex w-full items-center border-b border-gray-300 m-3 p-1">
                        <MapPinIcon className="w-4 h-4 text-[#ce3434]" />
                        <input
                            name="pincode"
                            value={formData.pincode}
                            onChange={handleInputChange}
                            type="text"
                            className="w-full py-2 px-2 outline-none text-[12px]"
                            placeholder="Enter Pincode"
                        />
                    </div>
                </div>
                <div className="flex w-full items-center border-b border-gray-300 m-3 p-1">
                    <MapPinIcon className="w-4 h-4 text-[#ce3434]" />
                    <input
                        name="landmark"
                        value={formData.landmark}
                        onChange={handleInputChange}
                        type="text"
                        className="w-full py-2 px-2 outline-none text-[12px]"
                        placeholder="Nearby Landmark"
                    />
                </div>
                {!mySelf && (
                    <div className='flex flex-row text-center justify-between'>
                        <div className="flex w-full items-center border-b border-gray-300 m-3 p-1">
                            <UserIcon className="w-4 h-4 text-[#ce3434]" />
                            <input
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleInputChange}
                                type="text"
                                className="w-full py-2 px-2 outline-none ml-4 text-[12px]"
                                placeholder="Enter your Full Name"
                            />
                        </div>
                        <div className="flex w-full items-center border-b border-gray-300 m-3 p-1">
                            <DevicePhoneMobileIcon className="w-4 h-4 text-[#ce3434]" />
                            <input
                                name="mobileOne"
                                value={formData.mobileOne}
                                onChange={handleInputChange}
                                type="number"
                                className="w-full py-2 px-2 outline-none mr-4 text-[12px]"
                                placeholder="Enter your phone number"
                            />
                        </div>
                    </div>
                )}

                <div className="flex flex-row w-full items-center text-center justify-between ">
                    <button>

                    </button>
                    <button onClick={(e) => handleSubmit(e)} className='text-[12px] bg-black h-10 w-24  text-gray-50 mt-2 px-2'>
                        Save
                    </button>

                </div>

            </div>
        </div>
    )
}

export default AddAdressForm

