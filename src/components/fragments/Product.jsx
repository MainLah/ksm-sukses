import React from "react";

export default function Product() {
  return (
    <div className="flex flex-col justify-center items-center bg-[#C43037] rounded-lg">
      <img src="foto-produk.png" alt="Produk" className="w-96" />
      <div className="flex justify-center items-center bg-[#ededed] w-full h-12">
        NIKE DUNK LOW RETRO "USC"
        <div className="bg-[#fefdff] rounded-full w-12 h-12 text-center">
          LOVE
        </div>
      </div>
    </div>
  );
}
