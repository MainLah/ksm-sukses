import React from "react";
import { Link } from "react-router-dom";

export default function NavbarItem(props) {
  const { icon, itemName, children } = props;
  return (
    <li>
      <Link to={"/" + itemName} className="opacity-25 md:text-xl sm:text-sm">
        <i className={icon + " pr-2 text-[#898989]"}></i>
        {children}
      </Link>
    </li>
  );
}
