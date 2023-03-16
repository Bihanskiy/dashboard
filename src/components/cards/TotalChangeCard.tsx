import React from 'react'
import { RiArrowRightUpLine } from "react-icons/ri";
import { RiArrowLeftDownLine } from "react-icons/ri";

const TotalChangeCard = () => {
  return (
    <div className='bg-main-purple flex justify-between items-center flex-wrap gap-6 w-full border py-10 px-6 rounded-[20px]'>
      <div className='bg-blue flex justify-center items-center shrink-0 w-11 h-11 text-white rounded-lg'>
        <RiArrowLeftDownLine size={25} />
      </div>
      <div className='flex flex-col grow'>
        <p className='text-second-purple'>Total Income</p>
        <p className='text-xl font-semibold text-white'>$632.000</p>
      </div>
      <p className='bg-bg-green self-end flex justify-center items-center py-1 px-2 rounded-lg shrink-0'>
        <span className='text-green-700 text-sm'>+18%</span>
      </p>
    </div>
  )
}

export default TotalChangeCard