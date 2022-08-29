
import React, { useState } from "react";
import {FaSearch} from 'react-icons/fa'

const Search = () => {
  const styleForSearchIcon = { color: "white", fontSize: "1.4rem" }
//default text above search bar
  const defaultText = "your search"
//onchange function for search bar text as it is being typed
  const [searchText, setSearchText] = useState(defaultText)
//onchange function for search bar text as it is being typed but keeping the default text if the user deletes all the text
  const onChange = (e) => {
    if (e.target.value === "") {
      setSearchText(defaultText)
    } else {
      setSearchText(e.target.value)
    }
  }

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
                   ease-in-out duration-500"
            // placeholder="movie search"
            onChange={onChange}
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