import MainMenu from "@/components/MainMenu";
import SideProfile from "@/components/SideProfile";
import React from "react";

const Home = () => {
  return (
    <div
      className=" flex justify-items-center gap-10 px-[100px]
     m-10"
    >
      <SideProfile className=" sticky w-1/3" />
      <MainMenu className=" w-2/3" />
    </div>
  );
};

export default Home;
