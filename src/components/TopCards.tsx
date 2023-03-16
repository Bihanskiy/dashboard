import React from 'react'
import TotalChangeCard from './cards/TotalChangeCard'

const TopCards = () => {
  return (
    <div className='grid md:grid-cols-[repeat(auto-fit,_minmax(300px,_330px))] grid-cols-1 gap-7 py-4'>
      <TotalChangeCard />
      <TotalChangeCard />
    </div>
  )
}

export default TopCards