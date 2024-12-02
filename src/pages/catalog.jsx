import { React, useState, createContext } from "react";
import Navbar from "../components/fragments/Navbar";
import Footer from "../components/fragments/Footer";
import ProductGrid from "../components/fragments/ProductGrid";
import TableFilter from "../components/fragments/TableFilter";
import TableColor from "../components/fragments/TableColor";
import Modal from "../components/fragments/Modal";

export const Context = createContext();

export default function CatalogPage() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <Navbar />
      <div className="text-center">
        <p className="text-4xl my-12 font-medium">CATALOG</p>
      </div>
      <div className="flex flex-row justify-evenly">
        <div>
          <div>
            <p className="my-5 text-2xl font-bold">FILTER</p>
            <TableFilter />
          </div>
          <div className="pt-5">
            <TableColor />
          </div>
        </div>
        <div>
          <div className="flex flex-row justify-between mx-10 my-5 text-2xl">
            <p className="font-bold">
              RESULT
              <span className="mx-5 font-medium text-[#818181]">21078</span>
            </p>
            <p className="font-bold">
              Sort By : <u>Relevance</u> <i class="bi bi-chevron-down"></i>
            </p>
          </div>
          <Context.Provider value={[isOpen, setIsOpen]}>
            <ProductGrid numberOfProducts="15" numberOfCols="3">
              <div className="flex flex-row justify-between text-2xl col-span-3">
                <p>
                  <i className="bi bi-chevron-left mr-3"></i>Back
                </p>
                <p>1 of 200</p>
                <p>
                  Next<i className="bi bi-chevron-right ml-3"></i>
                </p>
              </div>
            </ProductGrid>
          </Context.Provider>
        </div>
      </div>
      <Context.Provider value={[isOpen, setIsOpen]}>
        {isOpen ? <Modal modalId="modal-test" /> : null}
      </Context.Provider>
      <Footer />
    </div>
  );
}
