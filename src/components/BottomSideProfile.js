import LinkedIn from "@/svg/LinkedInSvg";
import Github from "@/svg/GithubSvg";
import React from "react";
import Instagram from "@/svg/Instagram";

const BottomSideProfile = () => {
  return (
    <button className=" flex gap-5 mb-10">
      <LinkedIn />
      <Instagram />
      <Github />
    </button>
  );
};

export default BottomSideProfile;
