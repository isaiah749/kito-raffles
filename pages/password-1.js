import React, { useState } from "react";
import Navbar from "../components/Navbar";
import PasswordOneForm from "../components/PasswordForms/PasswordOneForm";
import Image from "next/image";
import shotOne from "./styles/Jag/Product Shots w Shadows no BG/2.png";
import HamburgerDropdown from "../components/HamburgerDropdown";

const PasswordOne = () => {
  const [open, setOpen] = useState();

  const toggle = () => {
    setOpen(!open);
  };
  return (
    <div className="overflow-y-hidden">
      <nav className="xl:hidden fixed top-0 z-50  ">
        <Navbar toggle={toggle} />
        <div className="transition-all duration-300 ease-in-out ">
          <HamburgerDropdown isOpen={open} toggle={toggle} />
        </div>
      </nav>
      <nav className="hidden xl:block">
        <Navbar />
      </nav>

      <main className="flex overflow-y-hidden flex-wrap">
        <div className="h-[50vh] w-full xl:h-[100vh] xl:w-[50%] bg-white flex items-center justify-center">
          <div className="relative h-[250px] w-[450px] lg:h-[550px] lg:w-[750px] xl:w-[850px] mt-10">
            <Image src={shotOne} layout="fill" objectFit="contain" />
          </div>
        </div>
        <div className="h-[50vh] w-full xl:h-[100vh] xl:w-[50%] flex items-center justify-center ">
          <div className="bg-black h-full w-full flex flex-wrap ">
            <div className="pt-5 lg:pt-14 xl:pt-64 w-full ">
              <div className="boxNeon  animate-pulse">
                <h2 className="md:text-[2rem] text-[1.3rem] ">
                  Fossil-X Jaguar Runner Phosphate Black
                </h2>
                <h2 className="text-center text-[1.2rem] mt-2 md:text-[1.5rem] ">
                  Coming Soon...
                </h2>
              </div>
            </div>
            <div className="-mt-10 lg:-mt-20 xl:-mt-48 w-full ">
              <div className="">
                <PasswordOneForm />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PasswordOne;

//  <div className="boxNeon animate-pulse">
// <h2 className="md:text-[2rem] text-[1.3rem] ">
//   Fossil-X Jaguar Runner Phosphate Black
// </h2>
// <h2 className="text-center text-[1.2rem] mt-2 md:text-[1.5rem] ">
//   Coming Soon...
// </h2>
// </div>
// <div className="">
// <PasswordOneForm />
// </div>
