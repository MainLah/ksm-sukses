import { React } from "react";

export default function SearchBar() {
  return (
    <div className="w-2/5 border-[1px]">
      <input
        type="text"
        placeholder="Search"
        className="w-full h-[45px] placeholder: pl-5"
      />
    </div>
  );
}
