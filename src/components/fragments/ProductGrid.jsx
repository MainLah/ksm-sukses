import React from "react";
import Product from "./Product";

export default function ProductGrid(props) {
  const { numberOfProducts, numberOfCols } = props;
  return (
    <div className={"grid gap-12 mx-10 mb-20" + " grid-cols-" + numberOfCols}>
      {/* Renders Product n times
       * in this case, numberOfProducts = n
       */}
      {numberOfProducts &&
        [...Array(Number(numberOfProducts))].map((e, i) => <Product key={i} />)}
    </div>
  );
}
