import React from "react";

export default function ColorBubble(props) {
  const { bgColor } = props;
  return <div className={"w-3 rounded-full " + { bgColor }}>asdas </div>;
}
