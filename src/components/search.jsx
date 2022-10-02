
import React from "react";
import {FaSearch} from 'react-icons/fa'

const Search = ({ searchText, onSearchChange}) => {
  const styleForSearchIcon = { color: "white", fontSize: "1.4rem" }

  return (
		<div>
			<p className="flex justify-around text-gray-400 font-family:Roboto font-bold">
				from "{searchText}"
			</p>
			<div
				className="
      p-8
      flex
      justify-evenly
      items-center
      px-4
      sm:px-6
      lg:px-8"
			>
				<div className="relative">
					<input
						type="text"
						onChange={onSearchChange}
						// placeholder="movie search"
						className="
            bg-gray-700 
            h-[4rem] 
            w-[21rem] 
            pr-8 
            pl-[4rem] 
            rounded-2xl
             z-0 
             focus:shadow 
             focus:outline-none 
             flex
              justify-center
               font-bold
                text-white
                 text-2xl
                  hover:bg-black
                   ease-in-out duration-500
                   hover:scale-105"
					/>
					<div
						className="
          absolute
           top-5
           left-5"
					>
						<FaSearch style={styleForSearchIcon} />
					</div>
				</div>
			</div>
		</div>
  );
}
export default Search