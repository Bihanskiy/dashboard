import React from 'react'
import TotalChangeCard from './cards/TotalChangeCard'
import { IChangeCardType } from "../types/ChangeCardType";

const cardsData: IChangeCardType[] = [
  {
    id: 1,
    type: "income",
    amount: "$632.000",
    percentageСhange: "+1.29%",
  },
  {
    id: 2,
    type: "outcome",
    amount: "$630.000",
    percentageСhange: "+1.14%",
  },
]

const TopCards = () => {
  return (
    <div className='grid md:grid-cols-[repeat(auto-fit,_minmax(300px,_330px))] grid-cols-1 gap-7 py-4'>
      {cardsData?.map(cardData => {
        return (
          <React.Fragment key={cardData.id}>
            <TotalChangeCard cardData={cardData} />
          </React.Fragment>
        )
      })}
    </div>
  )
}

export default TopCards