import { PlusIcon } from '@heroicons/react/24/outline'
import React from 'react'

const Chip = ({label}) => {
  return (
    <div className='flex flex-row text-center hover:cursor-pointer'>
        <PlusIcon className='h-4 w-4 text-[#ce3434] mr-1' />
        <span className='text-[12px] font roboto font-medium underline'>{label}</span>
    </div>
  )
}

export default Chip