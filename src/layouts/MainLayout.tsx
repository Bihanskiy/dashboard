import React, { FC } from 'react'

import Header from '@/components/Header';


interface LayoutPropsType {
  children: React.ReactNode;
}


const Layout: FC<LayoutPropsType> = ({ children }) => {

  return (
    <div className='flex flex-col m-0 min-h-screen'>
      <Header />
      <main className='grow bg-gray-100 py-[70px]'>
        <div
          className='px-3 sm:p-7 max-w-[1536px]'
        >
          {children}
        </div>
      </main>
    </div>
  );
}

export default Layout;
