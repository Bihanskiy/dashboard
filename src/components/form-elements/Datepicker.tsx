import React, { useState } from 'react'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import { RiCalendar2Line } from "react-icons/ri";
import { RiArrowDownSLine } from "react-icons/ri";


const CustomDatePicker = () => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  return (
    <div className="relative">
      <span className="absolute inset-y-0 left-0 flex items-center pl-2 text-second-purple">
        <RiCalendar2Line size={18} />
      </span>
      <DatePicker
        selectsRange={true}
        startDate={startDate}
        endDate={endDate}
        onChange={(update: any) => {
          setDateRange(update);
        }}
        dateFormat="MMM d"
        className="border border-[#AEABD887] bg-transparent rounded-md h-10 w-full text-second-purple focus:outline-none focus:border-sky-500 px-9"
      />
      <span className="absolute inset-y-0 right-0 flex items-center pr-2 text-second-purple">
        <RiArrowDownSLine size={20} />
      </span>
    </div>
  );
}

export default CustomDatePicker