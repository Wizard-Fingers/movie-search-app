import React from "react";
import { FaStar } from "react-icons/fa";

const Card = ({ movie, message }) => {
	const StyleForStarIcon = { color: "yellow", fontSize: "1.2rem" };

	return (
		<div
			className="
    flex
    content-center
    cursor-pointer
    m-[5px]
    p-2"
		>
			<div
				key={movie.id}
				className="
      flex
      flex-row"
			>
				{message}

				<img
					src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
					alt={movie.title}
					className="
          min-w-[175px] 
          min-h-[200px] 
          rounded-xl 
          m-5 
          hover:scale-110 
          duration-300
          shadow-xl"
				/>
			</div>
			<div
				className="
      flex
      flex-col
      justify-center
       content-center
       "
			>
				<div
					// make the text sit at the top of the card
					className="
					flex
					flex-col
					justify-start
					content-start
					"
				>
					<h4
						className="
			text-center
			pb-[5rem]
          text-[1.5rem]
          font-bold
          font-sans dark:text-white cursor-pointer"
					>
						{movie.title}
					</h4>
				</div>
				<div className="flex flex-row content-center justify-between bottom-0">
					<div
						className="bg-gray-700 p-2 rounded-full  hover:bg-black
                   ease-in-out duration-500 m-1"
					>
						<p className=" font-bold font-sans text-yellow-300">
							Year:
							<span className="text-white pl-2">
								{movie.release_date.substring(0, 4)}
							</span>
						</p>
					</div>
					<div
						className="bg-gray-700 p-2 rounded-full  hover:bg-black
                   ease-in-out duration-500 m-1"
					>
						<div className="flex">
							<FaStar style={StyleForStarIcon} className="pt-1" />
							<p className="font-bold font-sans text-white">
								{movie.vote_average}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
