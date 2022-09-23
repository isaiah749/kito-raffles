import React, { useState } from "react";
import logoOne from "../../pages/styles/Identity/kitoLogoBlack.png";
import Image from "next/image";
import { Listbox } from "@headlessui/react";
import { db, passwordOneCol, addDoc } from "../../firebase/firebase";

const countries = [
  { id: 1, country: "USA" },
  { id: 2, country: "GBR" },
  { id: 3, country: "CAN" },
  { id: 4, country: "GER" },
  { id: 5, country: "FRA" },
  { id: 6, country: "PRI" },
  { id: 7, country: "NLD" },
  { id: 8, country: "JPN" },
  { id: 9, country: "ITA" },
  { id: 10, country: "AUS" },
  { id: 11, country: "PRK" },
  { id: 12, country: "CHE" },
  { id: 13, country: "AUT" },
  { id: 14, country: "MEX" },
  { id: 15, country: "CHL" },
  { id: 16, country: "BEL" },
  { id: 17, country: "IRL" },
  { id: 18, country: "FIN" },
  { id: 19, country: "DNK" },
  { id: 20, country: "CZE" },
  { id: 21, country: "RUS" },
  { id: 22, country: "ISR" },
  { id: 23, country: "SWE" },
  { id: 24, country: "POL" },
  { id: 25, country: "ROU" },
  { id: 26, country: "IND" },
  { id: 27, country: "TUR" },
  { id: 28, country: "HGK" },
  { id: 29, country: "NOR" },
  { id: 30, country: "BRA" },
  { id: 31, country: "ZAF" },
  { id: 32, country: "MYS" },
  { id: 33, country: "PHL" },
  { id: 34, country: "ARE" },
  { id: 35, country: "CHN" },
  { id: 36, country: "PRT" },
  { id: 37, country: "TWN" },
  { id: 38, country: "SVK" },
  { id: 39, country: "HUN" },
  { id: 40, country: "LUX" },
  { id: 41, country: "GRC" },
  { id: 42, country: "COL" },
  { id: 43, country: "ECU" },
  { id: 44, country: "ARG" },
  { id: 45, country: "IDN" },
  { id: 46, country: "CRI" },
  { id: 47, country: "PAK" },
  { id: 48, country: "THA" },
  { id: 49, country: "GTM" },
  { id: 50, country: "SAU" },
  { id: 51, country: "UKR" },
  { id: 52, country: "VNM" },
  { id: 53, country: "SVN" },
  { id: 54, country: "GHA" },
  { id: 55, country: "HRV" },
  { id: 56, country: "NGA" },
];

const PasswordOneForm = () => {
  const [subCountry, setSubCountry] = useState(countries[0]);
  const [subPhone, setSubPhone] = useState("");

  const entrySubmit = (e) => {
    e.preventDefault();
    const form = document.querySelector("#entryForm");
    const subSuccess = document.querySelector('#subSuccess');
    const subFail = document.querySelector('#subFail');

    if (subPhone != '') {
        console.log('succss');
        addDoc(passwordOneCol, {
            Country: subCountry,
            Phone: subPhone
        })
        .then(() => {
            form.style.display = 'none'
            subSuccess.classList.remove('hide')
        })
        .catch((error) => {
            form.style.display = 'none';
            subFail.classList.remove('hide')
        })
    } else {
        console.log('error');
        form.style.display = 'none';
        subFail.classList.remove('hide')
    }

  };

  return (
    <section className="border-2 mt-5 h-[max-content] bg-black text-white border-white w-[95%] mx-auto max-w-[700px] ">
      <form onSubmit={entrySubmit} id="entryForm">
        <h2 className="font-bold text-xl px-2 w-[fit-content] ">
          Enter Phone Number
        </h2>
        <h2 className="text-xl -mt-2 pl-[8px] w-[fit-content] mb-3 ">
          to receive notifications
        </h2>
        {/* Form Content Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 ">
          {/* Entry Container */}
          <div className="flex items-center pb-3 px-2 flex-1 md:col-start-1 md:col-end-3 ">
            <Listbox
              id="country"
              name="country"
              as="div"
              className="mr-2 border-2 border-white relative border-b-0"
              value={subCountry}
              onChange={setSubCountry}>
              <Listbox.Button className="w-20 md:w-32 border-b-2 border-white h-10 ">
                <div className="text-sm font-bold">{subCountry.country}</div>
              </Listbox.Button>
              <Listbox.Options className="text-center py-1 absolute border-2 border-white border-t-0 left-0 -bottom-24 bg-black text-white focus:outline-none w-[82px] md:w-[130px] overflow-scroll max-h-24 ">
                {countries.map((country, index) => (
                  <Listbox.Option
                    className="cursor-pointer border-b-2 border-white "
                    key={index}
                    value={country}>
                    {country.country}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Listbox>
            <input
              type="number"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Phone Number"
              value={subPhone}
              onChange={(e) => setSubPhone(e.target.value)}
              className="border-2 w-full border-white pl-1 h-11 bg-black "
            />
            <div className="flex items-center ml-2 justify-center h-10">
              <button
                type="submit"
                form="entryForm"
                className="border-2 border-white px-2 py-2 font-semibold ">
                Subscribe
              </button>
            </div>
          </div>
          <div className="bg-gray-300 border-t-2 border-white flex items-center justify-center p-5 w-full md:col-start-3 md:col-end-4 md:border-t-0 md:border-l-2 md:mt-[-60px] ">
            <div className="relative h-[50px] flex items-center justify-center w-[150px] mx-auto ">
              <Image src={logoOne} layout="fill" objectFit="contain" />
            </div>
          </div>
        </div>
      </form>
      <div id='subSuccess' className='font-title hide text-[1.15rem] lg:text-[2.5rem] tracking-wide  '>
				<p className='text-green-500 text-center '>Submission Recieved!</p>
				<p className="text-center">Thank you for subscribing to KITO!</p>
			</div>

			<div id='subFail' className='font-title hide text-[1.15rem] text-center lg:text-[2rem] tracking-wide'>
				<p className='text-red-500'>Submission Failed!</p>
				<p>There seems to be an error with your submission!</p>
				<p>Please try again or contact support for assistance.</p>
			</div>
    </section>
  );
};

export default PasswordOneForm;
