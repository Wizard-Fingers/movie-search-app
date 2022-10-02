import React from "react";
import Card from "./card";

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
