import React from 'react'

const Title = ({title, breadCrums}) => {
  return (
    <div className='flex flex-col items-center text-center justify-center space-y-2 mt-5'>
        <h1 className='text-lg font-bold text-[#C4302B]'>{title}</h1>
        <p className='text-[12px] font-semibold'>{breadCrums}</p>
    </div>
  )
}

export default Title