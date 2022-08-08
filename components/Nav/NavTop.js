import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import bagIcon from '../../pages/styles/Icons/bag-icon-nav.svg'
import Image from 'next/image'
import logo from '../../pages/styles/KW.svg'
import { selectItems } from '../../slices/basketSlice';
import { useSelector } from 'react-redux';
// Does particle background at 2hours and 18minutes

const NavTop = () => {
    const router = useRouter();
    const items = useSelector(selectItems)
  return (
    <div className="fixed top-0 text-center w-full flex items-center justify-between z-[100000000] px-5 xl:px-10  ">
        <div className="flex items-center justify-between cursor-pointer ">
            <div onClick={() => router.push('/')} className="relative h-[60px] w-[60px] xl:h-[75px] xl:w-[75px] ">
              <Image src={logo} layout='fill' objectFit="contain" />
            </div>

        </div>
      <div onClick={() => router.push('/')} className="xl:h-[100px] xl:w-[120px] h-[75px] w-[90px] cursor-pointer flex items-center justify-center ">
        <img
          src="https://cdn.shopify.com/s/files/1/0274/1351/2301/files/SkullGraphicSpinningsmall.gif?v=1627671973"
          className="w-full"
          alt=""
        />
      </div>
      <div className="">
      <div className='block relative cursor-pointer'>
					<span className='absolute top-[1rem] right-[1.25rem] text-[.8rem] text-black font-semibold'>
						{items.length}
					</span>
					<Image onClick={() => router.push('/checkout')} className='' src={bagIcon} height={45} width={45} />
				</div>
      </div>
    </div>
  );
};

export default NavTop;
