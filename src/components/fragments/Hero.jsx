import React from "react";

export default function Hero(props) {
  const { HeroTitle, img, children } = props;
  return (
    <div className="flex flex-row flex-wrap justify-center items-center w-full h-screen bg-[#EDEDED]">
      <div>
        <div className="most-wazted">
          <h1 className="text-6xl text-center">{HeroTitle}</h1>
        </div>
        <div>
          <p className="text-4xl text-center">{children}</p>
        </div>
      </div>
      <div>
        <img
          src={img}
          alt="Jordan"
          className="scale-x-[-1] rotate-[-30deg] md:w-[600px] sm:w-[300px]"
        />
      </div>
    </div>
  );
}
