import Image from "next/image";
import React from "react";

const AboutCard = ({ svg, title, desc }) => {
  return (
    <div className=" w-[400px] p-5 gap-3 flex bg-[#202022] rounded-[12px] z-10 shadow-md border-[1px] shadow-[#2b2b30] border-[#3a3a3b] flex-row items-center">
      <div className="w-[50px]">
        {svg ? (
          <Image src={svg || ""} alt={title} width={40} height={40} />
        ) : (
          ""
        )}
      </div>
      <div className=" flex flex-col w-[340px] ">
        <div className=" font-semibold"> {title}</div>
        <div className="text-[#d6d6d6] text-sm">{desc}</div>
      </div>
    </div>
  );
};

export default AboutCard;
