import React from "react";
import Image from "next/image";
import Mail from "../svg/mail.svg";
import Phone from "../svg/phone.svg";
import Location from "../svg/location.svg";
import { Toggle } from "@/components/ui/toggle";

const MiddleSideProfile = () => {
  return (
    <div className=" ">
      <div className=" flex flex-row gap-3 items-center">
        <Toggle>
          {" "}
          <Image
            src={Mail}
            width={40}
            alt=" mail svg"
            height={40}
            className=" bg-black p-1 rounded-lg"
          />
        </Toggle>

        <div>
          <p className=" text-gray-500">EMAIL</p>
          <p className=" text-white">alungoo976@gmail.com</p>
        </div>
      </div>
      <div className=" flex flex-row gap-3 items-center">
        <Image
          src={Phone}
          width={40}
          alt=" phone svg"
          height={40}
          className=" bg-black p-1 rounded-lg"
        />
        <div>
          <p>PHONE</p>
          <p>+1 907 441 6362</p>
        </div>
      </div>
      <div className=" flex gap-3 items-center">
        <Image
          src={Location}
          width={40}
          alt=" location svg"
          height={40}
          className=" bg-black p-1 rounded-lg"
        />
        <div>
          <p>LOCATION</p>
          <p> Virginia, USA</p>
        </div>
      </div>
    </div>
  );
};

export default MiddleSideProfile;
