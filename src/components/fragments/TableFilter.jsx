import React from "react";
import InputFilter from "./InputFilter";

export default function TableFilter() {
  return (
    <table className="border-[1px] w-72">
      <tr>
        <th className="font-normal border-b-[1px]">
          <p className="text-left p-5 text-2xl">BRAND</p>
        </th>
      </tr>
      <tr className="flex flex-col p-5">
        <InputFilter>Adidas</InputFilter>
        <InputFilter>Nike</InputFilter>
        <InputFilter>New Balance</InputFilter>
        <InputFilter>Converse</InputFilter>
        <InputFilter>...</InputFilter>
      </tr>
    </table>
  );
}
