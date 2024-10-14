import React from "react";
import Star from "./Star.jsx";

const Star_Rating = ({ maxRating, tempRate, setTempRate, rating, setRate }) => {
  return (
    <div className="star-box">
      <div className="star-container">
        {Array.from({ length: maxRating }, (_, i) => (
          // <span>s{i + 1}</span>
          <Star
            Ratingset={() => setRate(i + 1)}
            full={tempRate ? tempRate >= i + 1 : rating >= i + 1}
            onHoverIn={() => setTempRate(i + 1)}
            onHoverOut={() => setTempRate(0)}
          />
        ))}
      </div>
      {/* <p>{tempRate || rating || "🐒"}</p> */}
    </div>
  );
};

export default Star_Rating;
