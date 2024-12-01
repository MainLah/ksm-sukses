import React from "react";
import { Link } from "react-router-dom";

export default function NavbarItem(props) {
  const { icon, navRef, children = "" } = props;
  return (
    <li className="flex justify-center">
      <Link to={"/" + navRef} className="opacity-25 text-sm md:text-xl">
        <i className={icon + " pr-2 text-[#898989]"}></i>
        {children}
      </Link>
    </li>
  );
}
