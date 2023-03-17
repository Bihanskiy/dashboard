import React, { FC } from 'react';

import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

import { RxPerson } from 'react-icons/rx';
import { FiSettings } from 'react-icons/fi';
import Logo from '../assets/images/logo.png';
import { IconType } from 'react-icons';

interface NavMapType {
  name: string;
  path: string;
  icon: JSX.Element;
}

const navMap: NavMapType[] = [
  {
    name: "Home",
    path: "/",
    icon: <RxPerson size={22} />,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: <FiSettings size={22} />,
  },
];

interface SidebarType {
  children: React.ReactNode;
}

const Sidebar: FC<SidebarType> = ({ children }) => {
  const router = useRouter();

  return (
    <div className='flex'>
      <div className='fixed w-16 sm:w-24 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between'>
        <div className='flex flex-col items-center'>
          <Link href='/'>
            <div>
              <Image
                src={Logo}
                width={50}
                height={50}
                alt={'Logo image'}
              />
            </div>
          </Link>
          <span className='border-b-[1px] border-gray-200 w-full p-2'></span>
          {navMap.map((nav) => (
            <Link
              key={nav.name}
              href={nav.path}>
              <div className={'hover:bg-gray-200 cursor-pointer my-3 p-3 rounded-full inline-block' + " " + (router.pathname === nav.path ? "text-black" : "text-gray-400")}>
                {nav.icon}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className='ml-16 sm:ml-24 w-full'>{children}</div>
    </div>
  );
};

export default Sidebar;