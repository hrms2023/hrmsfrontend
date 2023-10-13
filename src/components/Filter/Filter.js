'use client'
import React from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
const Filter = () => {
    return (
        <div>
            <div className="m-4 mr-4 mt-6 flex items-center">
                <div className="w-60 h-full border-2 rounded-md border-gray-300 p-0">

                    <div className="font-semibold m-3 ">Filters</div>
                    <div className="border-t-2  border-gray-300 w-full"></div>
                    <div className="font-semibold m-3 flex flex-row font-roboto text-center justify-between">
                        <span >
                            Categories
                        </span>
                        <ChevronDownIcon className='h-5 w-5 mt-1.5' />
                    </div>
                    <div className="text-[12px] font-semibold m-3 font-roboto text-gray-500">Paintings</div>
                    <div className="border-t-2  border-gray-300 w-full"></div>

                    <div className="font-semibold m-3 flex flex-row font-roboto text-center justify-between">
                        <span>
                            Price
                        </span>
                        <ChevronDownIcon className='h-5 w-5 mt-1.5' />
                    </div>
                    <div class="flex items-center px-3 mb-2">
                        <input type="checkbox" value="" className="w-4 h-4 text-gray-500 border-gray-500" />
                        <label className="text-[12px] font-semibold px-2  font- text-gray-500">below ₹30,000</label>
                    </div>
                    <div class="flex items-center px-3 mb-2">
                        <input type="checkbox" value="" className="w-4 h-4 text-gray-500 border-gray-500" />
                        <label className="text-[12px] font-semibold px-2 font- text-gray-500">₹30,000 to ₹60,000</label>
                    </div>
                    <div class="flex items-center px-3 mb-2">
                        <input type="checkbox" value="" className="w-4 h-4 text-gray-500 border-gray-500" />
                        <label className="text-[12px] font-semibold px-2 font- text-gray-500">₹60,000 to ₹90,000</label>
                    </div>
                    <div class="flex items-center px-3 mb-2">
                        <input type="checkbox" value="" className="w-4 h-4 text-gray-500 border-gray-500" />
                        <label className="text-[12px] font-semibold px-2 font- text-gray-500">above ₹1,00,000</label>
                    </div>
                    <div className="border-t-2 mt-4 border-gray-300 w-full"></div>
                
                    <div className="font-semibold m-3 flex flex-row font-roboto text-center justify-between">
                        <span>
                            Medium
                        </span>
                        <ChevronDownIcon className='h-5 w-5 mt-1.5' />
                    </div>

                    <div class="flex items-center px-3 mb-2">
                        <input type="checkbox" value="" className="w-4 h-4 text-gray-500 border-gray-500" />
                        <label className="text-[12px] font-semibold px-2  font- text-gray-500">Aquatint</label>
                    </div>
                    <div class="flex items-center px-3 mb-2">
                        <input type="checkbox" value="" className="w-4 h-4 text-gray-500 border-gray-500" />
                        <label className="text-[12px] font-semibold px-2 font- text-gray-500">Collograph</label>
                    </div>
                    <div class="flex items-center px-3 mb-2">
                        <input type="checkbox" value="" className="w-4 h-4 text-gray-500 border-gray-500" />
                        <label className="text-[12px] font-semibold px-2 font- text-gray-500">Etching</label>
                    </div>
                    <div class="flex items-center px-3 mb-2">
                        <input type="checkbox" value="" className="w-4 h-4 text-gray-500 border-gray-500" />
                        <label className="text-[12px] font-semibold px-2 font- text-gray-500">Etching and Aquatint</label>
                    </div>
                    <div class="flex items-center px-3 mb-2">
                        <input type="checkbox" value="" className="w-4 h-4 text-gray-500 border-gray-500" />
                        <label className="text-[12px] font-semibold px-2 font- text-gray-500">Lithograohy</label>
                    </div>
                    <div class="flex items-center px-3 mb-2">
                        <input type="checkbox" value="" className="w-4 h-4 text-gray-500 border-gray-500" />
                        <label className="text-[12px] font-semibold px-2 font- text-gray-500">Mixed Media</label>
                    </div>
                    <div class="flex items-center px-3 mb-2">
                        <input type="checkbox" value="" className="w-4 h-4 text-gray-500 border-gray-500" />
                        <label className="text-[12px] font-semibold px-2 font- text-gray-500">Mixed Media Kolaj</label>
                    </div>
                    <div class="flex items-center px-3 mb-2">
                        <input type="checkbox" value="" className="w-4 h-4 text-gray-500 border-gray-500" />
                        <label className="text-[12px] font-semibold px-2 font- text-gray-500">Oil Painting</label>
                    </div>
                    <div class="flex items-center px-3 mb-2">
                        <input type="checkbox" value="" className="w-4 h-4 text-gray-500 border-gray-500" />
                        <label className="text-[12px] font-semibold px-2 font- text-gray-500">Polyster</label>
                    </div>
                    <div class="flex items-center px-3 mb-2">
                        <input type="checkbox" value="" className="w-4 h-4 text-gray-500 border-gray-500" />
                        <label className="text-[12px] font-semibold px-2 font- text-gray-500">Print Making</label>
                    </div>
                    <div class="flex items-center px-3 mb-2">
                        <input type="checkbox" value="" className="w-4 h-4 text-gray-500 border-gray-500" />
                        <label className="text-[12px] font-semibold px-2 font- text-gray-500">Water Color</label>
                    </div>
                    <div class="flex items-center px-3 mb-2">
                        <input type="checkbox" value="" className="w-4 h-4 text-gray-500 border-gray-500" />
                        <label className="text-[12px] font-semibold px-2 font- text-gray-500">Water Color and Pastel</label>
                    </div>
                    <div class="flex items-center px-3 mb-2">
                        <input type="checkbox" value="" className="w-4 h-4 text-gray-500 border-gray-500" />
                        <label className="text-[12px] font-semibold px-2 font- text-gray-500">Wooodcut</label>
                    </div>
                    <div className="border-t-2 mt-4 border-gray-300 w-full"></div>
                    <div className="font-semibold m-3 flex flex-row font-roboto text-center justify-between">
                        <span>
                            Artist
                        </span>
                        <ChevronDownIcon className='h-5 w-5 mt-1.5' />
                    </div>
                    
                    <div class="flex items-center px-3 mb-2">
                        <input type="checkbox" value="" className="w-4 h-4 text-gray-500 border-gray-500" />
                        <label className="text-[12px] font-semibold px-2  font- text-gray-500">Bablu Bhowmik</label>
                    </div>
                    <div class="flex items-center px-3 mb-2">
                        <input type="checkbox" value="" className="w-4 h-4 text-gray-500 border-gray-500" />
                        <label className="text-[12px] font-semibold px-2 font- text-gray-500">Ayaan Ejaz</label>
                    </div>
                    <div class="flex items-center px-3 mb-2">
                        <input type="checkbox" value="" className="w-4 h-4 text-gray-500 border-gray-500" />
                        <label className="text-[12px] font-semibold px-2 font- text-gray-500">Kunal Sarkar</label>
                    </div>
                    <div class="flex items-center px-3 mb-2"> 
                        <input type="checkbox" value="" className="w-4 h-4 text-gray-500 border-gray-500" />
                        <label className="text-[12px] font-semibold px-2 font- text-gray-500">Shatanik Sarkar</label>
                    </div>
                    <div class="flex items-center px-3 mb-2">
                        <input type="checkbox" value="" className="w-4 h-4 text-gray-500 border-gray-500" />
                        <label className="text-[12px] font-semibold px-2 font- text-gray-500">Somnath Sarkar</label>
                    </div>
                    <div class="flex items-center px-3 mb-2">
                        <input type="checkbox" value="" className="w-4 h-4 text-gray-500 border-gray-500" />
                        <label className="text-[12px] font-semibold px-2 font- text-gray-500">Soura Chaterjee</label>
                    </div>
                     <div className="border-t-2 mt-4 border-gray-300 w-full"></div>
                    <div className="font-semibold m-3 flex flex-row font-roboto text-center justify-between">
                        <span>
                            Paper
                        </span>
                        <ChevronDownIcon className='h-5 w-5 mt-1.5' />
                    </div>
                    
                    <div class="flex items-center px-3 mb-2">
                        <input type="checkbox" value="" className="w-4 h-4 text-gray-500 border-gray-500" />
                        <label className="text-[12px] font-semibold px-2 font- text-gray-500">Fabricano 200GSM</label>
                    </div>
                    <div class="flex items-center px-3 mb-2">
                        <input type="checkbox" value="" className="w-4 h-4 text-gray-500 border-gray-500" />
                        <label className="text-[12px] font-semibold px-2 font- text-gray-500">Handmade</label>
                    </div>

                    <div className="border-t-2 mt-4 border-gray-300 w-full"></div>
                    <div className="font-semibold m-3 flex flex-row font-roboto text-center justify-between">
                        <span>
                            Size
                        </span>
                        <ChevronDownIcon className='h-5 w-5 mt-1.5' />
                    </div>
                    <div class="flex items-center px-3 mb-2">
                        <input type="checkbox" value="" className="w-4 h-4 text-gray-500 border-gray-500" />
                        <label className="text-[12px] font-semibold px-2 font- text-gray-500">Large</label>
                    </div>
                    <div class="flex items-center px-3 mb-2">
                        <input type="checkbox" value="" className="w-4 h-4 text-gray-500 border-gray-500" />
                        <label className="text-[12px] font-semibold px-2 font- text-gray-500">Medium</label>
                    </div>
                    <div class="flex items-center px-3 mb-2">
                        <input type="checkbox" value="" className="w-4 h-4 text-gray-500 border-gray-500" />
                        <label className="text-[12px] font-semibold px-2 font- text-gray-500">Medium</label>
                    </div>
                    
                </div>
            </div>

        </div>
    )
}

export default Filter