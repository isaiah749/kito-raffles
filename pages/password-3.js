import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
import shotOne from "./styles/Jag/Product Shots w Shadows no BG/1.png";
import shotTwo from "./styles/Jag/Product Shots w Shadows no BG/2.png";
import shotThree from "./styles/Jag/Product Shots w Shadows no BG/3.png";
import shotFour from "./styles/Jag/Product Shots w Shadows no BG/4.png";
import logoOne from "./styles/Identity/kitoLogoGrey.png";
import PasswordThreeForm from "../components/PasswordForms/PasswordThreeForm";
import HamburgerDropdown from "../components/HamburgerDropdown";

const Password3 = () => {
  const [open, setOpen] = useState();

  const toggle = () => {
    setOpen(!open);
  };
  return (
    <div className="">
      <nav className="xl:hidden fixed top-0 z-50  ">
        <Navbar toggle={toggle} />
        <div className="transition-all duration-300 ease-in-out ">
          <HamburgerDropdown isOpen={open} toggle={toggle} />
        </div>
      </nav>
      <nav className="hidden xl:block">
        <Navbar />
      </nav>
      {/* Page Container */}
      <main className="overflow-x-hidden relative pt-20 ">
        {/* Background Images Container */}
        <section className="relative">
          <div className="flex items-center justify-center lg:justify-start -mt-10 mb-5 lg:h-[300px] lg:-ml-40  xl:-ml-20 xl:mt-0 ">
            <div className="relative h-[200px] w-[350px] lg:h-[250px] lg:w-[550px] xl:w-[600px] mb-5 ">
              <Image src={shotTwo} layout="fill" objectFit="contain" />
            </div>
          </div>

          <div className="flex items-center justify-start lg:justify-end lg:h-[300px] xl:justify-center xl:-mt-20">
            <div className="relative lg:hidden xl:block h-[200px] w-[350px] lg:h-[250px] lg:w-[550px] xl:h-[320px] xl:w-[600px] mb-14 mt-10 -ml-10 ">
              <Image src={shotOne} layout="fill" objectFit="contain" />
            </div>
            <div className="hidden lg:block relative xl:hidden h-[200px] lg:h-[250px] lg:w-[550px] mb-5 ">
              <Image src={shotFour} layout="fill" objectFit="contain" />
            </div>
          </div>
          <div className="xl:flex items-center justify-between ">
            <div className="flex items-center justify-start lg:justify-end -ml-16 h-[300px] lg:h-[300px]  lg:-mr-10 xl:-mt-0 xl:ml-10 ">
              <div className="relative h-[200px] w-[350px] lg:h-[250px] xl:h-[300px] lg:w-[550px] xl:w-[650px] mb-5 ">
                <Image src={shotThree} layout="fill" objectFit="contain" />
              </div>
            </div>

            <div className="hidden xl:flex items-center justify-end lg:h-[300px] xl:mr-10">
              <div className="relative h-[200px] w-[350px] lg:w-[550px] xl:h-[320px] xl:w-[550px] mb-5 ">
                <Image src={shotFour} layout="fill" objectFit="contain" />
              </div>
            </div>
          </div>
          {/* Main Content Container */}
          <div className="fixed h-[250px] w-[fit-content] top-40 right-0 left-0 mx-auto ">
            <div className="w-full flex items-center justify-center ">
              <div className="relative h-[120px] w-[400px] lg:h-[180px] lg:w-[600px] ">
                <Image src={logoOne} layout="fill" objectFit="contain" />
              </div>
            </div>
            <div className="w-full ">
              <PasswordThreeForm />
            </div>
          </div>
        </section>
        <div className="fixed bottom-0 right-0">
          <div className="relative h-[120px] w-[120px] lg:h-[150px] lg:w-[150px] ">
            <Image
              layout="fill"
              src="https://cdn.shopify.com/s/files/1/0274/1351/2301/files/SkullGraphicSpinningsmall.gif?v=1627671973"
              objectFit="contain"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Password3;
