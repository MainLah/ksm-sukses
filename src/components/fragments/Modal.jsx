import { React, useContext } from "react";
import ModalProductDetail from "./ModalProductDetail";
import { Context } from "../../pages/catalog";

export default function Modal() {
  const [isOpen, setIsOpen] = useContext(Context);
  return (
    <>
      <div
        className="w-screen h-screen fixed inset-0 backdrop-blur"
        onClick={() => (isOpen ? setIsOpen(false) : setIsOpen(true))}
      ></div>
      <div className="w-5/6 fixed top-10 left-32">
        <div className="flex flex-row w-full h-[90vh] rounded-3xl shadow-lg">
          <div className="flex justify-center bg-[#C43037] rounded-l-3xl">
            <img src="foto-produk.png" alt="Jordan" className="w-[120rem]" />
          </div>
          <div className="flex flex-col px-5 justify-center bg-white border-y border-r rounded-r-3xl">
            <p>NIKE DUNK LOW RETRO "USC"</p>
            <hr />
            <p>Start from Rp. 1.000.000,00</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              amet veniam dolores corporis maiores, soluta illo molestias dolor
              similique aliquam optio unde, asperiores ducimus necessitatibus
              perspiciatis suscipit mollitia quod velit?
            </p>
            <ModalProductDetail numberOfBubbles={2} />
          </div>
        </div>
      </div>
    </>
  );
}
