import React, { FC, useState, useMemo } from 'react'
import CustomDatePicker from './form-elements/Datepicker';
import SearchInput from './form-elements/SearchInput';
import TransactionTable from './tables/TransactionTable';
import { ITransactionData } from '../types/TransactionType';
import { IError } from '../types/RequestsType';

interface TransactionType {
  transactionData: {
    data: ITransactionData[];
    error: IError;
  }
}


const Transaction: FC<TransactionType> = ({ transactionData }) => {
  const [searchValue, setSearchValue] = useState("");

  const changeSearchValueHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  }

  const filteredTransaction = useMemo(() => {
    return transactionData?.data?.filter(transaction => transaction.creditorName.toLowerCase().includes(searchValue.toLowerCase()));
  }, [transactionData, searchValue])

  return (
    <div className='bg-main-purple p-5 rounded-[20px] h-[385px]'>
      <div className='flex items-start justify-between gap-3 flex-wrap pb-8'>
        <h5 className='text-white text-lg font-semibold'>
          Transaction
        </h5>
        <div className='max-w-[440px] w-full flex items-center gap-3'>
          <div className='w-full'>
            <SearchInput
              value={searchValue}
              onChange={changeSearchValueHandle}
            />
          </div>
          <div className='w-full'>
            <CustomDatePicker />
          </div>
        </div>
      </div>
      {transactionData?.error ?
        <p className='text-red-600 text-center my-5'>
          Ooops... We have some problem: {transactionData.error.message}
        </p>
        :
        <TransactionTable transactions={filteredTransaction} />
      }
    </div>
  )
}

export default Transaction;