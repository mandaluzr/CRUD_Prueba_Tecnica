import React from "React";
import { Link } from "react-router-dom";

import "./detailButton.css";

const DetailButton = () => {
  return (
    <Link to={`/post/${id}`}>
      <button className="detail__button"> Detail </button>
    </Link>
  );
};

export default DetailButton;
