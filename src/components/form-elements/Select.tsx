import React, { useState } from 'react'


const Select = () => {
  const [selectedYear, setSelectedYear] = useState('');

  return (
    <select
      name="year"
      id="year-select"
      value={selectedYear}
      onChange={e => setSelectedYear(e.target.value)}
      className="text-second-purple block bg-light-purple w-full rounded-md py-2 pl-1 shadow-sm border border-[#AEABD880] focus:outline-none focus:border-sky-500 sm:text-sm "
    >
      <option value="dog">2020</option>
      <option value="cat">2021</option>
      <option value="hamster">2022</option>
      <option value="parrot">2023</option>
    </select>
  )
}

export default Select