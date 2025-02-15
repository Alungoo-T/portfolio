import React from "react";
import Programming from "../svg/programming.svg";
import Teambuilder from "../svg/teambuilder.svg";
import Time from "../svg/time.svg";
import Creative from "../svg/creative.svg";
import AboutCard from "./AbourCard";

const About = () => {
  const datas = [
    {
      svgSrc: Programming,
      title: "Programming Languages",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetti",
    },
    {
      svgSrc: Teambuilder,
      title: "Team Working & Networking",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetti",
    },
    {
      svgSrc: Time,
      title: "Time Management",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetti",
    },
    {
      // imgSrc: Creative,
      title: "Creative and Innovative",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetti",
    },
  ];
  return (
    <div className=" flex flex-col gap-3 text-white px-10 justify-items-end ">
      <div className=" text-white text-[30px] font-bold pl-[660px]">
        About Me
      </div>
      <div className=" border-[4px]  border-[#FF00FF] rounded-md ml-[750px] w-[50px]"></div>
      <p className=" pr-[50px] ">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book. It has survived not only
      </p>
      <div className=" mt-10 text-white text-[30px] font-bold pl-[520px] py-5                                ">
        Things I am good at
      </div>
      <div className=" flex flex-wrap gap-3 my-10">
        {datas.map((data, index) => {
          return (
            <div key={index}>
              <AboutCard
                svg={data.svgSrc}
                title={data.title}
                desc={data.desc}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
