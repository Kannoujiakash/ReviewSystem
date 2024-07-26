import React from "react";

const Star = ({ filled }) => {
  return <span style={{ color: filled ? "#ffd700" : "#dcdcdc" }}>★</span>;
};

export default Star;
