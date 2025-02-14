import React from "react";
import ProfilePic from "../Public/profilePic.png";
import Image from "next/image";
import Mail from "../svg/mail.svg";
import Phone from "../svg/phone.svg";
import Location from "../svg/location.svg";

const SideProfile = () => {
  const data = [
    {
      ImgSrc: "",
      tittle: "Email",
      desc: "alungoo976@gmail.com",
    },
    {
      ImgSrc: "",
      tittle: "PHONE",
      desc: "+1 907 441 6362",
    },
    {
      ImgSrc: "",
      tittle: "LOCATION",
      desc: "Virginia, USA",
    },
  ];
  return (
    <div className=" border-[2px] w-[300px] border-gray-500 rounded-lg bg-neutral-800 h-[100vh] flex flex-col justify-start">
      <div className=" text-white flex flex-col gap-4">
        <div>
          <Image alt="avatar" src={ProfilePic} width={100} />
        </div>
        <div>
          <p>Alungoo</p>
          <span className=" p-1 bg-gray-500 border rounded-lg">
            Full Stack Engineer
          </span>
        </div>
      </div>
      <div className=" m-2 boder-[2px] border-gray-50 w-full"></div>
      <div className=" flex flex-col gap-10 items-center ">
        <div className=" flex flex-row gap-3 items-center">
          <div>
            <Image
              src={Mail}
              width={40}
              alt=" mail svg"
              height={40}
              className=" bg-black p-1 rounded-lg"
            />
          </div>
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
          <div>
            <Image
              src={Location}
              width={40}
              alt=" location svg"
              height={40}
              className=" bg-black p-1 rounded-lg"
            />
          </div>
          <div>
            <p>LOCATION</p>
            <p> Virginia, USA</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideProfile;
