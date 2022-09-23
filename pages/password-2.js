import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
import shotOne from "./styles/Jag/Product Shots w Shadows no BG/1.png";
import shotTwo from "./styles/Jag/Product Shots w Shadows no BG/2.png";
import shotThree from "./styles/Jag/Product Shots w Shadows no BG/3.png";
import shotFour from "./styles/Jag/Product Shots w Shadows no BG/4.png";
import PasswordTwoForm from "../components/PasswordForms/PasswordTwoForm";
import shotFive from "./styles/Jag/Scanned/Dunes_Scanned-26.png";
import shotSix from "./styles/Jag/Edits/Scanned Edits/Edit4scan.png";
// import shotSeven from "./styles/Jag/Scanned/Dunes_scanned-11.png";
// import shotEight from "./styles/Jag/Edits/Scanned Edits/Edit9scan.png";
// import shotNine from "./styles/Jag/Edits/Scanned Edits/Edit7scan.png";
// import shotTen from "./styles/Jag/Scanned/Dunes_scanned-24.png";
// import shotEleven from "./styles/Jag/Scanned/Dunes_scanned-21.png";
import shotTwelve from "./styles/Jag/Scanned/Dunes_scanned-7.png";
import shotThirt from "./styles/Jag/Edits/Scanned Edits/Edit5Scanned.png";
import shotFourt from "./styles/Jag/Edits/Scanned Edits/Edit10scan.png";
import HamburgerDropdown from "../components/HamburgerDropdown";

const PasswordTwo = () => {
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
      <div className="px-2 ">
        <section className="relative pt-20 grid grid-cols-2 lg:grid-cols-3 gap-1 items-center  ">
          {/* -------------------- Column One ----------------------- */}
          <div className="w-full h-[100vh] ">
            <div className="border-2 border-black pb-10 px-2 mt-5 mb-3 rounded-md bg-white shadow-xl ">
              <div className="relative h-[100px] xl:h-[250px] ">
                <Image src={shotOne} layout="fill" objectFit="contain" />
              </div>
            </div>

            {/* Verticle Image */}
            <div className="border-2 border-black pb-10 mt-5 px-2 rounded-md bg-white shadow-xl ">
              <div className="relative h-[290px] md:h-[350px] xl:h-[600px] ">
                <Image src='https://cdn.shopify.com/s/files/1/0274/1351/2301/files/Dunes_Scanned-21.png?v=1663954486' layout="fill" objectFit="contain" />
              </div>
            </div>
            <div className="border-2 border-black mt-8 mb-6 pb-10 px-2 rounded-md bg-white shadow-xl ">
              <div className="relative h-[100px] xl:h-[250px] ">
                <Image src={shotTwo} layout="fill" objectFit="contain" />
              </div>
            </div>
            <div className="border-2 border-black pb-10 px-2 mb-6 mt-10 rounded-md bg-white shadow-xl ">
              <div className="relative h-[245px] md:h-[330px] xl:h-[600px] ">
                <Image
                  src="https://cdn.shopify.com/s/files/1/0274/1351/2301/files/image_d46492b8-bba6-4398-9817-6e53fcb769a1.jpg?v=1662648243"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
            <div className="border-2 border-black pb-5 mb-8 px-2 rounded-md bg-white shadow-xl ">
              <div className="relative h-[220px] xl:h-[450px] ">
                <Image src='https://cdn.shopify.com/s/files/1/0274/1351/2301/files/hori3.png?v=1654881203' layout="fill" objectFit="contain" />
              </div>
            </div>
            <div className="border-2 border-black pb-10 px-2 rounded-md bg-white shadow-xl ">
              <div className="relative h-[260px] md:h-[380px] xl:h-[650px] ">
                <Image src='https://cdn.shopify.com/s/files/1/0274/1351/2301/files/Dunes_Scanned-24.png?v=1663954483' layout="fill" objectFit="contain" />
              </div>
            </div>
          </div>
          {/* -------------------- Column Two ----------------------- */}
          <div className="w-full flex-col h-[100vh] items-center ">
            <div className="border-2 border-black pb-10 px-2 mb-5 -mt-2 rounded-md bg-white shadow-xl ">
              <div className="relative h-[100px] xl:h-[250px] ">
                <Image src={shotThree} layout="fill" objectFit="contain" />
              </div>
            </div>
            <div className="border-2 border-black pb-10 px-2 rounded-md bg-white shadow-xl ">
              <div className="relative h-[100px] xl:h-[250px] ">
                <Image src={shotFour} layout="fill" objectFit="contain" />
              </div>
            </div>
            {/* Verticle Image */}
            <div className="border-2 border-black pb-10 px-2 mt-5 mb-4 rounded-md bg-white shadow-xl ">
              <div className="relative h-[290px] md:h-[350px] xl:h-[650px] ">
                <Image src='https://cdn.shopify.com/s/files/1/0274/1351/2301/files/Dunes_Scanned-11.png?v=1663954485' layout="fill" objectFit="contain" />
              </div>
            </div>
            <div className="border-2 border-black pb-10 px-2 mb-9 rounded-md bg-white shadow-xl ">
              <div className="relative h-[160px] lg:h-[225px] xl:h-[400px] ">
                <Image
                  src="https://cdn.shopify.com/s/files/1/0274/1351/2301/files/hori3.png?v=1654881203"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
            <div className="border-2 border-black pb-5 mb-3 px-2 rounded-md bg-white shadow-xl ">
              <div className="relative h-[160px] md:h-[225px] xl:h-[400px] ">
                <Image src={shotThirt} layout="fill" objectFit="contain" />
              </div>
            </div>
            {/* Verticle Image */}
            <div className="border-2 border-black pb-10 px-2 rounded-md bg-white shadow-xl ">
              <div className="relative h-[240px] md:h-[340px] xl:h-[650px] ">
                <Image src={shotFourt} layout="fill" objectFit="contain" />
              </div>
            </div>
          </div>
          {/* -------------------- Column Three ----------------------- */}
          <div className="w-full h-[100vh] hidden lg:block ">
            {/* Verticle Image */}
            <div className="border-2 border-black pb-10 mt-3 px-2 rounded-md bg-white shadow-xl ">
              <div className="relative h-[350px] xl:h-[650px] ">
                <Image src={shotFive} layout="fill" objectFit="contain" />
              </div>
            </div>
            <div className="border-2 border-black pb-10 px-2 mt-5 mb-3 rounded-md bg-white shadow-xl ">
              <div className="relative h-[225px] xl:h-[450px] ">
                <Image src={shotSix} layout="fill" objectFit="contain" />
              </div>
            </div>

            <div className="border-2 border-black mt-8 mb-6 pb-10 px-2 rounded-md bg-white shadow-xl ">
              <div className="relative h-[375px] xl:h-[650px] ">
                <Image
                  src="https://cdn.shopify.com/s/files/1/0274/1351/2301/files/Image_20220503_121103.jpg?v=1651771124"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
            <div className="border-2 border-black pb-10 px-2 mb-6 mt-10 rounded-md bg-white shadow-xl ">
              <div className="relative h-[340px] xl:h-[650px] ">
                <Image src='https://cdn.shopify.com/s/files/1/0274/1351/2301/files/Dunes_Scanned-4.png?v=1663954597' layout="fill" objectFit="contain" />
              </div>
            </div>
            <div className="border-2 border-black pb-10 mb-9 px-2 rounded-md bg-white shadow-xl ">
              <div className="relative lg:h-[215px] xl:h-[450px] ">
                <Image src={shotTwelve} layout="fill" objectFit="contain" />
              </div>
            </div>
          </div>
          <section className="fixed top-[10rem] right-0 mx-auto left-0 border-2 border-black h-[max-content] py-2 w-[370px] lg:w-[600px] backdrop-blur-md bg-opacity-30 bg-white px-2 ">
            <h2 className="text-black font-bold text-center text-2xl lg:text-3xl ">
              Fossil-X Jaguar Runner
            </h2>
            <PasswordTwoForm />
          </section>
        </section>
      </div>
    </div>
  );
};

export default PasswordTwo;
