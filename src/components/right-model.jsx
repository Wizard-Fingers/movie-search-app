import React from "react";
import { RiCloseCircleFill } from "react-icons/ri";
import {MdLightMode,  MdDarkMode } from "react-icons/md";




const RightModel = ({ setOpenRightModel, theme, toggleTheme }) => {
  // styles for the right model
  const StyleX = { color: "yellow", fontSize: "1.4rem" };
  const DarkIconActive = { color: "yellow", fontSize: "2rem" };
  // const LightIconActive = { color: "yellow", fontSize: "2rem" };
  // const DarkIconInactive = { color: "gray", fontSize: "2rem" };
  const LightIconInactive = { color: "gray", fontSize: "2rem" };
  //styles for the onClick event for the dark and light icons in the right model

  return (
    <div className="pt-[40] w-[100vw] h-[100vh] fixed flex justify-center self-center ">
      <div className="w-[50%] h-[50%] rounded-lg bg-gray-700 shadow-xl flex flex-col p-6">
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
          <h1 className="text-white">{"Mode:"  + theme}</h1>
          <div className="flex justify-center pt-12 space-x-8">
            <div className="flex justify-center">
              <button
                className="flex text-white bg-black rounded-full p-3"
                onChange={toggleTheme}
              >
                <MdDarkMode className="cursor-pointer" style={DarkIconActive} />
              </button>
            </div>
            <div className="flex justify-center">
              <button
                className="flex text-white bg-black rounded-full p-3"
                onChange={toggleTheme}
              >
                <MdLightMode
                  className="cursor-pointer"
                  style={LightIconInactive}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightModel;
