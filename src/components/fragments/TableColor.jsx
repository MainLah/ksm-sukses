import React from "react";
import ColorBubble from "./ColorBubble";

export default function TableColor() {
  const colorGridData = {
    "000000": 7,
    FF0000: 7,
    FEFDFF: 7,
    B8AA91: 7,
    FFA300: 7,
    "33FF00": 7,
    "00A3FF": 7,
  };

  function renderBubble() {
    return Object.keys(colorGridData).map((key) => (
      <div>{Array(7).fill(<ColorBubble key={key} bgColor={key} />)}</div>
    ));
  }

  return (
    <table className="border w-72">
      <tr>
        <th className="font-normal border-b">
          <p className="text-left p-5 text-2xl">Color</p>
        </th>
      </tr>
      <tr className="flex flex-col p-5">
        <div className="flex justify-between">{renderBubble()}</div>
      </tr>
    </table>
  );
}
