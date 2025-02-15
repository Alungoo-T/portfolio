import React from "react";
import TopSideProfile from "./TopSideProfile";
import MiddleSideProfile from "./MiddleSideProfile";
import BottomSideProfile from "./BottomSideProfile";

const SideProfile = () => {
  return (
    <div className=" border-[2px] w-[350px] border-[#383838] rounded-[20px] bg-[#1e1e1f] h-fit ">
      <div className=" flex flex-col m-6 justify-center items-center gap-10">
        <TopSideProfile />
        <div className=" w-[260px] border-[0.5px] border-[#383838]"></div>
        <MiddleSideProfile />
        <div className=" w-[260px] border-[0.5px] border-[#383838]"></div>
        <BottomSideProfile />
      </div>
    </div>
  );
};

export default SideProfile;
