import React from "react";
// import { useState } from "react";
import Card from "./card";
// import { useEffect } from "react";

//popular movies
// https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1
//search movies
//https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=

function Data({ movies }) {
	return (
		<>
			{movies.map((movie) => (
				<Card movie={movie} key={movie.id} />
			))}
		</>
	);
}

export default Data;
