import React, { useState } from "react";
import Image from "next/image";
import { FiPhone, FiMail } from "react-icons/fi";
import { IoChevronDown } from "react-icons/io5";
import FaceBookSvg from "../../public/icons/FaceBookSvg";
import TwitterSvg from "../../public/icons/TwitterSvg";
import { IoMenu } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import LinkedinSvg from "../../public/icons/LinkedinSvg";
import InstagramSvg from "../../public/icons/InstagramSvg";
import Link from "next/link";
import PrimaryButton from "./buttons/PrimaryButton";
import SecondaryButton from "./buttons/SecondaryButton";

const NavBar: React.FC = () => {
  const [selected, setSelected] = useState<{
    name: string;
    src: string;
  } | null>(null)
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
    <div className="flex flex-col fixed w-full z-50">
      <nav className="bg-black  text-white px-[30px] lg:px-[102.3px] flex flex-col lg:flex-row lg:items-center py-[20px] justify-between text-[15px] font-[500] leading-[15px] gap-5 lg:gap-0">
        <div className="hidden lg:flex items-center gap-[55px] justify-between lg:justify-start">
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
      <Disclosure as="nav" className='bg-black  lg:bg-white'>
        <div className="px-[30px] lg:px-[100px] flex  items-center justify-between py-[17px]">
          <Link href="/" className="w-[101px]">
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
          </Link>

          <div className="lg:flex items-center gap-[24px] text-[#1B2605] leading-[16px] text-[16px] font-medium hidden ml-[150px]">
            <Link href="#assist" className="hover:text-primary transition-all delay-100 hover:border-b hover:border-b-primary">Assist</Link>
            <Link href="#shopper" className="hover:text-primary transition-all delay-100 hover:border-b hover:border-b-primary">Shopper</Link>
            <Link href="#faq" className="hover:text-primary transition-all delay-100 hover:border-b hover:border-b-primary">FAQ</Link>
            <Link href="#about" className="hover:text-primary transition-all delay-100 hover:border-b hover:border-b-primary">About</Link>
          </div>

          <div className="hidden lg:flex items-center gap-[24px]">
            <SecondaryButton>Sign In</SecondaryButton>
            <PrimaryButton className="bg-black">Sign Up</PrimaryButton>
          </div>
          <div className="-mr-2 flex lg:hidden">
            {/* Mobile menu button */}
            <DisclosureButton className="group relative inline-flex items-center justify-center  text-gray-400  hover:text-white focus:outline-none">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block h-6 w-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden h-6 w-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>
        </div>

        <DisclosurePanel className="lg:hidden fixed top-0 w-full h-screen z-50 bg-primary pt-6">
          <DisclosureButton className="group absolute  right-0 inline-flex items-center justify-end  text-white  hover:text-white focus:outline-none">
            <XMarkIcon
              aria-hidden="true"
              className="hidden size-10 group-data-[open]:block"
            />
          </DisclosureButton>

          <div className="border-t border-primary bg-primary pb-3 pt-8">
            <div className="mt-3 space-y-1 px-2">
              <DisclosureButton
                as="a"
                href="/assist"
                className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-white hover:text-primary"
              >
                Assist
              </DisclosureButton>
            </div>
            <div className="mt-3 space-y-1 px-2">
              <DisclosureButton
                as="a"
                href="/shopper"
                className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-white hover:text-primary"
              >
                Shopper
              </DisclosureButton>
            </div>
            <div className="mt-3 space-y-1 px-2">
              <DisclosureButton
                as="a"
                href="/faq"
                className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-white hover:text-primary"
              >
                Faq
              </DisclosureButton>
            </div>
            <div className="mt-3 space-y-1 px-2">
              <DisclosureButton
                as="a"
                href="/about"
                className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-white hover:text-primary"
              >
                About
              </DisclosureButton>
            </div>
          </div>

          <div className="space-y-1 px-2 pb-3 pt-2 flex flex-col">
            <DisclosureButton
              as="a"
              href="/sign-in"
              className="rounded-md px-3 py-2 text-base font-medium text-white border-white border hover:scale-95 justify-center flex bg-primary transition-all duration-300"
            >
                 Sign In
               
            </DisclosureButton>
            <DisclosureButton
              as="a"
              href="/sign-up"
              className="rounded-md px-3 py-2 text-base font-medium text-primary justify-center flex bg-white hover:scale-95 transition-all duration-300"
            >
                 Sign up
               
            </DisclosureButton>
         
          </div>
        </DisclosurePanel>
      </Disclosure>
    </div>
  );
};

export default NavBar;
