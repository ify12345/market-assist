import Link from "next/link";
import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const Hero = () => {
  useEffect(() => {
    ScrollReveal().reveal('.reveal', {
      origin: 'bottom',
      distance: '20px',
      duration: 1000,
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
    <>
      <div className="bg-[#ECF8E8]  w-full justify-center lg:flex flex-col lg:flex-row items-center px-[30px] lg:px-[100px] gap-[72px]">
        <div className="flex flex-col w-full max-w-[538px] pt-[183px] pb-[155px]">
          <h6 className="text-primary text-[15px] leading-normal font-semibold">
            Connect with Experts Anytime, Anywhere.
          </h6>
          <h1 className="text-black text-[20px] lg:text-[50px] leading-[50px] font-bold pt-[10px] pb-[30px] w-full max-w-[517px] flex flex-col">
            <span> Your Personal</span>
            Guide to Every Market
          </h1>
          <h6 className="text-black text-[20px] leading-[28.4px] font-medium tracking-[2%] pb-[60px]">
            Market Assist seamlessly connects you with experienced locals and
            industry professionals, ensuring you receive expert guidance
            tailored to your specific needs.
          </h6>

          <button className="w-[200px] h-[52px] text-white rounded-[30px] border bg-primary flex justify-center items-center tracking-[2%] leading-[20px] text-[20px] font-bold mb-[30px]">
            Get Started
          </button>
          <h6 className="text-[#627861] text-[18px] leading-[24.55px] font-medium pb-[10px]">
            Download the MarketAssist App
          </h6>

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

        <div className="max-w-[]">
          <img
            className="w-full object-cover reveal"
            src="/images/hero-img.jpg"
            alt="logo"
          />
        </div>
      </div>
      {/* <div className="flex lg:hidden relative bg-[url('/images/hero-bg.png')] h-[687px] bg-center bg-cover bg-no-repeat">
        <div className="relative flex flex-col py-[137px] px-[30px] mx-auto h-full items-center">
          <p className="text-[#1C4B0B] text-center tracking-[-2%] font-medium text-[12px] leading-[12px] mb-[67px]">
            Connect with Experts Anytime, Anywhere.
          </p>
          <p className="text-primary text-center tracking-[-2%] font-extrabold text-[24px] leading-[24px] mb-[30px] w-full ">
            Your Personal Guide to Every Market
          </p>
          <p className="text-white text-center tracking-[5%] font-medium text-[14px] leading-[19.88px] mb-[30px] w-full ">
            Market Assist seamlessly connects you with experienced locals and
            industry professionals, ensuring you receive expert guidance
            tailored to your specific needs. Our platform empowers you to make
            informed decisions with confidence.
          </p>
          <div className="flex gap-[30px]">
            <Link
              href="/sign-up"
              className="text-white bg-primary flex items-center justify-center rounded-[20px] w-[131px] h-[31px]"
            >
              Get Started
            </Link>
            <Link
              href="/sign-up"
              className="text-primary bg-transparent border border-primary flex items-center justify-center rounded-[20px] w-[131px] h-[31px]"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Hero;
