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
import axios from "axios";

import React, { useEffect, useState } from "react";

function App() {
	//themes
	const [theme, setTheme] = useState("light");

	const toggleTheme = () => {
		if (theme === "light") {
			setTheme("dark");
		} else {
			setTheme("light");
		}
	};

	useEffect(() => {
		// On page load or when changing themes, best to add inline in `head` to avoid FOUC
		if (theme === "light") {
			document.documentElement.classList.remove("dark");
			document.documentElement.classList.add("light");
		} else {
			document.documentElement.classList.remove("light");
			document.documentElement.classList.add("dark");
		}
		// Whenever the user explicitly chooses light mode
		localStorage.theme = theme;
	}, [theme]);

	// left model state
	const [leftModalOpen, setLeftModalOpen] = useState(false);
	// right model state
	const [rightModalOpen, setRightModalOpen] = useState(false);

	//use affect to set the theme and overflow hidden
	useEffect(() => {
		if (leftModalOpen || rightModalOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "visible";
		}
	}, [leftModalOpen, rightModalOpen]);

	//onchange function for search bar text as it is being typed
	const [searchText, setSearchText] = useState("");
	//onchange function for search bar text as it is being typed but keeping the default text if the user deletes all the text
	const onSearchChange = (e) => {
		setSearchText(e.target.value);
	};


	useEffect(() => {	
	const baseURL = "https://api.themoviedb.org/3/";
	const popularBaseURL =
		baseURL +
		"discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
	const searchBaseURL =
		baseURL +
		"search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=" + searchText;

		if (searchText !== "") {
			axios.get(searchBaseURL).then((response) => {
				setMovies(response.data.results);
			});
		} else {
			axios.get(popularBaseURL).then((response) => {
				setMovies(response.data.results);
			});
		}
	}, [searchText]);
  
  // useEffect to keep track of the search query
  // in the useEffect, log it to the console
  // useState to store of the input value (query)
  // value as the input attribute which is equal to the state (query)
	//card component props

	const [movies, setMovies] = useState([]);

	return (
		<div className="bg-[#F5F5F5] dark:bg-[#0C161E] min-h-screen bg-cover dark:w-[100%] dark:h-[100%] ">
			<nav>
				<div
					className="
        w-[100%]
        h-20
        flex
        justify-around
        p-1"
				>
					<div
						className="
						bg-gray-700
						shadow-xl
							hover:bg-black
							rounded-3xl
							flex
							ease-in-out
							duration-500 dar"
					>
						<img
							src={info}
							alt="information"
							className="w-[85px] my-[-5px] cursor-pointer hover:scale-110 duration-300"
							onClick={() => {
								setLeftModalOpen(true);
							}}
						/>
					</div>
					<div
						className="
          flex
          flex-col
          justify-center"
					>
						<h1
							className="
            dark:text-white
           text-black
            md:text-4xl
            sm:text-4xl
            text-xl
            font-bold
            py-0
             flex
              justify-around"
						>
							Results
						</h1>
					</div>
					<div className=" bg-gray-700 shadow-xl hover:bg-black rounded-3xl flex justify-center ease-in-out duration-500">
						<img
							src={settings}
							alt="settings"
							className="w-[85px] my-[-5px] flex justify-center cursor-pointer hover:scale-110 duration-300"
							onClick={() => {
								setRightModalOpen(true);
							}}
						/>
					</div>
				</div>
			</nav>
			<Search searchText={searchText} onSearchChange={onSearchChange} />
			<div>
				{leftModalOpen && (
					<LeftModel setOpenLeftModel={setLeftModalOpen} />
				)}
				{rightModalOpen && (
					<RightModel
						setOpenRightModel={setRightModalOpen}
						theme={theme}
						toggleTheme={toggleTheme}
					/>
				)}
			</div>

			<div className="max-w-[1240px] mx-auto grid xlg:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
				<Data movies={movies} />
			</div>
			<Footer
				leftModalOpen={leftModalOpen}
				// make the footer sticky
				// className=" position: relative; bottom: 0; left: 0; right: 0; "
			/>
		</div>
	);
}

export default App;
