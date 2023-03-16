import React from "react";
import { useRouter } from "next/router";

import { NavMap } from "@/helpers/NavMap";


const Header = () => {
  const router = useRouter();

  return (
    <div className='px-7 py-3 bg-gray-100'>
      <h2 className="font-DMsans text-2xl font-medium" >
        {router.pathname && NavMap[router.pathname]}
      </h2>
    </div>
  )
}
export default Header;