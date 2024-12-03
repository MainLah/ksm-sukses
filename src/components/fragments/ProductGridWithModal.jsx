import React from "react";
import ProductWithModal from "./ProductWithModal";

export default function ProductGridWithModal(props) {
  const { numberOfProducts, numberOfCols, children, marginx } = props;
  return (
    <div
      className={"grid gap-12 mx-10 mb-20"}
      style={{
        gridTemplateColumns: `repeat(${numberOfCols}, minmax(0, 1fr))`,
        marginInline: `${marginx}`,
      }}
    >
      {/* Renders Product n times
       * in this case, numberOfProducts = n
       */}
      {numberOfProducts &&
        [...Array(Number(numberOfProducts))].map((e, i) => (
          <ProductWithModal key={i} />
        ))}
      {children}
    </div>
  );
}
