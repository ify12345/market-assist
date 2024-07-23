import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import CartSvg from "../../public/icons/Cart";
import HqSvg from "../../public/icons/Hq";
import TruckSvg from "../../public/icons/Truck";
import TimerSvg from "../../public/icons/Timer";
import AnalysisSvg from "../../public/icons/Analysis";
import UncertaintySvg from "../../public/icons/Uncertainty";
import ExpertSvg from "../../public/icons/Expert";
import SmileySvg from "../../public/icons/Smiley";

const Innovative = () => {
  useEffect(() => {
    ScrollReveal().reveal(".revealRight", {
      origin: "right",
      distance: "20px",
      duration: 3000,
      interval: 200,
      reset: true,
    });
    ScrollReveal().reveal(".revealLeft", {
      origin: "left",
      distance: "60px",
      duration: 2000,
      interval: 100,
      reset: true,
    });

    // Cleanup on unmount
    return () => ScrollReveal().destroy();
  }, []);
  return (
    <div className="relative flex flex-col lg:flex-row items-center justify-center gap-[150px] px-[30px] lg:px-[100px]">
      <div className="flex flex-col gap-[30px] pt-[219px] pb-[236px] w-full lg:w-[575px] revealLeft">
        <h1 className="text-black text-[40px] leading-[40px] font-bold tracking-[2%] w-full ">
          The innovative and effortless way to shop
        </h1>
        <h1 className="text-black text-[20px] leading-[26px] font-[500] -tracking-[2%]">
          By offering access to real-time data and expert analysis, Market
          Assist empowers users to make well-informed decisions, reducing
          uncertainty and enhancing confidence in their market activities.
        </h1>
        <div className="flex flex-col gap-[20px]">
          <div className="flex items-center gap-[26px]">
            <AnalysisSvg />
            <span className="font-[500] text-[16px] leading-[19.2px] tracking-[1%]">
              Real-Time Data Access
            </span>
          </div>
          <div className="flex items-center gap-[26px]">
            <UncertaintySvg />
            <span className="font-[500] text-[16px] leading-[19.2px] tracking-[1%]">
              Reduced Uncertainty
            </span>
          </div>
          <div className="flex items-center gap-[26px]">
            <ExpertSvg />
            <span className="font-[500] text-[16px] leading-[19.2px] tracking-[1%]">
              Expert Analysis
            </span>
          </div>
          <div className="flex items-center gap-[26px]">
            <SmileySvg />
            <span className="font-[500] text-[16px] leading-[19.2px] tracking-[1%]">
              Enhanced Confidence
            </span>
          </div>
        </div>
        <button className="w-[200px] h-[52px] text-white rounded-[30px] border bg-primary flex justify-center items-center tracking-[2%] leading-[20px] text-[20px] font-bold">
          Get Started
        </button>
      </div>

      <div className="max-w-[]">
        <img src="/images/hero3.jpg" className="w-full object-cover" alt="" />
      </div>
      <div className="max-w-[97px] w-full absolute -bottom-[40px] right-[100px] 2xl:right-[300px] z-10 revealRight">
        <img src="/icons/Dots.svg" className="w-full object-cover" alt="" />
      </div>
    </div>
  );
};

export default Innovative;
