'use client';
import { PencilIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { useRouter } from 'next/navigation';

const LastEmployeeDetailsCard = ({ style, employeeDetails, setSingleEmployeeDetails }) => {
  const router = useRouter();

  let lastPart;
  const documentInfoLabels = [
    'Company Name',
    'Document Type',
    'Appointment Letter',
    'Pay Slip',
  ];

  const lastEmployeeDetails = {
    id: '6595542f-40f0-4b8b-8612-330cca433fde',
    employeeId: '564fb1f7-47c9-4f5a-8973-cac94af42815',
    companyName: 'Acme Corporation',
    documentType: 'Appointment Letter',
    appointmentLetterFile: 'https://example.com/appointment_letter.pdf',
    paySlipFile: 'https://example.com/pay_slip.pdf',
  };

  const navigateToForm = (e) => {
    e.preventDefault();
    router.push(`/lastEmployee/${lastEmployeeDetails.id}`);
  };

  if (employeeDetails) {
    const parts = lastEmployeeDetails.appointmentLetterFile.split('/');
    lastPart = parts[parts.length - 1];
  }

  return (
    <div className="p-3 mt-2">
      <div className={`max-w-sm p-3 bg-[#f2f2f2] border-[#f2f2f2] rounded-lg shadow ${style}`}>
        <div className="flex flex-row items-center justify-between px-2">
          <a>
            <span className="mb-2 text-[12px] font-roboto tracking-tight text-gray-900 font-style: italic">Default Employee Details</span>
          </a>
          <PencilIcon onClick={(e) => navigateToForm(e)} className="h-4 w-4 hover:cursor-pointer" />
        </div>
        <div className="flex flex-row">
          <div className="flex flex-col m-1">
            {documentInfoLabels.map((label, index) => (
              <ul key={index} className="text-[12px] font-semibold p-1.5">
                {`${label} :`}
              </ul>
            ))}
          </div>
          <div className="flex flex-col m-1">
            <ul className="text-[12px] font-roboto font-medium p-1.5">
              {lastEmployeeDetails.companyName}
            </ul>
            <ul className="text-[12px] font-roboto font-medium p-1.5">
              {lastEmployeeDetails.documentType}
            </ul>
            <ul onClick={() => window.open(lastEmployeeDetails.appointmentLetterFile)} className="text-[12px] font-roboto font-medium p-1.5 hover:cursor-pointer">
              {lastPart}
            </ul>
            <ul onClick={() => window.open(lastEmployeeDetails.paySlipFile)} className="text-[12px] font-roboto font-medium p-1.5 hover:cursor-pointer">
              {lastEmployeeDetails.paySlipFile}
            </ul>
            <span className="text-[12px] font-roboto p-1.5 text-[#279847]">View Files</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastEmployeeDetailsCard;
