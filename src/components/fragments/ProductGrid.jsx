import React from "react";
import Product from "./Product";

export default function ProductGrid() {
  return (
    <div className="grid grid-cols-4 gap-12 mx-10 mb-20">
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </div>
  );
}
