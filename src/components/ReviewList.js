import React from "react";
import { useSelector } from "react-redux";
import StarRating from "./StarRating";

const ReviewList = () => {
  const reviews = useSelector((state) => state.reviews);

  return (
    <div>
      <h2>Reviews</h2>
      {reviews.map((review, index) => (
        <div
          key={index}
          style={{
            boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
            width: "60%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            padding: "2rem",
            background: "white",
            color: "black",
            margin: "1rem",
          }}
        >
          <h3>{review.name}</h3>
          <StarRating rating={review.rating} />
          {review.image && <img src={review.image} alt="Review" width="100" />}
          <p>
            <strong>{review.title}</strong>
          </p>
          <p>{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewList;
