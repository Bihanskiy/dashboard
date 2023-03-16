import React from 'react'
import CustomDatePicker from './form-elements/Datepicker';
import SearchInput from './form-elements/SearchInput';
import TransactionTable from './tables/TransactionTable';


const Transaction = () => {
  return (
    <div className='bg-main-purple p-5 rounded-[20px] min-h-[385px]'>
      <div className='flex items-start justify-between gap-3 flex-wrap pb-8'>
        <h5 className='text-white text-lg font-semibold'>
          Transaction
        </h5>
        <div className='max-w-[440px] w-full flex items-center gap-3'>
          <div className='w-full'>
            <SearchInput />
          </div>
          <div className='w-full'>
            <CustomDatePicker />
          </div>
        </div>
      </div>
        <TransactionTable />
    </div>
  )
}

export default Transaction;