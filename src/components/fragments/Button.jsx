import React from "react";

export default function Button(props) {
  const {
    buttonText = "",
    className = "bg-black",
    onClick,
    children = "",
  } = props;

  return (
    <button className={className} onClick={onClick}>
      {buttonText}
      {children}
    </button>
  );
}
