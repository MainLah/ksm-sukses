import React from "react";

export default function ColorBubble(props) {
  const { color } = props;
  return <div className={"bg-[" + color + "] w-3 rounded-full"}></div>;
}
