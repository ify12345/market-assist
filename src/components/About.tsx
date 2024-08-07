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

const About = () => {
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
    <div className="relative flex flex-col-reverse lg:flex-row items-center justify-center gap-[70px] px-[30px] lg:px-[100px] py-[46px] bg-[#ECF8E8] z-30">
      <div className="flex flex-col items-center gap-[22px]">
        <div className="w-full max-w-[536px] ">
          <img
            src="/images/about-us.png"
            className="w-full object-cover"
            alt=""
          />
        </div>
        <h1 className="hidden lg:block text-[24px] text-center leading-[29.26px] font-[600]">
          CFO,Matthew Ehizua
        </h1>
      </div>
      <div className="flex flex-col gap-[30px] lg:pt-[246px] lg:pb-[297px] w-full lg:w-[575px] revealLeft">
        <h1 className="text-black text-[40px] leading-[40px] font-bold tracking-[2%] w-full ">
          About US
        </h1>
        <h1 className="text-black text-[20px] leading-[24px] font-[400]">
          We started as an IT company, providing cutting-edge top-notch
          solutions to businesses and individuals. Our expertise in software
          development, networking, and cybersecurity helped us build a loyal
          client base.
        </h1>
      </div>

      <div className="max-w-[97px] w-full  hidden lg:block absolute -bottom-[65px] right-[100px] 2xl:right-[300px] z-10 revealRight">
        <img src="/icons/Dots.svg" className="w-full object-cover" alt="" />
      </div>
    </div>
  );
};

export default About;
