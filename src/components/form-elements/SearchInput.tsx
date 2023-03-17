import React, { FC } from 'react'
import { RiSearchLine } from "react-icons/ri";

interface SearchInputType {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: FC<SearchInputType> = ({ value, onChange }) => {
  return (
    <label className="relative block">
      <span className="sr-only">Search</span>
      <span className="absolute inset-y-0 right-0 flex items-center pr-2 text-second-purple">
        <RiSearchLine size={18} />
      </span>
      <input
        value={value}
        onChange={onChange}
        className="placeholder:text-slate-400 text-second-purple block bg-light-purple w-full rounded-md py-2 pl-3 pr-9 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm h-10"
        placeholder="Search for anything..."
        type="text"
        name="search"
      />
    </label>
  )
}

export default SearchInput