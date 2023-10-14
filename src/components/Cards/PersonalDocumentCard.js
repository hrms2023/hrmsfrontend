import { PencilIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { useRouter } from "next/navigation";


const PersonalDocumentCard = ({ style, personalDocument, setSinglePersonalDocument }) => {
  const router = useRouter();

  let lastPart;
  const documentInfoLabels = [
    "ID Proff",
    "Pan Number",
    "Pan card",
    "Address proff",
    "Aadhar Card Number",
    "Adhar Card File"
  ];

  const PersonalDocumentInfo = {
    "id": "77b0e409-bdf6-40a6-a8a5-bcaa818957e2",
    "employeeId": "564fb1f7-47c9-4f5a-8973-cac94af42815",
    "idProff": "ID123456",
    "PanNumber": "ABCDE1234F",
    "panFile": "pan_file_url",
    "addressProof": "address_proof",
    "aadharCardNumber": "1234 5678 9012",
    "aadharCardFile": "aadhar_card_url",
  };

  const navigateToForm = (e) => {
    e.preventDefault();
    router.push(`personaldocument/${PersonalDocumentInfo.id}`);
  };

  if (personalDocument) {
    const parts = personalDocument.panFile.split('/');
    lastPart = parts[parts.length - 1];
  }

  return (
    <div className='p-3 mt-2'>
      <div className={`max-w-sm p-3 bg-[#f2f2f2] border-[#f2f2f2] rounded-lg shadow ${style}`}>
        <div className='flex flex-row items-center justify-between px-2'>
          <a>
            <span className="mb-2 text-[12px] font-roboto tracking-tight text-gray-900 font-style: italic">Default Personal Documents</span>
          </a>
          <PencilIcon onClick={(e) => navigateToForm(e)} className='h-4 w-4 hover:cursor-pointer' />
        </div>
        <div className='flex flex-row'>
          <div className='flex flex-col m-1'>
            {documentInfoLabels.map((label, index) => (
              <ul key={index} className='text-[12px] font-semibold  p-1.5'>
                {`${label} :`}
              </ul>
            ))}
          </div>
          <div className='flex flex-col m-1'>
            <ul className='text-[12px] font-roboto font-medium p-1.5'>
              {PersonalDocumentInfo.idProff}
            </ul>
            <ul className='text-[12px] font-roboto font-medium p-1.5'>
              {PersonalDocumentInfo.PanNumber}
            </ul>
            <ul className='text-[12px] font-roboto font-medium p-1.5'>
              {PersonalDocumentInfo.panFile}
            </ul>
            <ul className='text-[12px] font-roboto font-medium p-1.5'>
              {PersonalDocumentInfo.addressProof}
            </ul>
            <ul className='text-[12px] font-roboto font-medium p-1.5'>
              {PersonalDocumentInfo.aadharCardNumber}
            </ul>
            <ul className='text-[12px] font-roboto font-medium p-1.5'>
              {PersonalDocumentInfo.aadharCardFile}
            </ul>
            <ul onClick={() => window.open(personalDocument.panFile)} className='text-[12px] font-roboto font-medium p-1.5 hover:cursor-pointer'>
              {lastPart}
            </ul>
            <span className='text-[12px] font-roboto p-1.5 text-[#279847]'>View File</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDocumentCard;
