import React from "react";
import Star from "./Star.jsx";

const Star_Rating = ({
  maxRating,
  tempRate,
  setTempRate,
  rating,
  setRate,
  messages = [],
}) => {
  return (
    <div className="star-box">
      <div className="star-container">
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i} // Add a unique key for each star
            Ratingset={() => {
              setRate(i + 1);
              setTempRate(0); // Reset tempRate when a rating is set
            }}
            full={tempRate ? tempRate >= i + 1 : rating >= i + 1}
            onHoverIn={() => setTempRate(i + 1)}
            onHoverOut={() => setTempRate(0)}
          />
        ))}
      </div>
      <p>
        {tempRate > 0 && messages.length === maxRating
          ? messages[tempRate - 1] // Show message for tempRate when hovering
          : rating > 0 && messages.length === maxRating
          ? messages[rating - 1] // Show message for the actual rating
          : "🐒"}{" "}
      </p>
    </div>
  );
};

export default Star_Rating;
