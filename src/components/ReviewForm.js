import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { addReview } from "../features/reviews/reviewsSlice";

const ReviewForm = () => {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();
  const fileInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = {
      name,
      rating,
      image,
      title,
      comment,
    };
    dispatch(addReview(newReview));
    setName("");
    setRating(0);
    setImage(null);
    setTitle("");
    setComment("");
    fileInputRef.current.value = "";
  };

  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleStarClick = (star) => {
    setRating(star);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your Name"
        required
      />
      <div>
        {/* <StarRating rating={rating} /> */}
        <h2>How would you rate it? ★</h2>
        <div style={{ fontSize: "3rem" }}>
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              onClick={() => handleStarClick(star)}
              style={{
                cursor: "pointer",
                color: star <= rating ? "#ffd700" : "#dcdcdc",
              }}
            >
              ★
            </span>
          ))}
        </div>
      </div>
      <h2>Share a video or photo</h2>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        ref={fileInputRef}
      />
      <h2>Title your review</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="What's important to know?"
      />
      <h2>Write your review</h2>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Write your like or dislikes in product"
      />
      <button type="submit">Submit Review</button>
    </form>
  );
};

export default ReviewForm;
