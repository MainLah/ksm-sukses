import React from "react";
import Navbar from "../components/fragments/Navbar";
import Footer from "../components/fragments/Footer";
import ProductGrid from "../components/fragments/ProductGrid";

export default function CatalogPage() {
  return (
    <div>
      <Navbar />
      <div className="text-center">
        <p className="text-4xl">CATALOG</p>
      </div>
      <div></div>
      <div>
        <ProductGrid numberOfProducts="15" numberOfCols="3" />
      </div>
      <Footer />
    </div>
  );
}
