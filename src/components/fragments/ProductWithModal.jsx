import { React, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../pages/catalog";

export default function ProductWithModal() {
  const [isOpen, setIsOpen] = useContext(Context);

  return (
    <div
      className="flex flex-col justify-center items-center bg-[#C43037] rounded-lg cursor-pointer"
      onClick={() => (isOpen ? setIsOpen(false) : setIsOpen(true))}
    >
      <img src="foto-produk.png" alt="Produk" className="w-96" />
      <div className="flex justify-center items-center bg-[#ededed] w-full h-12 relative">
        <p className="text-sm md:text-base">NIKE DUNK LOW RETRO "USC"</p>
        <Link>
          <div className="flex justify-center bg-[#fefdff] rounded-full w-12 h-12 text-center absolute right-5 bottom-10 md:bottom-5">
            <i className="bi bi-heart text-3xl py-2 text-[#898989]"></i>
          </div>
        </Link>
      </div>
    </div>
  );
}
