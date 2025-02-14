import React from "react";
import ProfilePic from "../public/profilePic.png";
import Image from "next/image";

const TopSideProfile = () => {
  return (
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
  );
};

export default TopSideProfile;
