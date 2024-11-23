import React from "react";

export default function Hero() {
  return (
    <div className="flex flex-row flex-wrap justify-center items-center w-full h-screen bg-[#EDEDED]">
      <div>
        <div className="most-wazted">
          <h1 className="text-6xl text-center">NEW ARRIVAL!</h1>
        </div>
        <div>
          <p className="text-4xl text-center">
            WMNS AIR JORDAN 3 RETRO <br />
            LUCKY GREEN
          </p>
        </div>
      </div>
      <div>
        <img
          src="foto-hero1.png"
          alt="Jordan"
          className="scale-x-[-1] rotate-[-30deg]"
        />
      </div>
    </div>
  );
}
