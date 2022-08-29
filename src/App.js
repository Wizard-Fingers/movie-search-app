//components
import Search from "./components/search.jsx";
// import Card from "./components/card.jsx";
import Data from "./components/card-data.jsx";
import Footer from "./components/footer.jsx";
import LeftModel from "./components/left.model.jsx";
import RightModel from "./components/right-model.jsx";
//images for the navbar
import settings from "./assets/images/settings.png";
import info from "./assets/images/info.png";

import React, { useState } from "react";

function App() {
  //themes

  // left model state
  const [leftModalOpen, setLeftModalOpen] = useState(false);
  if (leftModalOpen) {
    document.body.style.overflow = "hidden";
  }
  // right model state
  const [rightModalOpen, setRightModalOpen] = useState(false);
  if (rightModalOpen) {
    document.body.style.overflow = "hidden";
  }

  return (
    <div className="App">
      <div className="w-[100%] h-[100%]">
        <nav>
          <div className="w-[100%] h-20 flex justify-around p-1">
            <div className=" bg-gray-700 shadow-xl hover:bg-black rounded-3xl flex  ease-in-out duration-500">
              <img
                src={info}
                alt="information"
                className="w-[85px] my-[-5px] cursor-pointer"
                onClick={() => {
                  setLeftModalOpen(true);
                }}
              />
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="text-white md:text-4xl sm:text-4xl text-xl font-bold py-0 flex justify-around">
                Result
              </h1>
            </div>
            <div className=" bg-gray-700 shadow-xl hover:bg-black rounded-3xl flex justify-center ease-in-out duration-500">
              <img
                src={settings}
                alt="settings"
                className="w-[85px] my-[-5px] flex justify-center cursor-pointer"
                onClick={() => {
                  setRightModalOpen(true);
                }}
              />
            </div>
          </div>
        </nav>
        <Search />

        <div className="">
          {leftModalOpen && <LeftModel setOpenLeftModel={setLeftModalOpen} />}
          {rightModalOpen && (
            <RightModel setOpenRightModel={setRightModalOpen} />
          )}
        </div>

        <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
          <Data/>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
