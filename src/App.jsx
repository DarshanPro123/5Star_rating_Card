import { useState } from "react";
import "./App.css";
import Star_rating from "./components/Star_Rating.jsx";
import Rating_card from "./components/Rating_Card.jsx";

function App() {
  const maxRating = 7;
  const [tempRate, setTempRate] = useState(0);

  const [rating, setRate] = useState(0);
  return (
    <>
      <Rating_card>
        {" "}
        <Star_rating
          maxRating={maxRating}
          tempRate={tempRate}
          setTempRate={setTempRate}
          rating={rating}
          setRate={setRate}
        />
      </Rating_card>
    </>
  );
}

export default App;
