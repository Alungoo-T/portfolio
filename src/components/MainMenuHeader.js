"use client";
import { useState } from "react";
import About from "./About";
import Resume from "./Resume";
import Projects from "./Projects";
import Contact from "./Contact";

const MainMenuHeader = () => {
  const [showComponent, setShowComponent] = useState("About");
  const buttonStyle = (component) =>
    `text-[#d6d6d6] hover:text-[#cc00FF] duration-200 p-4 ${
      showComponent === component ? "active:text-[#FF00FF]" : ""
    }`;
  return (
    <>
      <header className="w-[400px] h-[70px] bg-[#2b2b2c] rounded-br-2xl rounded-tl-[20px] border border-[#383838] items-center flex justify-evenly ">
        <div className="text-lg ">
          <button
            className={buttonStyle("About")}
            onClick={() => setShowComponent("About")}
          >
            About
          </button>
          <button
            className={buttonStyle("Resume")}
            onClick={() => setShowComponent("Resume")}
          >
            Resume
          </button>
          <button
            className={buttonStyle("Projects")}
            onClick={() => setShowComponent("Projects")}
          >
            Projects
          </button>
          <button
            className={buttonStyle("Contact")}
            onClick={() => setShowComponent("Contact")}
          >
            Contact
          </button>
        </div>
      </header>
      <div className=" ">{showComponent === "About" && <About />}</div>

      {showComponent === "Resume" && <Resume />}
      {showComponent === "Projects" && <Projects />}
      {showComponent === "COntact" && <Contact />}
    </>
  );
};

export default MainMenuHeader;
