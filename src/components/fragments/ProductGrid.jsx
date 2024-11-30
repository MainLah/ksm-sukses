import React from "react";
import Product from "./Product";

export default function ProductGrid(props) {
  const { numberOfProducts, numberOfCols, children } = props;
  return (
    <div
      className={"grid gap-12 mx-10 mb-20"}
      style={{ gridTemplateColumns: `repeat(${numberOfCols}, minmax(0, 1fr))` }}
    >
      {/* Renders Product n times
       * in this case, numberOfProducts = n
       */}
      {numberOfProducts &&
        [...Array(Number(numberOfProducts))].map((e, i) => <Product key={i} />)}
      {children}
    </div>
  );
}
