import React, { FC } from 'react'
import { RiArrowRightUpLine } from "react-icons/ri";
import { RiArrowLeftDownLine } from "react-icons/ri";
import { IChangeCardType } from "../../types/ChangeCardType";

interface TotalChangeCardType {
  cardData: IChangeCardType
}

const TotalChangeCard: FC<TotalChangeCardType> = ({ cardData }) => {
  const isIncome = cardData.type === "income";
  const isOutcome = cardData.type === "outcome";

  return (
    <div className='bg-main-purple flex justify-between items-center flex-wrap gap-6 w-full border py-10 px-6 rounded-[20px]'>
      <div className={'bg-blue flex justify-center items-center shrink-0 w-11 h-11 text-white rounded-lg' + " " + (isOutcome && 'bg-[#6359E9]')}>
        {isIncome && <RiArrowLeftDownLine size={25} />}
        {isOutcome && <RiArrowRightUpLine size={25} />}
      </div>
      <div className='flex flex-col grow'>
        <p className='text-second-purple'>
          {isIncome && "Total Income"}
          {isOutcome && "Total Outcome"}
        </p>
        <p className='text-xl font-semibold text-white'>
          {cardData.amount}
        </p>
      </div>
      <p className={'bg-bg-green self-end flex justify-center items-center py-1 px-2 rounded-lg shrink-0' + " " + (isOutcome && 'bg-[#EB001B26]')}>
        <span className={'text-green-700 text-sm' + " " + (isOutcome && 'text-red-700')}>
          {cardData.percentageСhange}
        </span>
      </p>
    </div>
  )
}

export default TotalChangeCard