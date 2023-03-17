import React from "react";
import { useRouter } from "next/router";

import { NavMap } from "@/helpers/NavMap";


const Header = () => {
  const router = useRouter();

  return (
    <div className='fixed top-0 left-16 sm:left-24 right-0 px-7 py-3 bg-gray-100 z-50'>
      <h2 className="font-DMsans text-2xl font-medium" >
        {router.pathname && NavMap[router.pathname]}
      </h2>
    </div>
  )
}
export default Header;