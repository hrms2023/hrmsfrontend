import { fetchArtistBio, updateArtistBio } from '@/api/api';
import Input from '@/components/Inputs/Input';
import TextArea from '@/components/Inputs/TextArea'
import Chip from '@/components/buttons/Chip'
import { PlusIcon } from '@heroicons/react/24/outline';
import { useMutation, useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react'
let academicList = [];
let exhibitionsList = [];
let recognitionList = [];
const BioForm = ({ paramsID }) => {
    const [listData, setListData] = useState({
        academicsList: "",
        exhibitionsList: "",
        recognitionList: "",
    })
    const [addressSwitch, setAddressSwitch] = useState(false);
    const [bioDetails, setBioDetails] = useState([])
    const [exhibitionsSwitch, setExhibitionsSwitch] = useState(false);
    const [recognitionSwitch, setRecognitionSwitch] = useState(false);
    const [formData, setFormData] = useState({
        aboutArtist: "",
        aboutStores: "",
        academics: "",
        academicsList: academicList,
        exhibitions: "",
        exhibitionsList: exhibitionsList,
        recognition: "",
        recognitionList: recognitionList,
        messageToBuyers: "",
        artistId: "d595b660-c274-431c-92fe-54ce8494d7d0",
    });

    const handleChange = (fieldName, value) => {
        setFormData({
            ...formData,
            [fieldName]: value,
            // other fields...
        });
    };

    const handleChangeList = (fieldName, value) => {
        setListData({
            ...listData,
            [fieldName]: value,
        });

    };

    const mutation = useMutation(
        async (formData) => {
            let formValue = {
                aboutArtist: formData.aboutArtist,
                aboutStores: formData.aboutStores,
                academics: formData.academics,
                academicsList: academicList,
                exhibitions: formData.exhibitions,
                exhibitionsList: exhibitionsList,
                recognition: formData.recognition,
                recognitionList: recognitionList,
                messageToBuyers: formData.messageToBuyers,
                artistId: formData.artistId,
            }

            const response = await fetch('http://localhost:8090/api/artist-bio-details/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formValue),
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            return data;
        }
    );



    const addAddressList = () => {
        academicList = [...academicList, listData.academicsList];
        setAddressSwitch(false);
        setListData({ academicsList: "" })
        console.log(academicList);
    }
    const addExhibitionList = () => {
        exhibitionsList = [...exhibitionsList, listData.exhibitionsList];
        setExhibitionsSwitch(false);
        setListData({ exhibitionsList: "" })
    }

    const addRecognitionList = () => {
        recognitionList = [...recognitionList, listData.recognitionList];
        setRecognitionSwitch(false);
        setListData({ recognitionList: "" })
    }

    let artistBioInfo = {}
    if (paramsID) {
        const { data } = useQuery(['artistBio', paramsID], () => fetchArtistBio(paramsID));
        artistBioInfo = data?.data[0];
        useEffect(() => {
            if (paramsID && data?.data.length !== 0) {
                setBioDetails(data?.data)
                setFormData({
                    id: artistBioInfo?.id,
                    aboutArtist: artistBioInfo?.aboutArtist,
                    aboutStores: artistBioInfo?.aboutStores,
                    academics: artistBioInfo?.academics,
                    academicsList: ["Somthing 1"],
                    exhibitions: artistBioInfo?.exhibitions,
                    exhibitionsList: ["Somthing 1"],
                    recognition: artistBioInfo?.recognition,
                    recognitionList: ["Somthing 1"],
                    messageToBuyers: artistBioInfo?.messageToBuyers,
                    artistId: paramsID,

                });
            }
        }, bioDetails)

    }
    const UpdateMutation = useMutation(updateArtistBio);
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (paramsID && data.data.length !== 0) {
            await UpdateMutation.mutateAsync(formData)
            return

            return
        }
        try {
            await mutation.mutateAsync(formData);
        } catch (error) {
        }
    };

    return (
        <div>
            <div className='m-5'>
                <span className='text-[12px] font-roboto '>Fields marked with {"("}<span className='text-red-700'>{`*`}</span>{")"} asterisk are mandatory.</span>
            </div>
            <TextArea label={"About the Artist: "} placeholder={""} type={"text"} value={formData.aboutArtist} onChange={(value) => handleChange('aboutArtist', value)} />
            <TextArea label={"About the Stores: "} placeholder={""} type={"text"} value={formData.aboutStores} onChange={(value) => handleChange('aboutStores', value)} />
            <TextArea label={"Academics: "} placeholder={""} type={"text"} value={formData.academics} onChange={(value) => handleChange('academics', value)} />
            {addressSwitch && (<div className=''>
                <Input label={"List: "} placeholder={""} type={"text"} value={listData.academicsList} onChange={(value) => handleChangeList('academicsList', value)} />
                <PlusIcon onClick={(e) => addAddressList(e)} className='h-4 w-4 ' />
            </div>)}
            <div onClick={(e) => setAddressSwitch(true)} className='ml-32'>
                <Chip label={"Add Academics"} />

            </div>

            <div className='ml-32 m-5 px-2'>
                {academicList.map((list, id) => {
                    return (
                        <ul className="list-disc list-inside ">
                            <li className='text-[12px] font-semibold text-gray-500 mt-1'>{list}</li>
                        </ul>)
                })
                }
            </div>
            <TextArea label={"Exhibitions: "} placeholder={""} type={"text"} value={formData.exhibitions} onChange={(value) => handleChange('exhibitions', value)} />
            <div onClick={(e) => setExhibitionsSwitch(true)} className='ml-32'>
                <Chip label={"Add Exhibitions"} />
            </div>
            {exhibitionsSwitch && (<div className=''>
                <Input label={"List: "} placeholder={""} type={"text"} value={listData.exhibitionsList} onChange={(value) => handleChangeList('exhibitionsList', value)} />
                <PlusIcon onClick={(e) => addExhibitionList(e)} className='h-4 w-4 ' />
            </div>)}

            <div className='ml-32 m-5 px-2'>
                {exhibitionsList.map((list, id) => {
                    return (
                        <ul className="list-disc list-inside ">
                            <li className='text-[12px] font-semibold text-gray-500 mt-1'>{list}</li>
                        </ul>)
                })
                }
            </div>
            <TextArea label={"Recognitions: "} placeholder={""} type={"text"} value={formData.recognition} onChange={(value) => handleChange('recognition', value)} />
            <div onClick={(e) => setRecognitionSwitch(true)} className='ml-32'>
                <Chip label={"Add Recognitions"} />
            </div>
            {recognitionSwitch && (<div className=''>
                <Input label={"List: "} placeholder={""} type={"text"} value={listData.recognitionList} onChange={(value) => handleChangeList('recognitionList', value)} />
                <PlusIcon onClick={(e) => addRecognitionList(e)} className='h-4 w-4 ' />
            </div>)}

            <div className='ml-32 m-5 px-2'>
                {recognitionList.map((list, id) => {
                    return (
                        <ul className="list-disc list-inside ">
                            <li className='text-[12px] font-semibold text-gray-500 mt-1'>{list}</li>
                        </ul>)
                })
                }
            </div>
            <TextArea label={"Message to buyers: "} placeholder={""} type={"text"} value={formData.messageToBuyers} onChange={(value) => handleChange('messageToBuyers', value)} />

            <div className='relative'>
                <div className='flex flex-row items-center justify-end px-80 mt-14'>
                    <button onClick={(e) => handleSubmit(e)} className='font-roboto text-white text-center text-[12px] bg-[#ce3434] h-12 w-1/3 mr-4'>Save</button>
                    <button className='font-roboto text-white text-center text-[12px] bg-black h-12 w-1/3'>Submit for Approval</button>
                </div>
            </div>
        </div>
    )
}
export default BioForm