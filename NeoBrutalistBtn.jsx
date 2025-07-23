import React from "react";
import "./NeoBrutalistButton.css"; // if using external CSS

const NeoBrutalistButton = ({
  text = "",
  color = "yellow-400",
  textColor = "black",
  onClick,
}) => {
  return (
    <button
      className={`neo-brutalist bg-${color} text-${textColor} text-lg font-bold py-3 px-6 hover:bg-${color}-600 transition-none`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default NeoBrutalistButton;
