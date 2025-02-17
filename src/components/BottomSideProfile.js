import LinkedIn from "@/svg/LinkedInSvg";
import Github from "@/svg/GithubSvg";
import React from "react";
import Instagram from "@/svg/Instagram";

const BottomSideProfile = () => {
  return (
    <button className=" flex gap-5 mb-10 items-center">
      <a href="https://www.linkedin.com/in/alungoo-tumendemberel-096abb16b/">
        <LinkedIn />
      </a>
      <a href="https://www.facebook.com/alungoo976">
        <Instagram />
      </a>
      <a href="https://gist.github.com/Alungoo-T">
        <Github />
      </a>
    </button>
  );
};

export default BottomSideProfile;
