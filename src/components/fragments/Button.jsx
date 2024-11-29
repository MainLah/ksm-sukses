import React from "react";

export default function Button(props) {
  const { buttonText = "Button", className = "bg-black", onClick } = props;

  return (
    <button className={className} onClick={onClick}>
      {buttonText}
    </button>
  );
}
