import React from "react";
import Image from "next/image";
import Mail from "../svg/mail.svg";
import Phone from "../svg/phone.svg";
import Location from "../svg/location.svg";

const MiddleSideProfile = () => {
  return (
    <div className=" flex flex-col gap-6">
      <div className=" flex flex-row gap-5 items-center">
        <Image
          src={Mail}
          width={40}
          alt=" mail svg"
          height={40}
          className=" bg-[#202022] p-2 rounded-[12px] z-10 shadow-md border-[1px] shadow-[#2b2b30] border-[#3a3a3b]"
        />

        <div>
          <p className=" text-gray-600">EMAIL</p>
          <p className=" text-white">alungoo976@gmail.com</p>
        </div>
      </div>
      <div className=" flex flex-row gap-5 items-center">
        <Image
          src={Phone}
          width={40}
          alt=" phone svg"
          height={40}
          className=" bg-[#202022] p-2 rounded-[12px] z-10 shadow-md border-[1px] shadow-[#2b2b30] border-[#3a3a3b]"
        />
        <div>
          <p className=" text-gray-600">PHONE</p>
          <p className=" text-white">+1 907 441 6362</p>
        </div>
      </div>
      <div className=" flex gap-5 items-center">
        <Image
          src={Location}
          width={40}
          alt=" location svg"
          height={40}
          className=" bg-[#202022] p-2 rounded-[12px] z-10 shadow-md border-[1px] shadow-[#2b2b30] border-[#3a3a3b]"
        />
        <div>
          <p className=" text-gray-600">LOCATION</p>
          <p className=" text-white"> Virginia, USA</p>
        </div>
      </div>
    </div>
  );
};

export default MiddleSideProfile;
