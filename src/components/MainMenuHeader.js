"use client";
import { useState } from "react";
import About from "./About";
import Resume from "./Resume";
import Projects from "./Projects";
import Contact from "./Contact";

const MainMenuHeader = () => {
  const [activeComponent, setActiveComponent] = useState("About");

  const menuItems = ["About", "Resume", "Projects", "Contact"];

  return (
    <>
      <header className="w-[400px] h-[70px] bg-[#2b2b2c] rounded-br-2xl rounded-tl-[20px] border border-[#383838] items-center flex justify-evenly">
        <nav className="text-lg flex space-x-2">
          {menuItems.map((item) => (
            <button
              key={item}
              className={`px-4 py-2 rounded-md transition-colors ${
                activeComponent === item
                  ? "text-[#ff00ff]"
                  : "text-white hover:text-[#cc00ff]"
              }`}
              onClick={() => setActiveComponent(item)}
            >
              {item}
            </button>
          ))}
        </nav>
      </header>
      <main className="mt-4">
        {activeComponent === "About" && <About />}
        {activeComponent === "Resume" && <Resume />}
        {activeComponent === "Projects" && <Projects />}
        {activeComponent === "Contact" && <Contact />}
      </main>
    </>
  );
};

export default MainMenuHeader;
