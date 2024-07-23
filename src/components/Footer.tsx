import React from "react";
import SupportSvg from "../../public/icons/SupportSvg";
import GlobalSvg from "./GlobalSvg";

const Footer = () => {
  return (
    <div className="mx-[30px] lg:mx-[100px] flex flex-col justify-center lg:flex-row gap-[299px]  border-b-[0.3px] border-black pt-[107px]  pb-[209px]">
      <div className="flex flex-col gap-[40px] ">
        <div className="w-[179px]">
          <img
            className="w-full object-cover"
            src="/logo/footer-logo.svg"
            alt="logo"
          />
        </div>
        <div className="flex items-center gap-[16px] w-full">
          <button className="w-[135px] h-[40px]">
            <img
              className="w-full object-cover h-full"
              src="/images/apple.svg"
              alt="logo"
            />
          </button>
          <button className="w-[135px] h-[60px]">
            <img
              className="w-full object-cover h-full"
              src="/images/playstore.svg"
              alt="logo"
            />
          </button>
        </div>
        <div className="pt-[46px] flex flex-col gap-[29px]">
          <div className="flex items-center gap-[26px]">
            <SupportSvg />
            <span className="font-[500] text-[16px] leading-[19.2px] tracking-[1%]">
              Support
            </span>
          </div>
          <div className="flex items-center gap-[26px]">
            <GlobalSvg />
            <span className="font-[500] text-[16px] leading-[19.2px] tracking-[1%]">
              English (Nigeria)
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[62px]">
        <div className="flex flex-col lg:flex-row  gap-[103px]">
          <div className="flex flex-col lg:items-center">
            <p className="text-[20px] leading-[27.28px] font-[600] text-center">
              Grocery Delivery
            </p>
            <ul className="pt-[19px] flex flex-col gap-2">
              <li className="text-[16px] font-[400] leading-[22px] decoration-current  list-disc">
                How It Works
              </li>
              <li className="text-[16px] font-[400] leading-[22px] decoration-current  list-disc">
                Service Areas
              </li>
              <li className="text-[16px] font-[400] leading-[22px] decoration-current  list-disc">
                Pricing
              </li>
              <li className="text-[16px] font-[400] leading-[22px] decoration-current  list-disc">
                Become a Shopper
              </li>
            </ul>
          </div>
          <div className="flex flex-col lg:items-center">
            <p className="text-[20px] leading-[27.28px] font-[600] text-center">
              Company
            </p>
            <ul className="pt-[19px] flex flex-col gap-2">
              <li className="text-[16px] font-[400] leading-[22px] decoration-current  list-disc">
                About Us
              </li>
              <li className="text-[16px] font-[400] leading-[22px] decoration-current  list-disc">
                Careers
              </li>
              <li className="text-[16px] font-[400] leading-[22px] decoration-current  list-disc">
                Blog
              </li>
              <li className="text-[16px] font-[400] leading-[22px] decoration-current  list-disc">
                Contact Us
              </li>
            </ul>
          </div>
          <div className="flex flex-col lg:items-center">
            <p className="text-[20px] leading-[27.28px] font-[600] text-center">
              Partnerships
            </p>
            <ul className="pt-[19px] flex flex-col gap-2">
              <li className="text-[16px] font-[400] leading-[22px] decoration-current  list-disc">
                Partner with Us
              </li>
              <li className="text-[16px] font-[400] leading-[22px] decoration-current  list-disc">
                Affiliate Program
              </li>
              <li className="text-[16px] font-[400] leading-[22px] decoration-current  list-disc">
                Influencers
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row  gap-[103px]">
          <div className="flex flex-col">
            <p className="text-[20px] leading-[27.28px] font-[600] ">Support</p>
            <ul className="pt-[20px] flex flex-col gap-2">
              <li className="text-[16px] font-[400] leading-[22px] decoration-current  list-disc">
                Help Center
              </li>
              <li className="text-[16px] font-[400] leading-[22px] decoration-current  list-disc">
                Privacy Policy
              </li>
              <li className="text-[16px] font-[400] leading-[22px] decoration-current  list-disc">
                Terms of Service
              </li>
            </ul>
          </div>

          <div className="flex flex-col w-[296px]">
            <div className="flex flex-col">
              <p className="text-[20px] leading-[20px] font-[600] -tracking-[2%]">
                Sign Up for Our Newsletter
              </p>
              <ul className="pt-[30px] flex flex-col gap-2">
                <li className="text-[16px] font-[400] leading-[20.32px] decoration-current -tracking-[2%]">
                  Join Our Newsletter to be kept in the Loop on new enlisted
                  Market and Features
                </li>
              </ul>

              <form
                className="flex items-center border w-full rounded-[50px] h-[45px] relative mt-[30px]"
                action=""
              >
                <input
                  type="email"
                  className="bg-[#EDF9E9] text-[#A9AABD] items-center h-full w-full rounded-[50px] px-[13px] focus:border-primary focus:border focus:outline-primary"
                  placeholder="Enter Email Address"
                />
                <button
                  className="bg-[#6AC949] text-black  rounded-[50px] absolute right-[2px] w-[98px] h-[38px]"
                  type="submit"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
