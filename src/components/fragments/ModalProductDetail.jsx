import React from "react";
import ColorBubble from "./ColorBubble";

export default function ModalProductDetail(props) {
  const { numberOfBubbles } = props;
  return (
    <div>
      <p>
        Brand: <span>Adidas</span>
      </p>
      <p>
        Release date: <span>2024-04-03</span>
      </p>
      <p>Available color:</p>
      <div className="flex flex-row space-x-1">
        {Array(numberOfBubbles)
          .fill("")
          .map((e, i) => (
            <ColorBubble key={i} />
          ))}
      </div>
    </div>
  );
}
