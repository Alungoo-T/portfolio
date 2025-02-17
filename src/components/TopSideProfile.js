import React from "react";
import ProfilePic from "../public/profilePic.png";
import Image from "next/image";

const TopSideProfile = () => {
  return (
    <div className=" text-white flex flex-col gap-4 justify-center items-center">
      <div>
        <Image
          alt="avatar"
          src={ProfilePic}
          width={120}
          className=" rounded-[20px]"
        />
      </div>
      <div className=" flex flex-col gap-4 items-center">
        <p>Alungoo.T</p>
        <span className=" px-3 p-1 bg-[#2b2b2c] border rounded-lg border-[#383838]">
          Full Stack Developer
        </span>
      </div>
    </div>
  );
};

export default TopSideProfile;
