import React, { useEffect } from "react";
import ScrollReveal from 'scrollreveal';
import ProSvg from "../../public/icons/Pro";
import LocationSvg from "../../public/icons/Location";
import ClockSvg from "../../public/icons/Clock";

const Faq = () => {
  useEffect(() => {
    ScrollReveal().reveal('.revealTop', {
      origin: 'top',
      distance: '20px',
      duration: 3000,
      interval: 200,
      reset: true
    });
    ScrollReveal().reveal('.revealLeft', {
      origin: 'left',
      distance: '60px',
      duration: 2000,
      interval: 100,
      reset: true
    });

    // Cleanup on unmount
    return () => ScrollReveal().destroy();
  }, []);
  return (
    <div className="relative z-10  revealTop w-full justify-center lg:flex flex-col lg:flex-row items-center px-[30px] lg:pl-[70px] lg:pr-[100px] gap-[34px] pt-[150px] pb-[150px] 2xl:px-[300px]">
    

      <div className="flex flex-col gap-[30px] w-full revealLeft">
        <h1 className="text-black text-[40px] leading-[40px] font-[600] tracking-[2%]  w-full flex flex-col">
          Frequently Asked Questions
        </h1>
        <h6 className="text-black text-[20px] leading-[26px] font-medium -tracking-[2%]">
          Here are some commonly asked question?
        </h6>

        <ul className="flex flex-col gap-[22px]">
          <li className="flex flex-col gap-[14px]  px-[16px] py-[21px] bg-[#ECF8E8] ">
            <span className="font-[500] text-[16px] leading-[16px] -tracking-[2%] pb-[14px] bg-[#F5FBF3] border-b border-[#909090]">
              1. How much does it cost to get an market assistant for a whole
              day?
            </span>
            <span className="font-[500] text-[16px] leading-[16px] -tracking-[2%] text-[#909090]">
              The Ideal cost for a market agent vary in respect to the market
              location and the manner of assist the user require of the agent.
            </span>
          </li>
          <li className="flex flex-col gap-[14px] bg-[#F5FBF3]  px-[16px] py-[21px]">
            <span className="font-[500] text-[16px] leading-[16px] -tracking-[2%]">
              2. Who are the experts and professionals available on Market
              Assist?
            </span>
          </li>
          <li className="flex flex-col gap-[14px] bg-[#F5FBF3]  px-[16px] py-[21px]">
            <span className="font-[500] text-[16px] leading-[16px] -tracking-[2%]">
              3. How can Market Assist help me make better market decisions?
            </span>
          </li>
          <li className="flex flex-col gap-[14px] bg-[#F5FBF3]  px-[16px] py-[21px]">
            <span className="font-[500] text-[16px] leading-[16px] -tracking-[2%]">
              4. Is Market Assist suitable for beginners or only for experienced
              market participants?
            </span>
          </li>
          <li className="flex flex-col gap-[14px] bg-[#F5FBF3]  px-[16px] py-[21px]">
            <span className="font-[500] text-[16px] leading-[16px] -tracking-[2%]">
              5. How do I get started with Market Assist?
            </span>
          </li>
          <li className="flex flex-col gap-[14px] bg-[#F5FBF3]  px-[16px] py-[21px]">
            <span className="font-[500] text-[16px] leading-[16px] -tracking-[2%]">
              6. How does Market Assist ensure the accuracy and reliability of
              the information provided?
            </span>
          </li>
        </ul>
      </div>

      <div className="max-w-[516px] w-full hidden lg:block">
        <img className="w-full object-cover" src="/images/faq.png" alt="logo" />
      </div>
    </div>
  );
};

export default Faq;
