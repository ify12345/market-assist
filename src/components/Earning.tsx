import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import ProSvg from "../../public/icons/Pro";
import LocationSvg from "../../public/icons/Location";
import ClockSvg from "../../public/icons/Clock";

const Earning = () => {
  useEffect(() => {
    ScrollReveal().reveal(".reveal", {
      origin: "bottom",
      distance: "20px",
      duration: 1000,
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
    <div className=" bg-[#ECF8E8]  w-full justify-center lg:flex flex-col lg:flex-row items-center px-[30px] lg:pl-[52px] lg:pr-[100px] gap-[150px]">
      <div className="max-w-[602px] w-full revealLeft">
        <img
          className="w-full object-cover"
          src="/images/hero4.png"
          alt="logo"
        />
      </div>

      <div className="flex flex-col gap-[30px] w-full max-w-[527px] pt-[151px] pb-[150px] reveal">
        <h1 className="text-black text-[40px] leading-[48px] font-bold  w-full flex flex-col">
          Start Earning Through Shopping.
        </h1>
        <h6 className="text-black text-[20px] leading-[26px] font-medium -tracking-[2%]">
          Market Assist seamlessly connects you with experienced locals and
          industry professionals, ensuring you receive expert guidance tailored
          to your specific needs.
        </h6>

        <div className="flex flex-col gap-[22px]">
          <div className="flex items-center gap-[26px]">
            <ProSvg />
            <span className="font-[500] text-[20px] leading-[26px] -tracking-[2%]">
              Professional Assistance
            </span>
          </div>
          <div className="flex items-center gap-[26px]">
            <LocationSvg />
            <span className="font-[500] text-[20px] leading-[26px] -tracking-[2%]">
              Professional Assistance
            </span>
          </div>
          <div className="flex items-center gap-[26px]">
            <ClockSvg />
            <span className="font-[500] text-[20px] leading-[26px] -tracking-[2%]">
              Professional Assistance
            </span>
          </div>
        </div>

        <button className="w-[200px] h-[52px] text-white rounded-[30px] border bg-primary flex justify-center items-center tracking-[2%] leading-[20px] text-[20px] font-bold mt-[20px]">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Earning;
