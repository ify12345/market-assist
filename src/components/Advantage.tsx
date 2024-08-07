import React, { useEffect } from "react";
import CartSvg from "../../public/icons/Cart";
import HqSvg from "../../public/icons/Hq";
import TruckSvg from "../../public/icons/Truck";
import TimerSvg from "../../public/icons/Timer";
import ScrollReveal from "scrollreveal";

const Advantage = () => {
  useEffect(() => {
    ScrollReveal().reveal(".reveal", {
      origin: "bottom",
      distance: "20px",
      duration: 1000,
      interval: 400,
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
    <div className="flex flex-col lg:flex-row items-center justify-center gap-[50px] lg:gap-[146px] px-[30px] lg:px-[100px] pt-[97px] lg:pt-0">
      <div className="flex flex-col lg:pt-[219px] lg:pb-[144px] w-full lg:w-[575px] revealLeft">
        <h1 className="text-black text-[40px] leading-[40px] font-bold tracking-[2%]  pb-[30px] w-full ">
          We Shop, You Relax
        </h1>
        <h1 className="text-black text-[20px] leading-[26px] font-[500] -tracking-[2%]  pb-[30px]">
          The platform is designed to cater to the unique needs of each user,
          ensuring that the guidance and recommendations provided are relevant
          and specifically suited to individual goals and situations.
        </h1>
        <div className="flex flex-col gap-[20px]">
          <div className="flex items-center gap-[26px]">
            <CartSvg />
            <span className="font-[500] text-[16px] leading-[19.2px] tracking-[1%]">
              Effortlessly delegate shopping tasks.
            </span>
          </div>
          <div className="flex items-center gap-[26px]">
            <HqSvg />
            <span className="font-[500] text-[16px] leading-[19.2px] tracking-[1%]">
              Guaranteed freshness and selection.
            </span>
          </div>
          <div className="flex items-center gap-[26px]">
            <TruckSvg />
            <span className="font-[500] text-[16px] leading-[19.2px] tracking-[1%]">
              Timely arrival, every order.
            </span>
          </div>
          <div className="flex items-center gap-[26px]">
            <TimerSvg />
            <span className="font-[500] text-[16px] leading-[19.2px] tracking-[1%]">
              Skip the store queues.
            </span>
          </div>
        </div>
        <button className="w-[200px] h-[52px] text-white rounded-[30px] border bg-primary flex justify-center items-center tracking-[2%] leading-[20px] text-[20px] font-bold mt-[20px]">
          Get Started
        </button>
      </div>

      <div className="max-w-[] reveal">
        <img src="/images/hero2.jpg" className="w-full object-cover" alt="" />
      </div>
    </div>
  );
};

export default Advantage;
