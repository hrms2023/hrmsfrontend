"use client";
import { Dropdown } from "@/components/Inputs/Dropdown";
import Input from "@/components/Inputs/Input";
import React, { useEffect, useState } from "react";
import { formatBigIntDate, gender } from "../utils";
import { ProductDropDown } from "@/components/Inputs/ProductDropDown";
import {
  MinusIcon,
  PlusIcon,
  TrashIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import File from "@/components/Inputs/File";
import { FileTypeIcon } from "@/components/Inputs/FileTypeIcon";
import { NormalDropdown } from "@/components/Inputs/NormalDropdown";
import { SubCategoryDropdown } from "@/components/Inputs/SubCategoryDropdown";
import { useMutation, useQuery } from "@tanstack/react-query";
import { addProduct, getArtById, updateArtistArt, uploadArtistArtVideo } from "@/api/api";
import { fetchCategories, fetchUnits } from "@/api/CategoryApi";
import { CatetoryDropDown } from "@/components/Inputs/CatetoryDropDown";

const AddProductForm = ({ paramsId }) => {
  const fileUploadMutation = useMutation(uploadArtistArtVideo);
  const [fileData, setFileData] = useState([]);
  const [artDetails, setArtDetails] = useState([]);
  const [formData, setFormData] = useState({
    mediumIDs: [
      {
        id: "25e4b189-0b18-47cf-bafa-3783580e68bf",
      },
      {
        id: "2e77e570-8c4b-4b3a-b174-09f07751cb7c",
      },
    ],
    artDesc: "Picture description",
    artistId: "d595b660-c274-431c-92fe-54ce8494d7d0",
    barndId: "c6c4747e-1dcc-4461-8d5a-d800de5d89b2",
    categoryId: "304984e0-8f7c-4cb7-8113-5e36f63f2e82",
    artTitle: "",
    artSKU: "",
    edition: 1,
    artHeight: "",
    artWidth: "",
    artBreadth: "",
    // showPrice: "",
    // actualPrice: "",
    currencyID: "ccbc9cc0-3be1-4147-b97f-b1da9c238fac",
    artWeight: "",
    heightUnitID: "",
    widthUnitID: "",
    breadthUnitID: "",
    weightUnitID: "",
    foreignRegularPrice: "",
    foreignSalePrice: "",
    foreignSaleStartDate: "",
    foreignSaleEndDate: "",
    soldIndividuallyStatus: "",
    stockQuantity: "",
    lowStockThreshold: "",
    localSalePrice: "",
    localSaleStartDate: "",
    localSaleEndDate: "",
    localGSTRate: "",
    localHSNCode: "",
    localRegularPrice: "",
  });
  const { data: CategoryData } = useQuery(['category'], () => fetchCategories());
  const { data: unitData } = useQuery(['unit'], () => fetchUnits());
  const addMutation = useMutation(addProduct);
  const updateMutation = useMutation(updateArtistArt);
  const deleteFile = (index) => {
    const updatedFileData = [...fileData];
    setFileData.splice(index, 1);
    setUploadPANFile(updatedFileData);
  };


  const handleRadioChange = (e) => {
    setFormData({
      ...formData,
      soldIndividuallyStatus: e.target.value,
    });
  };

  const handleFileData = async (data) => {
    setFileData(data);
    try {
      await fileUploadMutation.mutateAsync(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleChange = (fieldName, value) => {
    setFormData({
      ...formData,
      [fieldName]: value,
      // other fields...
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (paramsId) {
      await updateMutation.mutateAsync(formData);
      return;
    } else {

      await addMutation.mutateAsync(formData);
    }
  };
  console.log(formData);
  if (paramsId) {
    const { data } = useQuery(["artistArt", paramsId], () =>
      getArtById(paramsId)
    );
    useEffect(() => {
      setArtDetails(data?.data);
      setFormData({
        id: data?.data?.id,
        artTitle: data?.data?.artTitle,
        artDesc: "Picture description32",
        currencyID: "ccbc9cc0-3be1-4147-b97f-b1da9c238fac",
        artistId: "288b0088-32f5-4e3c-b5fa-302ecfcfb3ac",
        barndId: "c6c4747e-1dcc-4461-8d5a-d800de5d89b2",
        categoryId: "304984e0-8f7c-4cb7-8113-5e36f63f2e82",
        artHeight: data?.data?.artHeight,
        artWidth: data?.data?.artWidth,
        artBreadth: data?.data?.artBreadth,
        artSKU: data?.data?.artSKU,
        artistId: data?.data?.artistId,
        artWeight: data?.data.artWeight,
        heightUnitID: data?.data.heightUnitID,
        widthUnitID: data?.data.widthUnitID,
        breadthUnitID: data?.data.breadthUnitID,
        weightUnitID: data?.data.weightUnitID,
        foreignRegularPrice: data?.data.foreignRegularPrice,
        foreignSalePrice: data?.data.foreignSalePrice,
        foreignSaleStartDate: formatBigIntDate(data?.data.foreignSaleStartDate),
        foreignSaleEndDate: formatBigIntDate(data?.data.foreignSaleEndDate),
        soldIndividuallyStatus: data?.data.soldIndividuallyStatus,
        stockQuantity: data?.data.stockQuantity,
        lowStockThreshold: data?.data.lowStockThreshold,
        localSalePrice: data?.data.localSalePrice,
        localSaleStartDate: formatBigIntDate(data?.data.localSaleStartDate),
        localSaleEndDate: formatBigIntDate(data?.data.localSaleEndDate),
        localGSTRate: data?.data.localGSTRate,
        localHSNCode: data?.data.localHSNCode,
        localRegularPrice: data?.data.localRegularPrice,
        mediumIDs: [
          {
            id: "25e4b189-0b18-47cf-bafa-3783580e68bf",
          },
          {
            id: "2e77e570-8c4b-4b3a-b174-09f07751cb7c",
          },
        ],
      });
    }, artDetails);
  }
  return (
    <div className="mt-10">
      <div className="m-5">
        <span className="text-sm font-roboto ">
          Fields marked with {"("}
          <span className="text-red-700">{`*`}</span>
          {")"} asterisk are mandatory.
        </span>
      </div>

      <CatetoryDropDown
        label={"Category :"}
        list={CategoryData?.data}
        value={formData.categoryId}
        onChange={(value) => handleChange("categoryId", value)}
      />

      <SubCategoryDropdown
        label={"Sub-category :"}
        list={gender}
      // value={formData.artistGender}
      // onChange={(value) => handleChange("artistGender", value)}
      />
      <div className="flex flex-row text-center items-center ml-28 ">
        <div className="flex flex-row hover:cursor-pointer">
          <PlusIcon className="h-4 w-4 text-[#c4302b]" />
          <p className="text-[12px] ml-2">Add</p>
        </div>
        <div className="flex flex-row ml-10 hover:cursor-pointer">
          <TrashIcon className="h-4 w-4 text-[#c4302b]" />
          <p className="text-[12px] ml-2">Delete</p>
        </div>
      </div>

      <Input
        label={"Product Title :"}
        placeholder={""}
        type={"text"}
        value={formData.artTitle}
        onChange={(value) => handleChange("artTitle", value)}
      />
      <div className="flex flex-row items-center text-center  m-5">
        <label className="font-roboto text-[12px] font-semibold ">
          Product Visibility :{" "}
        </label>
        <input
          type="radio"
          className="outline-none focus:ring-0 border-b-2 ml-3 border-black accent-[#c4302b] "
          placeholder="Myself"
          name="selection"
        />
        <p className="font-roboto text-[12px] font-medium ml-2">
          Shop and search results
        </p>
        <input
          type="radio"
          className="ml-5 outline-none focus:ring-0 border-b border-black accent-[#c4302b]"
          placeholder="Someone"
          name="selection"
        />
        <p className="font-roboto text-[12px] font-medium ml-2">Shop only</p>
        <input
          type="radio"
          className="outline-none focus:ring-0 border-b-2 ml-2 border-black accent-[#c4302b] "
          placeholder="Myself"
          name="selection"
        />
        <p className="font-roboto text-[12px] font-medium ml-2">
          Search results only
        </p>
        <input
          type="radio"
          className="ml-5 outline-none focus:ring-0 border-b border-black accent-[#c4302b]"
          placeholder="Someone"
          name="selection"
        />
        <p className=" font-roboto text-[12px] font-medium ml-2">Hide</p>
      </div>
      <div className="flex flex-row items-center text-center  m-5">
        <label className="font-roboto text-[12px] font-semibold ">
          Feature Product :{" "}
        </label>
        <input
          type="radio"
          className="outline-none focus:ring-0 border-b-2 ml-5 border-black accent-[#c4302b] "
          placeholder="Myself"
          name="selection"
        />
        <p className=" font-roboto text-[12px] font-medium ml-2">Yes</p>
        <input
          type="radio"
          className="ml-5 outline-none focus:ring-0 border-b border-black accent-[#c4302b]"
          placeholder="Someone"
          name="selection"
        />
        <p className=" font-roboto text-[12px] font-medium ml-2">No</p>
      </div>
      <p className="px-5 mb-10 font-semibold text-lg mt-10">Product Gallery</p>

      <File
        label={"Add Product Images :"}
        placeholder={""}
        type={"file"}
        onFileChange={handleFileData}
      />
      {fileData.length > 0 && (
        <div className="flex flex-row ml-44 ">
          {fileData.map((file, index) => (
            <div key={index} className="relative h-10 w-10 ml-2">
              <div className="absolute top-0 right-0">
                <XMarkIcon
                  onClick={() => deleteFile(index)}
                  className="w-4 h-4 font-bold hover:cursor-pointer text-red-600"
                />
              </div>
              <FileTypeIcon className="bg-[#dff3ff]" />
            </div>
          ))}
        </div>
      )}
      <File
        label={"Add Product Videos :"}
        placeholder={""}
        type={"file"}
        onFileChange={handleFileData}
      />
      {fileData.length > 0 && (
        <div className="flex flex-row ml-44 ">
          {fileData.map((file, index) => (
            <div key={index} className="relative h-10 w-10 ml-2">
              <div className="absolute top-0 right-0">
                <XMarkIcon
                  onClick={() => deleteFile(index)}
                  className="w-4 h-4 font-bold hover:cursor-pointer text-red-600"
                />
              </div>
              <FileTypeIcon className="bg-[#dff3ff]" />
            </div>
          ))}
        </div>
      )}
      <File
        label={"Featured Images :"}
        placeholder={""}
        type={"file"}
        onFileChange={handleFileData}
      />
      {fileData.length > 0 && (
        <div className="flex flex-row ml-44 ">
          {fileData.map((file, index) => (
            <div key={index} className="relative h-10 w-10 ml-2">
              <div className="absolute top-0 right-0">
                <XMarkIcon
                  onClick={() => deleteFile(index)}
                  className="w-4 h-4 font-bold hover:cursor-pointer text-red-600"
                />
              </div>
              <FileTypeIcon className="bg-[#dff3ff]" />
            </div>
          ))}
        </div>
      )}

      <p className="px-5 mb-10 font-semibold text-lg mt-10">Pricing - India</p>

      <Input
        label={"Regular Price (in INR) :"}
        placeholder={""}
        type={"number"}
        value={formData.localRegularPrice}
        onChange={(value) => handleChange("localRegularPrice", value)}
      />
      <Input
        label={"Sale Price (in INR) :"}
        placeholder={""}
        type={"number"}
        value={formData.localSalePrice}
        onChange={(value) => handleChange("localSalePrice", value)}
      />
      <div className="flex flex-row items-center -mt-4 -mb-4 mr-44">
        <Input
          label={"Schedule:"}
          placeholder={""}
          type={"date"}
          value={formData.localSaleStartDate}
          onChange={(value) => handleChange("localSaleStartDate", value)}
        />
        <Input
          label={""}
          placeholder={""}
          type={"date"}
          value={formData.localSaleEndDate}
          onChange={(value) => handleChange("localSaleEndDate", value)}
        />
      </div>
      <Input
        label={"GST RATE:"}
        placeholder={""}
        type={"text"}
        value={formData.localGSTRate}
        onChange={(value) => handleChange("localGSTRate", value)}
      />
      <Input
        label={"HSN CODE :"}
        placeholder={""}
        type={"text"}
        value={formData.localHSNCode}
        onChange={(value) => handleChange("localHSNCode", value)}
      />

      <p className="px-5 mb-10 font-semibold text-lg mt-10">
        Pricing - Rest of the world
      </p>

      <Input
        label={"Regular Price (in USD) :"}
        placeholder={""}
        type={"number"}
        value={formData.foreignRegularPrice}
        onChange={(value) => handleChange("foreignRegularPrice", value)}
      />
      <Input
        label={"Sale Price (in USD):"}
        placeholder={""}
        type={"number"}
        value={formData.foreignSalePrice}
        onChange={(value) => handleChange("foreignSalePrice", value)}
      />
      <div className="flex flex-row items-center -mt-4 -mb-4 mr-44">
        <Input
          label={"Schedule:"}
          placeholder={""}
          type={"date"}
          value={formData.foreignSaleStartDate}
          onChange={(value) => handleChange("foreignSaleStartDate", value)}
        />
        <Input
          label={""}
          placeholder={""}
          type={"date"}
          value={formData.foreignSaleEndDate}
          onChange={(value) => handleChange("foreignSaleEndDate", value)}
        />
      </div>

      <p className="px-5 mb-10 font-semibold text-lg mt-10">Inventory</p>

      <Input
        label={"SKU :"}
        placeholder={""}
        type={"text"}
        value={formData.artSKU}
        onChange={(value) => handleChange("artSKU", value)}
      />

      <div className="flex flex-row items-center text-center m-5">
        <label className="font-roboto text-[12px] font-semibold ">
          Sold Individually :{" "}
        </label>
        <input
          type="radio"
          value={1}
          onChange={handleRadioChange}
          checked={formData.soldIndividuallyStatus === 1}
          className="outline-none focus:ring-0 border-b-2 ml-5 border-black accent-[#c4302b] "
          placeholder="Myself"
          name="selection"
        />
        <p className=" font-roboto text-[12px] font-medium ml-2">Yes</p>
        <input
          value={0}
          type="radio"
          onChange={handleRadioChange}
          checked={formData.soldIndividuallyStatus === 0}
          className="ml-5 outline-none focus:ring-0 border-b border-black accent-[#c4302b]"
          placeholder="Someone"
          name="selection"
        />
        <p className=" font-roboto text-[12px] font-medium ml-2">No</p>
      </div>

      <Input
        label={"Stock Quantity :"}
        placeholder={""}
        type={"text"}
        value={formData.stockQuantity}
        onChange={(value) => handleChange("stockQuantity", value)}
      />
      <Input
        label={"Low Stock Threshold :"}
        placeholder={""}
        type={"number"}
        value={formData.lowStockThreshold}
        onChange={(value) => handleChange("lowStockThreshold", value)}
      />

      <p className="px-5 mb-10 font-semibold text-lg mt-10">
        Dimension & Weight
      </p>

      <div className="flex flex-row items-center mr-44">
        <Input
          label={"Length :"}
          placeholder={""}
          type={"text"}
          value={formData.artBreadth}
          onChange={(value) => handleChange("artBreadth", value)}
        />
        <ProductDropDown
          label={""}
          list={unitData?.data}
          value={formData.breadthUnitID}
          onChange={(value) => handleChange("breadthUnitID", value)}
        />
      </div>

      <div className="flex flex-row items-center mr-44">
        <Input
          label={"Width :"}
          placeholder={""}
          type={"text"}
          value={formData.artWidth}
          onChange={(value) => handleChange("artWidth", value)}
        />
        <ProductDropDown
          label={""}
          list={unitData?.data}
          value={formData.widthUnitID}
          onChange={(value) => handleChange("widthUnitID", value)}
        />
      </div>

      <div className="flex flex-row items-center mr-44">
        <Input
          label={"Height :"}
          placeholder={""}
          type={"text"}
          value={formData.artHeight}
          onChange={(value) => handleChange("artHeight", value)}
        />
        <ProductDropDown
          label={""}
          list={unitData?.data}
          value={formData.heightUnitID}
          onChange={(value) => handleChange("heightUnitID", value)}
        />
      </div>

      <div className="flex flex-row items-center mr-44">
        <Input
          label={"Weight :"}
          placeholder={""}
          type={"number"}
          value={formData.artWeight}
          onChange={(value) => handleChange("artWeight", value)}
        />
        <ProductDropDown
          label={""}
          list={unitData?.data}
          value={formData.weightUnitID}
          onChange={(value) => handleChange("weightUnitID", value)}
        />
      </div>

      <p className="px-5 mb-10 font-semibold text-lg mt-10">
        Dimension & Weight
      </p>

      <Input
        label={"Cross-sell :"}
        placeholder={""}
        type={"number"}
      // value={formData.mobile}
      // onChange={(value) => handleChange("mobile", value)}
      />

      <p className="px-5 mb-10 font-semibold text-lg mt-10">Attributes</p>
      <div className="flex flex-row w-full -mb-4">
        <div>
          <Dropdown
            label={"Product Attribute :"}
            list={gender}
          // value={formData.artistGender}
          // onChange={(value) => handleChange("artistGender", value)}
          />
        </div>
        <div className="flex flex-row items-center justify-center ml-10 hover:cursor-pointer">
          <PlusIcon className="h-4 w-4 text-[#c4302b]" />
          <p className="text-[12px]">Add</p>
        </div>
        {/* <ProductDropDown label={""} list={gender} value={formData.artistGender} onChange={(value) => handleChange('artistGender', value)} /> */}
      </div>

      <div className="flex flex-col m-5 w-9/12 p-3 bg-slate-100 rounded-md">
        <div className="flex flex-row justify-between items-center text-center">
          <div>
            <label className="text-[12px] font-semibold">
              Attribute Name: Size
            </label>
          </div>
          <div className="flex flex-row text-center">
            <MinusIcon className="h-4 w-4 text-[#c4302b] ml-2 cursor-pointer" />
            <p className="text-[12px] ml-2 cursor-pointer">Collapse</p>
            <TrashIcon className="h-4 w-4 text-[#c4302b] ml-2 cursor-pointer" />
            <p className="text-[12px] ml-2 cursor-pointer">Delete</p>
          </div>
        </div>
        <div className="flex flex-row items-center text-center">
          <NormalDropdown
            label={"Select Values:"}
            list={gender}
          // value={formData.artistGender}
          // onChange={(value) => handleChange("artistGender", value)}
          />
          <PlusIcon className="h-4 w-4 text-[#c4302b] ml-4 mt-4 hover:cursor-pointer" />
          <p className="text-[12px] ml-1 underline hover:cursor-pointer mt-4">
            Add More
          </p>
        </div>
        <div className="flex flex-row items-center text-center mt-6">
          <span className="p-2 px-4 bg-slate-200 flex flex-row items-center text-center rounded-md hover:cursor-pointer">
            <p className="text-[12px] font-semibold"> Small </p>
            <XMarkIcon className="h-4 w-4 text-[#c4302b]" />
          </span>
          <span className="p-2 px-4 bg-slate-200 flex flex-row items-center text-center rounded-md hover:cursor-pointer ml-2">
            <p className="text-[12px] font-semibold"> Medium </p>
            <XMarkIcon className="h-4 w-4 text-[#c4302b]" />
          </span>
          <span className="p-2 px-4 bg-slate-200 flex flex-row items-center text-center rounded-md hover:cursor-pointer ml-2">
            <p className="text-[12px] font-semibold"> Large </p>
            <XMarkIcon className="h-4 w-4 text-[#c4302b]" />
          </span>
        </div>
        <div class="flex items-center px-3 mb-2 mt-8">
          <input
            type="checkbox"
            value=""
            className="w-4 h-4 text-gray-500 border-gray-500"
          />
          <label className="text-[12px] font-semibold px-2 ">
            Visible on the product page
          </label>
        </div>
        <div class="flex items-center px-3 mt-2 mb-2">
          <input type="checkbox" value="" className="w-4 h-4 border-gray-500" />
          <label className="text-[12px] font-semibold px-2">
            Used for variations
          </label>
        </div>
      </div>

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

export default AddProductForm;
