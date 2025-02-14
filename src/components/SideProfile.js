import React from "react";
import TopSideProfile from "./TopSideProfile";
import MiddleSideProfile from "./MiddleSideProfile";
import BottomSideProfile from "./BottomSideProfile";

const SideProfile = () => {
  return (
    <div className=" border-[2px] w-[300px] border-gray-500 rounded-lg bg-blue-200 h-[80vh]">
      <TopSideProfile />
      <MiddleSideProfile />
      <BottomSideProfile />
    </div>
  );
};

export default SideProfile;
