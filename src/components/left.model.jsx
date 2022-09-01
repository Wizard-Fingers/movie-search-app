import React from "react";
import { RiCloseCircleFill } from "react-icons/ri";
import example from "../assets/images/example.png";

const LeftModel = ({ setOpenLeftModel }) => {
  const StyleX = { color: "yellow", fontSize: "1.4rem" };

  return (
    <div className="pt-[40] w-[100vw] h-[100vh] fixed flex justify-center self-center ">
      <div className="w-[60%] h-[60%] rounded-lg bg-gray-700 shadow-xl flex flex-col p-6">
        <div className="">
          <button
            onClick={() => {
              setOpenLeftModel(false);
            }}
          >
            <div className="flex justify-end">
              <RiCloseCircleFill style={StyleX} />
            </div>
          </button>
        </div>
        <div className="flex flex-col items-center justify-evenly">
          <h1 className="text-white">Info</h1>
          <p className="text-gray-400">
            this is a project based off of the image below but with a few changes mostly Dark and Light mode
          </p>
          <img
            src={example}
            alt="example"
            className="w-[150px] h-[290px] m-4 hover:scale-150 duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default LeftModel;
