import React from "react";
import { FaStar } from "react-icons/fa";

const Card = ({ movie }) => {
  const StyleForStarIcon = { color: "yellow", fontSize: "1.2rem" };

  return (
    <div className="flex content-center cursor-pointer">
      <div className="flex flex-row" key={movie.id}>
        <img
          src={movie.image}
          alt={movie.title}
          className="w-[175px] h-[200px] rounded-xl m-5 "
        />
      </div>
      <div className="flex flex-col  justify-between content-center">
        <div className="w-[150px] h-[50px] flex justify-items-center m-7  pt-[3rem]">
          <h2 className="text-xl  font-bold flex font-sans text-white cursor-pointer">
            {movie.title}
          </h2>
        </div>
        <div className="flex flex-row p-8 m-1 content-center justify-between pb-[4rem] ">
          <div
            className="bg-gray-700 p-2 rounded-full  hover:bg-black
                   ease-in-out duration-500 m-1"
          >
            <p className=" font-bold font-sans text-yellow-300">
              Year:
              <span className="text-white pl-2">{movie.year}</span>
            </p>
          </div>
          <div
            className="bg-gray-700 p-2 rounded-full  hover:bg-black
                   ease-in-out duration-500 m-1"
          >
            <div className="flex">
              <FaStar style={StyleForStarIcon} className="pt-1" />
              <p className="font-bold font-sans text-white">{movie.rating}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
