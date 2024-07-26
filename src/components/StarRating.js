import React from "react";
import Star from "./Star";

const StarRating = ({ rating }) => {
  return (
    <div style={{ fontSize: "2rem" }}>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star key={star} filled={star <= rating} />
      ))}
    </div>
  );
};

export default StarRating;
