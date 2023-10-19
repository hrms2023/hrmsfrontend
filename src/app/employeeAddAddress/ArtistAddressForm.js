"use client";
import { Dropdown } from "@/components/Inputs/Dropdown";

import React, { useEffect, useState } from "react";
import { cities, country_list, gender, state } from "../utils";
import Input from "@/components/Inputs/Input";
import { PlusIcon } from "@heroicons/react/24/outline";
import Toggle from "@/components/Inputs/Toggle";
import CheckBox from "@/components/Inputs/CheckBox";
// import { Router } from "next/router";

const ArtistAddressForm = ({paramsID}) => {
  const [addAddress, setAddAddress] = useState(false);
  const [formData, setFormData] = useState({
    isDefault: 1,
    featureProduct: 1,
  });
  if(paramsID){
    useEffect(()=> {
      console.log(paramsID);
    })
  }

  const handleSelectionRadioChange = (fieldName, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [fieldName]: value,
    }));
  };
  const handleToggleChange = (isEnabled) => {
    setFormData({
      ...formData,
      isDefault: isEnabled,
    });
  };

  const toggleDefault = () => {
    // Toggle between "Yes" and "No"
    const newDefault = formData.isDefault === 1 ? 0 : 1;
    setFormData({
      ...formData,
      isDefault: newDefault,
    });
  };

  return (
    <div className="mt-12">
      <div className="flex flex-row ml-5 mb-4">
        <label className="font-roboto text-[20px] font-semibold">
          <p className="px-2 mb-10 font-semibold text-lg mt-10">
            Present Address
          </p>
        </label>
      </div>
      <Dropdown
        label={"Select Country :"}
        list={country_list}
        value={formData.artistGender}
        onChange={(value) => handleChange("artistGender", value)}
      />
      <Dropdown
        label={"Select State :"}
        list={state}
        value={formData.artistGender}
        onChange={(value) => handleChange("artistGender", value)}
      />
      <Input
        label={"Street Address :"}
        placeholder={""}
        type={"text"}
        value={formData.artistName}
        onChange={(value) => handleChange("artistName", value)}
      />
      <div className="w-1/5 ml-24">
        <div
          onClick={() => setAddAddress(true)}
          className="flex flex-row text-center items-center justify-center"
        >
          <PlusIcon className="h-4 w-4 text-[#C4302B] hover:cursor-pointer" />
          <a className="m-1 text-[12px] underline hover:cursor-pointer tracking-tight text-gray-900">
            Add Address Line {`(optional)`}
          </a>
        </div>
      </div>

      {addAddress && (
        <Input
          label={"Enter Street Address 2:"}
          placeholder={""}
          type={"text"}
          value={formData.artistName}
          onChange={(value) => handleChange("artistName", value)}
        />
      )}
      <Dropdown
        label={"Select City :"}
        list={cities}
        value={formData.artistGender}
        onChange={(value) => handleChange("artistGender", value)}
      />
      <Input
        label={"Enter Pincode :"}
        placeholder={""}
        type={"number"}
        value={formData.mobile}
        onChange={(value) => handleChange("mobile", value)}
      />
      <div className="mt-12">
        <div className="flex items-center">
          <p className="px-5  font-semibold text-lg mt-10">Permanent Address</p>
        </div>
        <div className="m-2 flex items-center mb-10">
          {/* <CheckBox className="px-1" ></CheckBox>
           */}

          <div className="cursor-pointer" >
            <div
              className={`relative rounded-md w-5 h-5   ${"bg-red-600"  }`}
            >
              <input
                type="checkbox"
                // onChange={(e) => handleCheckChange(e.target.value)}
                className={`absolute w-5 h-5   transition-transform transform ${
                  "bg-red-600" 
                }`}
                checked={formData.featureProduct === 1 }
                  onChange={() =>
                handleSelectionRadioChange(
                  'featureProduct',
                  formData.featureProduct === 1 ? 0 : 1
                )
              }
              />
            </div>
          </div>
          <span className="text-sm font-roboto  px-3 ">
            Is Present address is same as Permaanet address.
          </span>
        </div>
      </div>
      {formData.isDefault === 0 && (
        <div>
          <Dropdown
            label={"Select Country :"}
            list={country_list}
            value={formData.artistGender}
            onChange={(value) => handleChange("artistGender", value)}
          />
          <Dropdown
            label={"Select State :"}
            list={state}
            value={formData.artistGender}
            onChange={(value) => handleChange("artistGender", value)}
          />
          <Input
            label={"Street Address :"}
            placeholder={""}
            type={"text"}
            value={formData.artistName}
            onChange={(value) => handleChange("artistName", value)}
          />
          <div className="w-1/5 ml-24">
            <div
              onClick={() => setAddAddress(true)}
              className="flex flex-row text-center items-center justify-center"
            >
              <PlusIcon className="h-4 w-4 text-[#C4302B] hover:cursor-pointer" />
              <a className="m-1 text-[12px] underline hover:cursor-pointer tracking-tight text-gray-900">
                Add Address Line {`(optional)`}
              </a>
            </div>
          </div>

          {addAddress && (
            <Input
              label={"Enter Street Address 2:"}
              placeholder={""}
              type={"text"}
              value={formData.artistName}
              onChange={(value) => handleChange("artistName", value)}
            />
          )}
          <Dropdown
            label={"Select City :"}
            list={cities}
            value={formData.artistGender}
            onChange={(value) => handleChange("artistGender", value)}
          />
          <Input
            label={"Enter Pincode :"}
            placeholder={""}
            type={"number"}
            value={formData.mobile}
            onChange={(value) => handleChange("mobile", value)}
          />
        </div>
      )}
      <div className="relative">
        <div className="flex flex-row items-center justify-end px-80 mt-14">
          <button
            onClick={(e) => handleSubmit(e)}
            className="font-roboto text-white text-center text-[12px] bg-[#ce3434] h-12 w-1/3 mr-4"
          >
            Save
          </button>
          <button className="font-roboto text-white text-center text-[12px] bg-black h-12 w-1/3">
            Submit for Approval
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArtistAddressForm;
