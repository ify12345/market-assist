import React, { useState } from "react";
import Image from "next/image";
import { FiPhone, FiMail } from "react-icons/fi";
import { IoChevronDown } from "react-icons/io5";
import FaceBookSvg from "../../public/icons/FaceBookSvg";
import TwitterSvg from "../../public/icons/TwitterSvg";
import { IoMenu } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import LinkedinSvg from "../../public/icons/LinkedinSvg";
import InstagramSvg from "../../public/icons/InstagramSvg";
import Link from "next/link";
import PrimaryButton from "./buttons/PrimaryButton";
import SecondaryButton from "./buttons/SecondaryButton";

const NavBar: React.FC = () => {
  const [selected, setSelected] = useState<{
    name: string;
    src: string;
  } | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const currency = [
    {
      name: "NGN",
      src: "/images/ng-flag.png",
    },
    {
      name: "USD",
      src: "/images/us-flag.png",
    },
  ];

  const handleSelect = (item: { name: string; src: string }) => {
    setSelected(item);
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col">
      <nav className="bg-black text-white px-[30px] lg:px-[102.3px] flex flex-col lg:flex-row lg:items-center py-[20px] justify-between text-[15px] font-[500] leading-[15px] gap-5 lg:gap-0">
        <div className="flex items-center gap-[55px] justify-between lg:justify-start">
          <div className="flex items-center gap-[10px]">
            <FiPhone />
            <p>+234 080 333 4789</p>
          </div>
          <div className="flex items-center gap-[10px]">
            <FiMail />
            <p>Marketassist@gmail.org</p>
          </div>
        </div>
        <div className="relative flex items-center gap-[37px] justify-between lg:justify-start">
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center cursor-pointer  rounded bg-black text-white w-[77px] gap-1"
          >
            {selected ? (
              <>
                <Image
                  src={selected.src}
                  alt={selected.name}
                  width={24}
                  height={24}
                  className=""
                />
                <span>{selected.name}</span>
              </>
            ) : (
              <>
                <Image
                  src="/images/ng-flag.png"
                  alt="nig-flag"
                  width={24}
                  height={24}
                  className=""
                />
                <span>NGN</span>
              </>
            )}
            <IoChevronDown />
          </div>
          {isOpen && (
            <div className="absolute top-full left-0 mt-2 w-[100px] p-1 bg-black text-white z-10">
              {currency.map((item) => (
                <div
                  key={item.name}
                  onClick={() => handleSelect(item)}
                  className="flex items-center  cursor-pointer hover:bg-gray-200"
                >
                  <Image
                    src={item.src}
                    alt={item.name}
                    width={24}
                    height={24}
                    className="mr-2"
                  />
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          )}
          <div className="flex items-center gap-1">
            <FaceBookSvg />
            <TwitterSvg />
            <LinkedinSvg />
            <InstagramSvg />
          </div>
        </div>
      </nav>
      <nav className="px-[30px] lg:px-[100px] flex  items-center justify-between py-[17px] bg-black lg:bg-white">
        <div className="w-[101px]">
          <img
            className="w-full object-cover lg:hidden"
            src="/logo/ma-logo.svg"
            alt="logo"
          />
          <img
            className="w-full object-cover hidden lg:block"
            src="/logo/ma-logo.png"
            alt="logo"
          />
        </div>

        <div className="lg:flex items-center gap-[24px] text-[#1B2605] leading-[16px] text-[16px] font-medium hidden ml-[150px]">
          <Link href="#about">Assist</Link>
          <Link href="#about">Shopper</Link>
          <Link href="#about">FAQ</Link>
          <Link href="#about">About</Link>
        </div>

        <div className="hidden lg:flex items-center gap-[24px]">
          <SecondaryButton>Sign In</SecondaryButton>
          <PrimaryButton className="bg-black">Sign Up</PrimaryButton>
        </div>

        <button className="block lg:hidden">
          <IoMenu size={36} color="white" />
        </button>
        {/* <button className="block lg:hidden">
          <IoCloseSharp size={36} color="white" />
        </button> */}
      </nav>
    </div>
  );
};

export default NavBar;
