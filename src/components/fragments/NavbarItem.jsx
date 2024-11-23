import React from "react";
import { Link } from "react-router-dom";

export default function NavbarItem(props) {
  const { icon, itemName, children } = props;
  return (
    <li>
      {icon}
      <Link to={"/" + itemName} className="opacity-25 md:text-xl sm:text-sm">
        {children}
      </Link>
    </li>
  );
}
