import React from "react";
import ColorBubble from "./ColorBubble";

export default function TableColor() {
  const colorGridData = {
    "#000000": 7,
    "#FF0000": 7,
    "#FEFDFF": 7,
    "#B8AA91": 7,
    "#FFA300": 7,
    "#33FF00": 7,
    "#00A3FF": 7,
  };

  function renderBubble() {
    for (const { color, key } in colorGridData) {
      return <ColorBubble color={color} key={key} />;
    }
  }

  return (
    // <table className="border-[1px] w-72">
    //   <tr>
    //     <th className="font-normal border-b-[1px]">
    //       <p className="text-left p-5 text-2xl">Color</p>
    //     </th>
    //   </tr>
    //   <tr className="flex flex-col p-5">
    //     <div className="grid">
    //       <ColorBubble color="#fefdff"></ColorBubble>
    //     </div>
    //   </tr>
    // </table>
    <div>
      <div>
        <p>Color</p>
      </div>
      <div>
        <ColorBubble bgColor="bg-[#00a3ff]"></ColorBubble>
      </div>
    </div>
  );
}
