import { useState } from "react";
import "./App.css";
import Star_rating from "./components/Star_Rating.jsx";
import Rating_card from "./components/Rating_Card.jsx";
import PropTypes from "prop-types";

function App() {
  App.propTypes = {
    maxRating: PropTypes.number, // not user maxRating give as string or another types
  };
  const maxRating = 5;

  // Define an array of movies with their respective images and names
  const movies = [
    {
      image:
        "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/pushpa--the-rise-et00129538-08-12-2021-01-21-46.jpg",
      name: "PUSHPA",
    },
    {
      image:
        "https://i.pinimg.com/236x/8f/25/db/8f25db5d5f9a6d6fd3cdc7b993e8cb06.jpg",
      name: "DARBAR",
    },
    {
      image:
        "https://e1.pxfuel.com/desktop-wallpaper/858/754/desktop-wallpaper-baahubali-pushpa-rrr-the-south-rises-as-bollywood-appears-fake-out-of-touch-bollywood-movie-poster-2022-thumbnail.jpg",
      name: "RRR",
    },
    {
      image:
        "https://rukminim2.flixcart.com/image/850/1000/xif0q/poster/i/x/r/small-pk-aamir-khan-bollywood-hindi-movie-poster-skd4-dpost-original-imagpmz8fcczaupz.jpeg?q=90&crop=false",
      name: "pk",
    },
  ];

  return (
    <>
      <div className="cards">
        {movies.map((movie, index) => {
          // Create local state for each movie's rating
          const [tempRate, setTempRate] = useState(0);
          const [rating, setRate] = useState(0);

          return (
            <Rating_card key={index} image={movie.image} name={movie.name}>
              <Star_rating
                maxRating={maxRating}
                tempRate={tempRate}
                setTempRate={setTempRate}
                rating={rating}
                setRate={setRate}
                messages={[
                  "Not good ", // 1 star
                  "Could be better ", // 2 stars
                  "Average ", // 3 stars
                  "Good ", // 4 stars
                  "Excellent", // 5 stars
                ]}
              />
            </Rating_card>
          );
        })}
      </div>
    </>
  );
}

export default App;
