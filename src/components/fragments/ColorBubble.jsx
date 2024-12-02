import React from "react";

export default function ColorBubble(props) {
  const { bgColor = "FF0000" } = props;
  return (
    <div
      className="size-8 rounded-full my-1 border border-black"
      style={{ backgroundColor: `#${bgColor}` }}
    ></div>
  );
}
