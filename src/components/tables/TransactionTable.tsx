import React from 'react';
export const data = [
  {
    id: 1,
    name: {
      first: 'John',
      last: 'Smith',
    },
    total: 2795.95,
    status: 'On Hold',
    method: 'PayPal',
    date: '15 Minutes ago',
  },
  {
    id: 2,
    name: {
      first: 'Chris',
      last: 'Adams',
    },
    total: 1195.95,
    status: 'Processing',
    method: 'PayPal',
    date: '23 Minutes ago',
  },
  {
    id: 3,
    name: {
      first: 'Sarah',
      last: 'Smith',
    },
    total: 495.85,
    status: 'Completed',
    method: 'Visa',
    date: '1 Hour ago',
  },
  {
    id: 4,
    name: {
      first: 'Joseph',
      last: 'Choo',
    },
    total: 150.45,
    status: 'Processing',
    method: 'MasterCard',
    date: '1 Hour ago',
  },
  {
    id: 5,
    name: {
      first: 'Steve',
      last: 'Harding',
    },
    total: 175.25,
    status: 'On Hold',
    method: 'PayPal',
    date: '2 Hour ago',
  },
  {
    id: 6,
    name: {
      first: 'Laura',
      last: 'Croft',
    },
    total: 1295.75,
    status: 'Completed',
    method: 'Check',
    date: '3 Hour ago',
  },
  {
    id: 7,
    name: {
      first: 'Michael',
      last: 'Jones',
    },
    total: 89.95,
    status: 'Completed',
    method: 'MasterCard',
    date: '3 Hour ago',
  },
  {
    id: 8,
    name: {
      first: 'James',
      last: 'Bond',
    },
    total: 689.45,
    status: 'Completed',
    method: 'Visa',
    date: '7 Hour ago',
  },
  {
    id: 9,
    name: {
      first: 'Haley',
      last: 'Whiting',
    },
    total: 14.99,
    status: 'Completed',
    method: 'PayPal',
    date: '1 Day ago',
  },
  {
    id: 10,
    name: {
      first: 'Tim',
      last: 'Thomas',
    },
    total: 218.99,
    status: 'Completed',
    method: 'MasterCard',
    date: '1 Day ago',
  },
];


const TransactionTable = () => {
  return (
    <div className='w-full m-auto p-4 overflow-y-auto'>
      <div className='my-3 p-2 grid sm:grid-cols-4 grid-cols-3 gap-4 items-center justify-between cursor-pointer'>
        <span className='text-second-purple text-sm'>Name</span>
        <span className='text-second-purple text-sm'>Date</span>
        <span className='text-second-purple text-sm'>Amount</span>
        <span className='hidden sm:grid text-second-purple text-sm'>Status</span>
      </div>
      <ul>
        {data.map((order, id) => (
          <li
            key={id}
            className='hover:bg-bg-purple rounded-lg my-3 p-2 grid sm:grid-cols-4 grid-cols-3 gap-4 items-center justify-between cursor-pointer'>
            <p className='break-words text-white text-base'>Adobe After Effect</p>
            <p className='break-words text-white text-base'>{order.name.first}@gmail.com</p>
            <p className='break-words text-white text-base'>{order.date}</p>
            <p className='hidden sm:flex bg-bg-green flex justify-center items-center py-1 px-2 rounded-lg shrink-0 max-w-[80px]'>
              <span className='text-green-700 text-base'>Deposited</span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionTable