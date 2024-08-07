import React from "react";
import CartSvg from "../../public/icons/Cart";
import HqSvg from "../../public/icons/Hq";
import TruckSvg from "../../public/icons/Truck";
import TimerSvg from "../../public/icons/Timer";
import AnalysisSvg from "../../public/icons/Analysis";
import UncertaintySvg from "../../public/icons/Uncertainty";
import ExpertSvg from "../../public/icons/Expert";
import SmileySvg from "../../public/icons/Smiley";

const GetApp = () => {
  return (
    <div className="relative bg-black flex flex-col lg:flex-row items-center py-[89px] lg:py-0 justify-center gap-[49px] lg:gap-[150px] px-[30px] lg:px-[100px]">
      <div className="flex flex-col gap-[30px] lg:pt-[258px] lg:pb-[237px] w-full lg:w-[610px] text-white">
        <h1 className="text-[20px] lg:text-[40px] text-primary lg:text-white leading-[20px] lg:leading-[40px] font-bold w-full tracking-[2%]">
          Download our app
        </h1>
        <h1 className="text-[24px] leading-[34px] font-[500] w-full -tracking-[2%]">
          Get Our App for Exclusive Market Assistance and a Seamless Experience
        </h1>
        <button className="w-[200px] h-[52px] text-white rounded-[30px] border bg-primary flex justify-center items-center tracking-[2%] leading-[20px] text-[20px] font-bold">
          Get Started
        </button>
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
      </div>

      <div className="max-w-[477px]">
        <img src="/images/phone.svg" className="w-full object-cover" alt="" />
      </div>
    </div>
  );
};

export default GetApp;
