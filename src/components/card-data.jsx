import React from 'react'
import { useState } from "react";
import  Card  from './card';

function Data() {
  //card component props
  const [info, setInfo] = useState([
    {
      title: "The Shawshank Redemption",
      image:
        "https://media.movieassets.com/static/images/items/movies/posters/a515035291f650ed7cd2486191845d13.jpg",
      year: "1994",
      rating: "9.3",
      id: 1,
    },
    {
      title: "The Godfather",
      image:
        "https://media.movieassets.com/static/images/items/movies/posters/67290fda6339963993b32b65ec4934c8.jpg",
      year: "1972",
      rating: "9.2",
      id: 2,
    },
    {
      title: "The Godfather: Part II",
      image: "https://wallpapercave.com/wp/wp4119161.jpg",
      year: "1974",
      rating: "9.0",
      id: 3,
    },
    {
      title: "The Shawshank Redemption",
      image:
        "https://media.movieassets.com/static/images/items/movies/posters/a515035291f650ed7cd2486191845d13.jpg",
      year: "1994",
      rating: "9.3",
      id: 1,
    },
  ]);


return (
  <>
    {info.map((movie) => (
      <Card movie={movie} key={movie.id} />
    ))}
  </>
);
}

export default Data