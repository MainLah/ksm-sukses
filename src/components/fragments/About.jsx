import React from "react";

export default function About(props) {
  const { AboutTitle, children } = props;
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="most-wazted text-6xl">{AboutTitle}</h1>
      <p className="text-xl font-light text-center">{children}</p>
    </div>
  );
}
