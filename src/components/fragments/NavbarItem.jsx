import React from "react";
import { Link } from "react-router-dom";

export default function NavbarItem(props) {
  const { icon, navRef, children = "" } = props;
  return (
    <li className="flex justify-center">
      <Link to={"/" + navRef} className="opacity-25 md:text-xl sm:text-sm">
        <i className={icon + " pr-2 text-[#898989]"}></i>
        {children}
      </Link>
    </li>
  );
}
