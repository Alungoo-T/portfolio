import Image from "next/image";
import React from "react";
import Send from "../svg/send.svg";

const Contact = () => {
  return (
    <>
      <div className="  text-white text-[30px] font-bold text-end mr-14">
        Contact
      </div>
      <div className=" border-[4px] my-5 ml-[840px]  border-[#FF00FF]  rounded-md w-[50px]"></div>
      <div className=" items-center flex flex-col my-5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d99370.16637262335!2d-77.09697652886668!3d38.89384965499119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7c6de5af6e45b%3A0xd6e28ec00254a198!2sWashington%2C%20District%20of%20Columbia!5e0!3m2!1sen!2sus!4v1739748197001!5m2!1sen!2sus"
          width="800"
          height="450"
          loading="lazy"
          className=" border-[2px]  border-[#383838] rounded-[20px] bg-[#1e1e1f] "
        ></iframe>
      </div>
      <div className=" w-[870px] flex flex-col justify-center gap-6 my-[50px] pl-[80px]">
        <h1 className=" text-white text-[30px] font-bold">Contact Form</h1>
        <div className=" flex gap-5">
          <input
            placeholder="   Full name"
            className=" w-full h-10 border-[1px]  border-[#383838] rounded-[10px] bg-[#1e1e1f]"
          ></input>
          <input
            placeholder="   Email address"
            className=" w-full border-[1px]  border-[#383838] rounded-[10px] bg-[#1e1e1f]"
          ></input>
        </div>
        <textarea
          placeholder="   Your message"
          className=" border-[1px] h-[200px] border-[#383838] rounded-[10px] w-full bg-[#1e1e1f]"
        ></textarea>
        <div className=" bg-[#202022] rounded-[12px] shadow-md border-[1px] shadow-[#2b2b30] border-[#3a3a3b] text-[#ff00ff] flex gap-2  py-2 w-[150px] px-2 hover:bg-zinc-900 duration-200">
          <Image src={Send} width={20} height={20} alt="svg" className=" " />
          <button>Send message</button>
        </div>
      </div>
    </>
  );
};

export default Contact;
