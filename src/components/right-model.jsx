import React from "react";
import { RiCloseCircleFill } from "react-icons/ri";
import { MdLightMode, MdDarkMode } from "react-icons/md";

const RightModel = ({ setOpenRightModel, theme, toggleTheme }) => {
  // styles for the right model icons
  const StyleX = { color: "yellow", fontSize: "1.4rem" };
  const DarkIconActive = { color: "yellow", fontSize: "2rem" };
   const LightIconActive = { color: "yellow", fontSize: "2rem" };
   const DarkIconInactive = { color: "gray", fontSize: "2rem" };
  const LightIconInactive = { color: "gray", fontSize: "2rem" };
  let lightButton;
  let darkButton;

  if (theme === 'light') {
    lightButton = (
      <MdLightMode className="cursor-pointer" style={LightIconActive} />
    );
    darkButton = (
      <MdDarkMode className="cursor-pointer" style={DarkIconInactive} />
    );
  } else {
    lightButton = (
      <MdLightMode className="cursor-pointer" style={LightIconInactive} />
    );
    darkButton = (
      <MdDarkMode className="cursor-pointer" style={DarkIconActive} />
    );
  }

  return (
    <div className="pt-[40] w-[100vw] h-[100vh] fixed flex justify-center self-center ">
      <div className="w-[80%] h-[40%] rounded-lg bg-gray-700 shadow-xl flex flex-col p-6">
        <div className="">
          <button
            onClick={() => {
              setOpenRightModel(false);
            }}
          >
            <div className="flex justify-end">
              <RiCloseCircleFill style={StyleX} />
            </div>
          </button>
        </div>
        <div className="">
          <h1 className="text-white">{"Mode:" + theme}</h1>
          <div className="flex justify-center pt-12 space-x-8">
            <div className="flex justify-center">
              <button
                className="flex text-white bg-black rounded-full p-3"
                onClick={toggleTheme}
              >
                {darkButton}
              </button>
            </div>
            <div className="flex justify-center">
              <button
                className="flex text-white bg-black rounded-full p-3"
                onClick={toggleTheme}
              >
                {lightButton}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightModel;
