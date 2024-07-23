import React from "react";
import FaceBookSvg from "../../public/icons/FaceBookSvg";
import TwitterSvg from "../../public/icons/TwitterSvg";
import LinkedinSvg from "../../public/icons/LinkedinSvg";
import InstagramSvg from "../../public/icons/InstagramSvg";

const Cookie = () => {
  return (
    <div className="flex justify-between flex-col lg:flex-row pt-[39px] px-[30px] lg:px-[100px] gap-5 lg;gap-0">
      <div className="flex items-center gap-[45px]">
        <p className="font-[400] text-[16px] leading-[21.28px]">
          © 2024 MarketAssist{" "}
        </p>
        <p className="font-[400] text-[16px] leading-[21.28px]">
          Cookie Declaration
        </p>
      </div>

      <div className="flex items-center gap-[16px]">
        <img
          className="w-full object-cover  lg:block"
          src="/icons/Facebook.svg"
          alt="logo"
          width={40}
        />
        <img
          className="w-full object-cover  lg:block"
          src="/icons/Twitter.svg"
          alt="logo"
          width={40}
        />
        <img
          className="w-full object-cover  lg:block"
          src="/icons/Instagram.svg"
          alt="logo"
          width={40}
        />
        <img
          className="w-full object-cover  lg:block"
          src="/icons/LinkedIn.svg"
          alt="logo"
          width={40}
        />
      </div>
    </div>
  );
};

export default Cookie;
